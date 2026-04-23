# AI Traffic Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Unmask AI referral traffic that Google Analytics calls "Direct."**

Lightweight, privacy‑first JavaScript tracker for ChatGPT, Perplexity, Claude, and more. No cookies. No personal data. GDPR‑friendly.

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
We collect only: page path, AI source, and your site-id.

Never: IP addresses, cookies, or personal data.

## 🚧 Status
✅ Tracker script – ready

🚧 Backend + dashboard – in progress

🚧 Hosted service – coming soon

## ⭐ Star this repo to follow along

Links: Landing Page · Backend Repo (soon)

Built in public by @aitraffictracker
