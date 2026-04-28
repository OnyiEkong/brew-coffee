"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";

export default function ChatWidget() {
  useEffect(() => {
    createChat({
      webhookUrl:
        "https://onyi46.app.n8n.cloud/webhook/6f104494-76d1-4900-b34e-9f22f740709e/chat",
      mode: "window",
      showWelcomeScreen: false,
      loadPreviousSession: true,
      initialMessages: [
        "Hi there! Welcome to Brew & Co. ☕",
        "I can help you explore our menu, find out about events, or answer any questions. What can I help you with?",
      ],
      i18n: {
        en: {
          title: "Brew & Co.",
          subtitle: "Your coffee guide — ask us anything.",
          footer: "",
          getStarted: "Start Chatting",
          inputPlaceholder: "Ask about our menu, events…",
          closeButtonTooltip: "Close chat",
        },
      },
    });
  }, []);

  return null;
}
