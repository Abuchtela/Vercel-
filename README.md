# Vercel Upload Based Builders

This repository demonstrates how to implement and use Vercel's upload-based builders for different file types and use cases.

## Overview

Vercel builders are used to transform source files into deployable outputs. This project showcases various builders that can process uploaded files, including static assets and serverless functions.

## Features

- **Static File Builders**: Serve HTML, CSS, JavaScript, and data files
- **Serverless Function Builders**: Support for Node.js, TypeScript, Python, and Go
- **Automatic Routing**: Configured routes for different file types
- **CORS Support**: Cross-origin resource sharing enabled
- **Optimized Deployment**: Efficient file exclusion and caching

## Directory Structure

```
/
├── public/                 # Static web assets
│   ├── index.html         # Main demo page
│   ├── styles.css         # CSS styles
│   └── script.js          # Client-side JavaScript
├── static/                # Static data files
│   ├── data.json          # Sample JSON data
│   └── sample.txt         # Sample text file
├── api/                   # Serverless functions
│   ├── hello.js           # Node.js function
│   ├── typescript-hello.ts # TypeScript function
│   ├── python-hello.py    # Python function
│   └── time.go            # Go function
├── examples/              # Documentation and examples
│   └── upload-scenarios.md # Detailed upload scenarios
├── vercel.json            # Vercel configuration
├── .vercelignore          # Deployment exclusions
└── README.md              # This file
```

## Supported Builders

### 1. @vercel/static
- **Purpose**: Serves static files without transformation
- **Supports**: HTML, CSS, JS, JSON, TXT, and other static assets
- **Use Cases**: Web pages, stylesheets, client scripts, data files

### 2. @vercel/node
- **Purpose**: Processes Node.js and TypeScript serverless functions
- **Runtime**: nodejs18.x
- **Supports**: .js and .ts files in api/ directory
- **Use Cases**: REST APIs, webhooks, data processing

### 3. @vercel/python
- **Purpose**: Processes Python serverless functions
- **Runtime**: python3.9
- **Supports**: .py files in api/ directory
- **Use Cases**: Data analysis, machine learning endpoints, Python APIs

### 4. @vercel/go
- **Purpose**: Processes Go serverless functions
- **Runtime**: go1.x
- **Supports**: .go files in api/ directory
- **Use Cases**: High-performance APIs, system utilities

## Configuration

The `vercel.json` file defines:

- **Builds**: Specifies which builder to use for different file patterns
- **Routes**: Defines URL routing rules
- **Functions**: Configures runtime settings for serverless functions

## Getting Started

1. **Clone this repository**
2. **Upload files**: Add your files to appropriate directories
3. **Deploy**: Use Vercel CLI or Git integration
4. **Access**: Visit the deployed URLs to see your content

## API Endpoints

When deployed, the following endpoints will be available:

- `/` - Main demo page
- `/api/hello.js` - Node.js function example
- `/api/typescript-hello.ts` - TypeScript function example
- `/api/python-hello.py` - Python function example
- `/api/time.go` - Go function example
- `/static/data.json` - Static JSON data
- `/static/sample.txt` - Static text file

## Upload Scenarios

See `examples/upload-scenarios.md` for detailed information about different upload scenarios and best practices.

## Deployment

### Using Vercel CLI
```bash
npx vercel
```

### Using Git Integration
1. Connect your repository to Vercel
2. Push changes to trigger automatic deployment
3. Vercel will use the configuration to build and deploy

## Best Practices

1. **File Organization**: Place files in appropriate directories based on their purpose
2. **Builder Selection**: Use the most appropriate builder for each file type
3. **Performance**: Exclude unnecessary files using `.vercelignore`
4. **Security**: Don't commit sensitive data or credentials
5. **Testing**: Test functions locally before deployment

## License

This project is provided as an example for educational purposes.