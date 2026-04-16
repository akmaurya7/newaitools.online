# New AI Tools Online

A modern web application showcasing AI-powered design and development tools. Built with React, TypeScript, and Vite on the frontend with a Node.js/Express backend.

## Features

- **Modern UI**: Responsive design with React components
- **AI Tool Directory**: Browse and filter AI tools by category
- **Newsletter Signup**: Subscribe to stay updated
- **Fast Performance**: Built with Vite for optimal performance
- **Backend Proxy**: Node.js backend for secure API calls

## Project Structure

```
newaitools.online/
├── frontend/               # React + TypeScript frontend
│   ├── components/        # Reusable React components
│   ├── App.tsx           # Main app component
│   ├── index.tsx         # Entry point
│   └── vite.config.ts    # Vite configuration
├── backend/              # Node.js/Express backend
│   ├── server.js         # Express server
│   └── package.json      # Backend dependencies
├── vercel.json          # Vercel deployment config
└── package.json         # Root package configuration
```

## Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

## Installation

1. Clone the repository:
```bash
git clone https://github.com/akmaurya7/newaitools.online.git
cd newaitools.online
```

2. Install dependencies:
```bash
npm install
npm install --prefix frontend
```

## Development

Run the development server:
```bash
npm run dev
```

This will start:
- Frontend dev server: `http://localhost:5173`
- Backend server: `http://localhost:5000`

## Building

Build for production:
```bash
npm run build
```

## Deployment

This project is configured for **Vercel** deployment. To deploy:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy

The build process:
- Installs dependencies
- Builds the frontend with Vite
- Serves the output

## Available Scripts

```bash
npm run dev      # Start development servers
npm run build    # Build for production
npm run preview  # Preview production build
```

## Environment Variables

Create a `.env` file in the `backend/` directory if needed for API configuration.

## License

MIT

## Contributing

Feel free to open issues and submit pull requests.

---

**Live Site**: [newaitools.online](https://newaitools.online)
