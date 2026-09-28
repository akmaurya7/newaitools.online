export const HOME_CATEGORIES = [
  'Writing & Text', 'Research & Knowledge', 'Image & Graphic Design', 'Video', 'Audio & Music',
  'Coding & Development', 'Website & App Creation', 'Data & Analytics', 'Productivity',
  'Business & Operations', 'Marketing & Advertising', 'Sales & CRM', 'Social Media',
  'Education & Learning', 'Presentations & Documents', 'Automation & AI Agents',
  'Customer Support', 'E-commerce', 'Finance', 'Legal', 'Healthcare', 'HR & Recruitment',
  'IT & DevOps', '3D & Game Development', 'Translation & Localization', 'SEO',
  'Meetings & Communication', 'Personal / Lifestyle', 'Scientific & Academic',
  'Specialized Industry AI', 'Knowledge Management', 'AI Infrastructure / Models / APIs'
] as const;

export const categorySlug = (category: string) =>
  category.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const lookupCategory = (slug: string) =>
  HOME_CATEGORIES.find(category => categorySlug(category) === slug);
