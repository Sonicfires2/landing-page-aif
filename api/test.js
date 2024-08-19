const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);

    try {
        // Replace 'YOUR_CHANNEL_ID' with the actual ID of the channel you want to fetch messages from
        const channel = await client.channels.fetch('440330341895372800');

        // Fetch the last 10 messages from the channel
        const messages = await channel.messages.fetch({ limit: 10 });

        // Log each message content and the author
        messages.forEach(msg => {
            console.log(`${msg.author.tag}: ${msg.content}`);
        });

    } catch (error) {
        console.error('Error fetching messages:', error);
    } finally {
        client.destroy(); // Log out the bot after fetching messages
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);
