# Project Documentation Site

This repository contains the documentation for BitwigBuddy. The documentation website is built with VitePress.

## Development

To run the documentation site locally:

```bash
# Install dependencies
npm install

# Start the development server
npm run docs:dev
```

The site will be available at [http://localhost:5173](http://localhost:5173) (for local development only). Replace this with your production URL when deploying.

## Building

To build the site for production:

```bash
npm run docs:build
```

The built files will be in `docs/.vitepress/dist` and can be deployed to any static site hosting service.

## Contributing

1. Fork this repository
2. Create a new branch for your changes
3. Make your changes to the documentation
4. Submit a pull request

## License

MIT


## Status Badge

[![Netlify Status](https://api.netlify.com/api/v1/badges/ffc0b404-c6a6-44fc-a3de-8b7cab942407/deploy-status)](https://app.netlify.com/sites/bitwigbuddy/deploys)