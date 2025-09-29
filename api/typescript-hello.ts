// TypeScript serverless function example
// Built using @vercel/node builder

import { VercelRequest, VercelResponse } from '@vercel/node';

interface ApiResponse {
  message: string;
  builder: string;
  runtime: string;
  method: string;
  timestamp: string;
  query?: any;
  body?: any;
  headers: Record<string, string>;
  uploadBasedBuilder: boolean;
}

export default function handler(req: VercelRequest, res: VercelResponse): void {
  const { method, query, body, headers } = req;
  
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  // Extract some headers for the response
  const responseHeaders: Record<string, string> = {};
  Object.keys(headers).forEach(key => {
    if (typeof headers[key] === 'string') {
      responseHeaders[key] = headers[key] as string;
    } else if (Array.isArray(headers[key])) {
      responseHeaders[key] = (headers[key] as string[])[0];
    }
  });
  
  const response: ApiResponse = {
    message: 'Hello from TypeScript serverless function!',
    builder: '@vercel/node',
    runtime: 'nodejs18.x',
    method: method || 'GET',
    timestamp: new Date().toISOString(),
    query: query,
    headers: responseHeaders,
    uploadBasedBuilder: true
  };
  
  if (method === 'POST') {
    response.body = body;
  }
  
  res.status(200).json(response);
}