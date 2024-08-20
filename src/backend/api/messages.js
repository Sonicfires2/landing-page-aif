require('dotenv').config({ path: '../../../.env' });
const express = require('express');
const cors = require('cors'); // Import cors
const { Client, GatewayIntentBits } = require('discord.js');

const app = express();
const PORT = process.env.PORT || 5003;

// Enable CORS for all routes, or you can specify origin like this:
app.use(cors({ origin: 'http://localhost:3000' }));

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_BOT_TOKEN);

app.get('/api/messages', async (req, res) => {
    try {
        const channel = await client.channels.fetch(process.env.CHANNEL_ID);
        const messages = await channel.messages.fetch({ limit: 10 });

        const formattedMessages = messages.map(msg => ({
            author: msg.author.tag,
            content: msg.content
        }));

        res.json(formattedMessages);
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ error: 'Failed to fetch messages' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;