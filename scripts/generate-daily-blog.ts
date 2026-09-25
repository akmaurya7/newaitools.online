import fs from 'fs';
import path from 'path';
import { GoogleGenAI } from '@google/genai';

// Dynamically import the data
const loadData = async () => {
  // Use relative path for execution from project root
  const { TOOLS } = await import('../frontend/data.ts');
  const { BLOG_POSTS } = await import('../frontend/data/blogs/index.ts');
  return { TOOLS, BLOG_POSTS };
};

const run = async () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('No GEMINI_API_KEY found in environment');
    process.exit(1);
  }

  const { TOOLS, BLOG_POSTS } = await loadData();

  // Find a tool that doesn't have a blog written about it yet
  // We check if any blog ID or title contains the tool name
  const unwrittenTools = TOOLS.filter(tool => {
    const isWritten = BLOG_POSTS.some(blog => 
      blog.title.toLowerCase().includes(tool.name.toLowerCase()) || 
      blog.tags.some(tag => tag.toLowerCase() === tool.name.toLowerCase())
    );
    return !isWritten;
  });

  if (unwrittenTools.length === 0) {
    console.log('No unwritten tools found. Exiting.');
    process.exit(0);
  }

  // Pick the first unwritten tool
  const toolToReview = unwrittenTools[0];
  console.log(`Selected tool to review: ${toolToReview.name}`);

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
  You are an expert AI software reviewer writing for a blog that specializes in deep, technical analysis of AI tools. 
  Write a complete, detailed, in-depth analysis of the tool: "${toolToReview.name}" (${toolToReview.category}).
  Tool description: ${toolToReview.description}
  Link: ${toolToReview.link || ''}
  Pricing: ${toolToReview.pricing}

  REQUIREMENTS (Based on the claude-blog skill standards):
  1. Title: Create a highly engaging, attention-grabbing, and hookable title.
  2. Structure: 
     - Introduction with a clear hook.
     - > **Key Takeaways** summary box (using blockquote syntax) immediately after introduction.
     - Detailed H2 sections breaking down features, use cases, pricing, and who it's best for.
     - A conclusive summary.
  3. Formatting: Output the content as raw HTML suitable to be injected into a React <section class="prose-article"> tag. DO NOT wrap the output in markdown code blocks like \`\`\`html.
  4. Ensure all claims are analytical and objective.

  Output ONLY a JSON object with this exact structure:
  {
    "title": "Your hookable title here",
    "excerpt": "A short, 1-2 sentence hook for the preview card",
    "tags": ["tag1", "tag2"],
    "htmlContent": "Your full HTML article here"
  }
  `;

  console.log('Generating blog with Gemini...');
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-pro',
    contents: prompt,
    config: {
      responseMimeType: 'application/json'
    }
  });

  const rawText = response.text || '{}';
  const result = JSON.parse(rawText);

  // Generate a safe ID for the file and object
  const cleanName = toolToReview.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const id = `review-${cleanName}-${Date.now()}`;
  const varName = id.replace(/-/g, '_');

  const today = new Date().toISOString().split('T')[0];
  
  // Clean up content for embedding in template literals
  const safeContent = result.htmlContent.replace(/`/g, '\\`').replace(/\$/g, '\\$');

  const fileContent = `import { BlogPost } from '../../data';

export const ${varName}: BlogPost = {
  id: '${id}',
  slug: '${id}',
  category: 'Review',
  title: "${result.title.replace(/"/g, '\\"')}",
  excerpt: "${result.excerpt.replace(/"/g, '\\"')}",
  author: 'newaitools Editorial (AI generated)',
  publishDate: '${today}',
  readTime: 5,
  tags: ${JSON.stringify([...(result.tags || []), toolToReview.name])},
  featured: false,
  ogImage: '/blog/images/placeholder.jpg',
  ogImageAlt: 'Editorial illustration for ${toolToReview.name}',
  content: \`<section class="prose-article">\n\${safeContent}\n</section>\`
};
`;

  const outDir = path.join(process.cwd(), 'frontend', 'data', 'blogs');
  fs.writeFileSync(path.join(outDir, \`\${id}.ts\`), fileContent);
  
  // Update index.ts
  const indexPath = path.join(outDir, 'index.ts');
  let indexData = fs.readFileSync(indexPath, 'utf8');
  
  // Inject import
  indexData = `import { ${varName} } from './${id}';\n` + indexData;
  // Inject variable into array
  indexData = indexData.replace(/export const BLOG_POSTS: BlogPost\[\] = \[/, \`export const BLOG_POSTS: BlogPost[] = [\n  \${varName},\`);
  
  fs.writeFileSync(indexPath, indexData);

  console.log('Blog successfully generated and written to codebase!');
};

run().catch(console.error);
