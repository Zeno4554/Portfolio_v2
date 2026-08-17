"use client";

import { useCallback, useMemo, useState } from "react";

export type ConversationMessage = {
  role: "system" | "user" | "assistant";
  text: string;
};

export function useConversation() {
  const [messages, setMessages] = useState<ConversationMessage[]>([]);

  const append = useCallback((message: ConversationMessage) => {
    setMessages((current) => [...current, message]);
  }, []);

  const reset = useCallback((initialMessages: ConversationMessage[]) => {
    setMessages(initialMessages);
  }, []);

  return useMemo(
    () => ({
      messages,
      append,
      reset,
    }),
    [messages, append, reset]
  );
}
