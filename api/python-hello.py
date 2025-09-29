"""
Python serverless function example
Built using @vercel/python builder
"""

import json
from datetime import datetime
from http.server import BaseHTTPRequestHandler
from urllib.parse import parse_qs, urlparse

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        
        # Parse query parameters
        parsed_url = urlparse(self.path)
        query_params = parse_qs(parsed_url.query)
        
        response = {
            'message': 'Hello from Python serverless function!',
            'builder': '@vercel/python',
            'runtime': 'python3.9',
            'method': 'GET',
            'timestamp': datetime.now().isoformat(),
            'query': query_params,
            'path': parsed_url.path,
            'uploadBasedBuilder': True
        }
        
        self.wfile.write(json.dumps(response, indent=2).encode())
    
    def do_POST(self):
        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length)
        
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        
        try:
            body = json.loads(post_data.decode()) if post_data else {}
        except json.JSONDecodeError:
            body = {'raw': post_data.decode()}
        
        response = {
            'message': 'Hello from Python serverless function!',
            'builder': '@vercel/python',
            'runtime': 'python3.9',
            'method': 'POST',
            'timestamp': datetime.now().isoformat(),
            'body': body,
            'uploadBasedBuilder': True
        }
        
        self.wfile.write(json.dumps(response, indent=2).encode())
    
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()