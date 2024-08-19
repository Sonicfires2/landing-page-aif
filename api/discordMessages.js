const { Client } = require('discord.js');

const client = new Client({
    intents: ["GUILDS", "GUILD_MESSAGES"],
});

client.login(process.env.DISCORD_BOT_TOKEN);

module.exports = async (req, res) => {
    try {
        const channel = await client.channels.fetch('498196353663500309');
        const messages = await channel.messages.fetch({ limit: 10 });

        const messageData = messages.map(msg => ({
            author: msg.author.username,
            content: msg.content
        }));

        res.status(200).json(messageData);
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ error: 'Failed to fetch messages' });
    }
};
