# AI Traffic Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Google Analytics (GA4) requires cookies, custom reports, and still misses a chunk of AI traffic.  

This 2 KB script does what it can with one line – no cookies, no IPs, no complexity.

A lightweight, privacy‑first JavaScript tracker for ChatGPT, Perplexity, Claude, Gemini, Copilot and more.  

Open source (MIT), served via global CDN.

It won’t see what’s fundamentally invisible, but it will surface every AI referral it *can* detect, and give you a clean dashboard (coming soon) to focus solely on AI traffic.

## 🚀 Usage

Add this to your `<head>`:

```html
<script src="https://cdn.jsdelivr.net/gh/aitraffictracker/aitraffictracker@1.0.0/tracker.js" data-site-id="YOUR_SITE_ID" async></script>
```

data-site-id Any unique ID for your site (e.g., myblog or your domain name, if you are self-hosting. Otherwise, we will provide you a site-id. Required. 

data-api Optional. Use only if self‑hosting the backend. Defaults to our managed service (coming soon).

## 🛣️ Two Paths
☁️ Hosted (coming soon) – Just add the script. We'll handle the rest.

🏠 Self‑hosted – Add data-api="https://your-server.com/track". Backend repo coming soon.

## 🛡️ Privacy
We store only:

Page path (e.g. /blog/sourdough)

AI source (e.g. ChatGPT)

Your anonymous site‑id

We never collect: IP addresses, cookies, device fingerprints, or any personal data.
No consent banner needed.

## 🚧 Status
✅ Tracker script – ready

🚧 Backend + dashboard – in progress

🚧 Hosted service – coming soon

## ⭐ Star this repo to follow along

Links: Landing Page · Backend Repo (soon)

Built in public by @aitraffictracker
