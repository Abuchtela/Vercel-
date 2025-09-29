// Node.js serverless function example
// Built using @vercel/node builder

export default function handler(req, res) {
  const { method, query, body } = req;
  
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  const response = {
    message: 'Hello from Node.js serverless function!',
    builder: '@vercel/node',
    runtime: 'nodejs18.x',
    method: method,
    timestamp: new Date().toISOString(),
    query: query,
    userAgent: req.headers['user-agent'],
    uploadBasedBuilder: true
  };
  
  if (method === 'POST') {
    response.body = body;
  }
  
  res.status(200).json(response);
}