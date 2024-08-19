const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
});

// Ensure the bot logs in before handling requests
client.login(process.env.DISCORD_BOT_TOKEN);

module.exports = async (req, res) => {
    try {
        // Wait until the client is ready
        await client.once('ready', async () => {
            console.log(`Logged in as ${client.user.tag}!`);

            // Replace 'YOUR_CHANNEL_ID' with the actual ID of the channel you want to fetch messages from
            const channel = await client.channels.fetch('440330341895372800');

            // Fetch the last 10 messages from the channel
            const messages = await channel.messages.fetch({ limit: 10 });

            // Format the messages to send as a response
            const messageData = messages.map(msg => ({
                author: msg.author.tag,  // Using tag instead of just the username for clarity
                content: msg.content
            }));

            // Send the messages data as JSON
            res.status(200).json(messageData);
        });
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ error: 'Failed to fetch messages' });
    }
};
