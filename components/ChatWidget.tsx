"use client";

import { useEffect } from "react";

export default function ChatWidget() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.type = "module";
    // Webhook points to the local proxy (/api/chat) to avoid CORS — the
    // browser stays on the same origin and the server forwards to n8n.
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({
        webhookUrl: '/api/chat',
        mode: 'window',
        showWelcomeScreen: false,
        loadPreviousSession: false,
        initialMessages: [
          'Hi there! Welcome to Brew & Co. ☕',
          'Ask me about our menu, upcoming events, or anything else. How can I help?',
        ],
        i18n: {
          en: {
            title: 'Brew & Co.',
            subtitle: 'Your coffee guide',
            footer: '',
            getStarted: 'Start Chatting',
            inputPlaceholder: 'Ask about our menu, events…',
            closeButtonTooltip: 'Close',
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
