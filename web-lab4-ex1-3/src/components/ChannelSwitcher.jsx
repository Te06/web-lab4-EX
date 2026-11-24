
import { useState } from "react";
import { useForumMessages } from "../hooks/useForumMessages";

const channels = [
  "nasa",
  "esports-tribunal",
  "notNasa",
];

export default function ChannelSwitcher() {
  const [channelId, setChannelId] = useState("nasa");

  const { messages, loading } = useForumMessages(channelId);

  return (
    <section>
      <h2>Live Channel Switcher</h2>

      <nav aria-label="Forum channels">
        {channels.map((channel) => (
          <button
            key={channel}
            type="button"
            onClick={() => setChannelId(channel)}
            disabled={channelId === channel}
          >
            {channel}
          </button>
        ))}
      </nav>

      <h3>Current Channel: {channelId}</h3>

      {loading ? (
        <p>Loading messages...</p>
      ) : (
        <dl>
          {messages.map((message) => (
            <div key={message.id}>
              <dt>{message.author}</dt>
              <dd>{message.text}</dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}
