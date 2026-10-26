# InstiServe Course Resource & Activity Builder

Standalone React + TypeScript application for authoring course resources and learning activities. This application is intentionally isolated from the InstiServe production platform.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Current scope
- Guided multi-step resource and activity creation
- Resource metadata, content editor, file attachment selection, and learner visibility settings
- Activity types, instructions, due dates, points, and submission options
- Live preview, field validation, draft save, and publish confirmation
- Local browser persistence for prototype records

## Data and security
The prototype stores drafts in the current browser's localStorage. It does not connect to a production database, use production credentials, or transmit learner data. Replace the local adapter with an authenticated, institution-scoped API before production use.

## Design reference
Figma: https://www.figma.com/design/TdfiNncTmft31TbS5xzB3P/InstiServe-%E2%80%94-Course-Resource---Activity-Builder-UX?node-id=0-1
