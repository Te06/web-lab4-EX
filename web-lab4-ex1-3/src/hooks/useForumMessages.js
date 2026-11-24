
import { useState, useEffect } from "react";

export function useForumMessages(channelId) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMessages() {
      setLoading(true);
      setMessages([]);

      try {
        const response = await fetch(
          `http://localhost:3001/api/channels/${channelId}/messages`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch messages");
        }

        const data = await response.json();

        if (!controller.signal.aborted) {
          setMessages(data);
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error(error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchMessages();

    return () => {
      controller.abort();
    };
  }, [channelId]);

  return { messages, loading };
}
