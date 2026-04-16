
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Simplified backend server - Vertex AI dependencies removed for Vercel deployment
 */
import 'dotenv/config';
import express from 'express';

const app = express();
const PORT = process?.env?.API_BACKEND_PORT || 5000;

app.use(express.json({ limit: process?.env?.API_PAYLOAD_MAX_SIZE || '7mb' }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'Backend is running', timestamp: new Date().toISOString() });
});

// API endpoint placeholder
app.post('/api-proxy', (req, res) => {
  res.status(501).json({ 
    error: 'Not Implemented',
    message: 'Vertex AI proxy has been removed for Vercel deployment. For local development with Vertex AI, configure your own backend.'
  });
});

app.listen(PORT, () => {
  console.log(`Backend server listening on http://localhost:${PORT}`);
  console.log('Note: This is a simplified backend without Vertex AI dependencies.');
  console.log('For production, deploy only the frontend to Vercel.');
});


