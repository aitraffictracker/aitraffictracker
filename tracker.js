/**
 * AI Traffic Tracker v1.0.0
 * A lightweight, privacy-first script to detect and report traffic from AI chatbots.
 * No cookies. No personal data. GDPR compliant by design.
 * 
 * Usage:
 * <script src="https://cdn.jsdelivr.net/gh/aitraffictracker/aitraffictracker@1.0.0/tracker.js"
 *         data-site-id="YOUR_SITE_ID"
 *         data-api="https://your-backend.com/track"  <!-- optional -->
 *         async></script>
 */

(function() {
    'use strict';

    // --- Configuration ---
    const scriptTag = document.currentScript;
    const siteId = scriptTag ? scriptTag.getAttribute('data-site-id') : null;
    const apiEndpoint = scriptTag ? scriptTag.getAttribute('data-api') : 'https://api.aitraffic.app/track';
    
    if (!siteId) {
        console.warn('[AI Traffic] Missing data-site-id attribute. Tracking disabled.');
        return;
    }

    // --- AI Source Detection ---
    function detectAISource() {
        const params = new URLSearchParams(window.location.search);
        const utmSource = params.get('utm_source');
        
        if (utmSource) {
            const sourceLower = utmSource.toLowerCase();
            if (sourceLower === 'chatgpt' || sourceLower === 'chatgpt.com' || sourceLower.includes('chat.openai')) return 'ChatGPT';
            if (sourceLower === 'perplexity' || sourceLower.includes('perplexity.ai')) return 'Perplexity';
            if (sourceLower === 'claude' || sourceLower.includes('claude.ai')) return 'Claude';
            if (sourceLower === 'gemini' || sourceLower.includes('gemini.google')) return 'Google Gemini';
            if (sourceLower === 'copilot' || sourceLower.includes('copilot.microsoft')) return 'Microsoft Copilot';
            // Add more as needed
        }
        
        const referrer = document.referrer;
        if (referrer) {
            const refLower = referrer.toLowerCase();
            if (refLower.includes('chat.openai.com') || refLower.includes('chatgpt.com')) return 'ChatGPT';
            if (refLower.includes('perplexity.ai')) return 'Perplexity';
            if (refLower.includes('claude.ai')) return 'Claude';
            if (refLower.includes('gemini.google.com')) return 'Google Gemini';
            if (refLower.includes('copilot.microsoft.com')) return 'Microsoft Copilot';
        }
        
        return null;
    }

    const aiSource = detectAISource();
    if (!aiSource) return;

    const payload = {
        siteId: siteId,
        source: aiSource,
        page: window.location.pathname,
        // Client timestamp sent for debugging; server should use its own time
        clientTimestamp: new Date().toISOString()
    };

    if (document.referrer) {
        payload.referrer = document.referrer;
    }

    // Send via sendBeacon or fetch
    try {
        if (navigator.sendBeacon) {
            const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
            navigator.sendBeacon(apiEndpoint, blob);
        } else {
            fetch(apiEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                keepalive: true
            }).catch(() => {}); // Silent fail
        }
    } catch (e) {
        // Fail silently – don't disrupt the host page
    }
})();