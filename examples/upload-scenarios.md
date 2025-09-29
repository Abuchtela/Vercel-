# Upload Based Builders - Example Scenarios

This document demonstrates various upload scenarios that work with Vercel's upload-based builders.

## 1. Static File Uploads

### HTML Files
- Upload `.html` files to serve static web pages
- Builder: `@vercel/static`
- Example: `public/index.html`

### CSS Files
- Upload `.css` files for styling
- Builder: `@vercel/static`
- Example: `public/styles.css`

### JavaScript Files (Static)
- Upload `.js` files for client-side scripts
- Builder: `@vercel/static`
- Example: `public/script.js`

### Data Files
- Upload `.json`, `.txt`, `.xml` files
- Builder: `@vercel/static`
- Examples: `static/data.json`, `static/sample.txt`

## 2. Serverless Function Uploads

### Node.js Functions
- Upload `.js` files to `api/` directory
- Builder: `@vercel/node`
- Runtime: `nodejs18.x`
- Example: `api/hello.js`

### TypeScript Functions
- Upload `.ts` files to `api/` directory
- Builder: `@vercel/node`
- Runtime: `nodejs18.x`
- Example: `api/typescript-hello.ts`

### Python Functions
- Upload `.py` files to `api/` directory
- Builder: `@vercel/python`
- Runtime: `python3.9`
- Example: `api/python-hello.py`

### Go Functions
- Upload `.go` files to `api/` directory
- Builder: `@vercel/go`
- Runtime: `go1.x`
- Example: `api/time.go`

## 3. Configuration Files

### vercel.json
The main configuration file that defines:
- Build settings for different file types
- Routing rules
- Function configurations
- Runtime specifications

### .vercelignore
Specifies files and directories to exclude from deployment:
- Dependencies (`node_modules`)
- Build artifacts
- Environment files
- IDE configurations

## 4. Directory Structure

```
/
├── public/           # Static web assets
│   ├── index.html   # Main HTML page
│   ├── styles.css   # CSS styles
│   └── script.js    # Client-side JavaScript
├── static/          # Static data files
│   ├── data.json    # JSON data
│   └── sample.txt   # Text file
├── api/             # Serverless functions
│   ├── hello.js     # Node.js function
│   ├── typescript-hello.ts # TypeScript function
│   ├── python-hello.py     # Python function
│   └── time.go      # Go function
├── vercel.json      # Vercel configuration
└── .vercelignore    # Deployment exclusions
```

## 5. Upload Process

1. **Prepare Files**: Organize files according to their purpose
2. **Configure Builders**: Set up `vercel.json` with appropriate builders
3. **Upload**: Deploy using `vercel` CLI or Git integration
4. **Build**: Vercel processes files using specified builders
5. **Deploy**: Built outputs are deployed to CDN/serverless infrastructure

## 6. Builder Benefits

- **Automatic Processing**: Files are automatically processed based on type
- **Optimization**: Static files are optimized for delivery
- **Serverless**: Functions are deployed as serverless endpoints
- **Scalability**: Automatic scaling based on demand
- **Global Distribution**: Content delivered via global CDN