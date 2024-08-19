import { Client } from 'discord.js';

const client = new Client({
    intents: ["GUILDS", "GUILD_MESSAGES"],
});

client.login(process.env.DISCORD_BOT_TOKEN);

export default async function handler(req, res) {
    console.log("We in")
    try {
        const channel = await client.channels.fetch('440330341895372800');
        const messages = await channel.messages.fetch({ limit: 10 });

        const messageData = messages.map(msg => ({
            author: msg.author.username,
            content: msg.content
        }));

        res.status(200).json(messageData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch messages' });
    }
}
