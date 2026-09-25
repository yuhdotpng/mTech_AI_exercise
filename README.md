# Fieldnote Social Feed

A responsive social feed interface built with React and Vite. The app includes a feed, direct messages, post sharing, and selectable light and dark color palettes.

## Features

- Browse image posts with author details, captions, locations, and engagement counts.
- Like and save posts, add comments, and search posts by person, place, or text.
- Open Messages to read and send demo conversations with people in your contacts.
- Share a post using Copy link, Send to a contact, Add to your story, or More sharing options. The last option opens the device share sheet when supported and falls back to copying the link.
- Choose from six palettes inspired by Instagram, Discord, and Slack. Each palette includes light and dark variants with labeled hex values.
- Use the interface on desktop and mobile screen sizes.

## Setup

Requirements: Node.js and npm.

From the repository root, install the app dependencies and start the development server:

```sh
cd social-feed
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173/`.

## Available Commands

Run these from the `social-feed` directory:

```sh
npm run dev      # Start the development server
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Run Oxlint
```

## Demo Data

Posts, comments, likes, shares, story selections, palette choices, and messages are held in client-side React state. Changes are for interface demonstration and reset when the page is refreshed; the app does not currently connect to an account system or backend. Images and fonts are loaded from external services and require an internet connection.