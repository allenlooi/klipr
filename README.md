# Klipr

A polished front-end MVP for a universal public social-media downloader.

## Included

- Universal URL input with automatic platform detection
- Responsive landing page
- Video / audio / thumbnail output UI
- 20-second maximum GIF selector
- Ad placeholders only, with no network integration
- Supported-platform and FAQ sections
- Backend API integration stub at `/api/resolve`

## Important

The current project is a front-end prototype. It does **not** yet extract or download media from social platforms.

To make downloads functional, connect `app/api/resolve/route.ts` to a compliant media extraction service and add temporary media processing workers for MP3 and GIF output.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production architecture

Recommended separation:

1. Next.js web frontend
2. URL resolver / platform adapter service
3. Media processing worker using FFmpeg
4. Temporary object storage for generated MP3 / GIF files
5. Automatic cleanup of temporary files

## Deployment

The frontend can be deployed to Vercel. Long-running FFmpeg processing should run in a separate worker environment such as Railway, Fly.io, Render, or a VPS.
