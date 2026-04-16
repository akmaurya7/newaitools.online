# How to Deploy DesignAI.tools

Because this application was built using **React and TypeScript (`.tsx`)**, web browsers cannot run the raw files directly. You need to "build" the project into standard HTML, CSS, and JavaScript before deploying it to a live server. 

The industry standard for doing this quickly is **Vite**. Here is the step-by-step guide to packaging and deploying your site for free.

---

## Step 1: Set up a local build environment (Vite)

You will need [Node.js](https://nodejs.org/) installed on your computer.

1. Open your terminal and run this command to create a new Vite project:
   ```bash
   npm create vite@latest design-ai-tools -- --template react-ts
   cd design-ai-tools
   npm install
   ```

2. Install Tailwind CSS for your build environment:
   ```bash
   npm install -D tailwindcss postcss autoprefixer lucide-react
   npx tailwindcss init -p
   ```

## Step 2: Move your files into the Vite project

1. Replace the contents of the Vite project's `tailwind.config.js` with your custom colors:
   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {
         colors: {
           paper: '#F5F2EC',
           ink: '#1A1714',
           accent: '#C8522A',
           free: '#2D6A4F',
         },
         fontFamily: {
           serif: ['"DM Serif Display"', 'serif'],
           sans: ['"DM Sans"', 'sans-serif'],
         }
       },
     },
     plugins: [],
   }
   ```

2. Open `src/index.css` and replace everything with:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

3. Move your existing files into the Vite `src` folder:
   - Move `App.tsx` to `src/App.tsx`
   - Move `data.ts` to `src/data.ts`
   - Move the entire `components/` folder into `src/components/`

4. Update the `index.html` in the root of the Vite project to include your Google Fonts and Favicon (remove the Tailwind CDN and Import Maps, as Vite handles this now):
   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎨</text></svg>">
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>DesignAI.tools | Best AI Tools for Designers</title>
       <link rel="preconnect" href="https://fonts.googleapis.com">
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
       <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet">
     </head>
     <body class="bg-paper text-ink font-sans antialiased selection:bg-accent selection:text-white">
       <div id="root"></div>
       <script type="module" src="/src/main.tsx"></script>
     </body>
   </html>
   ```

5. Test it locally by running:
   ```bash
   npm run dev
   ```

---

## Step 3: Deploy to the Web (Free)

Once your local site is working, you can deploy it to a free, professional hosting provider like **Vercel** or **Netlify**.

### Option A: Vercel (Recommended for React)
1. Push your code to a free GitHub repository.
2. Go to [Vercel.com](https://vercel.com/) and sign up with GitHub.
3. Click **"Add New..." -> "Project"**.
4. Import your GitHub repository.
5. Vercel will automatically detect Vite. Click **Deploy**.
6. In 1-2 minutes, your site will be live with a free SSL certificate and URL (which you can later change to a custom domain like `designai.tools`).

### Option B: Netlify (Drag and Drop)
If you don't want to use GitHub, you can build the site locally and drag-and-drop it.
1. In your terminal, run:
   ```bash
   npm run build
   ```
   *(This creates a `dist` folder containing your production-ready website).*
2. Go to [Netlify Drop](https://app.netlify.com/drop).
3. Drag and drop the newly created `dist` folder into the browser window.
4. Netlify will instantly deploy your site and give you a live URL.
