# Deployment Guide

This guide explains how to deploy the upload-based builders to Vercel.

## Prerequisites

- Node.js 18+ installed
- Vercel CLI installed (`npm i -g vercel`)
- Vercel account

## Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Access locally**:
   - Main page: http://localhost:3000
   - API endpoints: http://localhost:3000/api/*

## Deployment Options

### Option 1: Vercel CLI

1. **Login to Vercel**:
   ```bash
   vercel login
   ```

2. **Deploy to preview**:
   ```bash
   vercel
   ```

3. **Deploy to production**:
   ```bash
   vercel --prod
   ```

### Option 2: Git Integration

1. **Connect repository to Vercel**:
   - Go to https://vercel.com/new
   - Import your Git repository
   - Vercel will auto-detect the configuration

2. **Automatic deployments**:
   - Push to main branch for production
   - Push to other branches for preview deployments

## Environment Variables

If you need environment variables:

1. **Local development** (`.env.local`):
   ```
   API_KEY=your-secret-key
   DATABASE_URL=your-database-url
   ```

2. **Production** (Vercel Dashboard):
   - Go to your project settings
   - Add environment variables in the "Environment Variables" section

## File Upload Process

1. **Prepare files**: Organize according to the directory structure
2. **Configure builders**: Update `vercel.json` if needed
3. **Deploy**: Use CLI or Git push
4. **Verify**: Check deployed endpoints

## Troubleshooting

### Build Errors
- Check `vercel.json` syntax
- Verify file paths and patterns
- Review function code for syntax errors

### Runtime Errors
- Check function logs in Vercel dashboard
- Verify runtime versions match configuration
- Test functions locally first

### Static File Issues
- Ensure files are in correct directories
- Check `.vercelignore` isn't excluding needed files
- Verify routing configuration

## Performance Tips

1. **Optimize static files**: Compress images and assets
2. **Use appropriate builders**: Don't use serverless for static content
3. **Configure caching**: Set appropriate cache headers
4. **Monitor usage**: Check function execution times and memory usage

## Security Considerations

1. **Environment variables**: Use for sensitive data
2. **CORS configuration**: Limit origins in production
3. **Input validation**: Always validate function inputs
4. **Rate limiting**: Consider implementing rate limits for APIs