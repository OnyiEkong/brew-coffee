"use client";

import { useEffect } from "react";

export default function ChatWidget() {
  useEffect(() => {
    // Load via CDN to avoid Turbopack/Vue proxy incompatibility with the
    // bundled @n8n/chat package. Injecting a native <script type="module">
    // bypasses the bundler entirely and uses the browser's own ES module
    // loader, which Vue's reactivity system is compatible with.
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.type = "module";
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({
        webhookUrl: 'https://onyi46.app.n8n.cloud/webhook/6f104494-76d1-4900-b34e-9f22f740709e/chat',
        mode: 'window',
        showWelcomeScreen: false,
        loadPreviousSession: false,
        initialMessages: [
          'Hi there! Welcome to Brew & Co. ☕',
          'I can help you explore our menu, find out about events, or answer any questions. What can I help you with?',
        ],
        i18n: {
          en: {
            title: 'Brew & Co.',
            subtitle: 'Your coffee guide — ask us anything.',
            footer: '',
            getStarted: 'Start Chatting',
            inputPlaceholder: 'Ask about our menu, events…',
            closeButtonTooltip: 'Close chat',
          },
        },
      });
    `;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
