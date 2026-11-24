
import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const messages = {
  nasa: [
    { id: 1, author: "NASA", text: "Welcome to NASA channel." },
    { id: 2, author: "Admin", text: "Space discussion started." },
  ],

  "esports-tribunal": [
    { id: 3, author: "Moderator", text: "Welcome to Esports Tribunal." },
    { id: 4, author: "Player", text: "I want to submit an appeal." },
  ],

  notNasa: [
    { id: 5, author: "Admin", text: "Welcome to notNasa channel." },
    { id: 6, author: "User", text: "This is a test message." },
  ],
};

// GET messages by channel
app.get("/api/channels/:channelId/messages", (req, res) => {
  const { channelId } = req.params;

  if (!Object.hasOwn(messages, channelId)) {
    return res.status(404).json({
      error: "Channel not found",
    });
  }

  res.json(messages[channelId]);
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
