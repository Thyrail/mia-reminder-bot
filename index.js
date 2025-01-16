const { Client, GatewayIntentBits } = require('discord.js');
const cron = require('node-cron');
require('dotenv').config();

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const DISCORD_MIA_BOT_CHANNEL_ID = process.env.DISCORD_MIA_BOT_CHANNEL_ID;
const DISCORD_TESTS_CHANNEL_ID = process.env.DISCORD_TESTS_CHANNEL_ID;

if (!DISCORD_TOKEN || !DISCORD_MIA_BOT_CHANNEL_ID || !DISCORD_TESTS_CHANNEL_ID)
{
    console.error('Missing required environment variables in .env file.');
    process.exit(1);
}

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.once('ready', () =>
{
    console.log(`Bot logged in as ${client.user.tag}`);
    scheduleMessages();
});

client.on('messageCreate', (message) =>
{
    if (message.author.bot) return;

    if (message.channelId === DISCORD_TESTS_CHANNEL_ID)
    {
        handleTestCommands(message);
    }
});

client.login(DISCORD_TOKEN).catch((err) =>
{
    console.error('Failed to log in:', err);
    process.exit(1);
});

function scheduleMessages()
{
    // Message for 09:02 AM (German time)
    cron.schedule('2 9 * * 1-5', () =>
    {
        sendReminderMessage(
            DISCORD_MIA_BOT_CHANNEL_ID,
            'Attention! 🚨\n\nPlease don\'t forget to report your attendance to the **Mia-Bot** on Slack.\n\nThank you and have a successful morning! 😊'
        );
    });

    // Message for 02:02 PM (German time)
    cron.schedule('2 14 * * 1-5', () =>
    {
        sendReminderMessage(
            DISCORD_MIA_BOT_CHANNEL_ID,
            'Attention! 🚨\n\nPlease don\'t forget to report your attendance to the **Mia-Bot** on Slack.\n\nThank you and have a successful afternoon! 😊'
        );
    });

    console.log(`Message scheduling activated for channel ID ${DISCORD_MIA_BOT_CHANNEL_ID}.`);
}

async function sendReminderMessage(channelId, message)
{
    const channel = client.channels.cache.get(channelId);
    if (!channel)
    {
        console.error(`Channel with ID ${channelId} not found.`);
        return;
    }

    try
    {
        await channel.send(message);
        console.log(`Message sent: ${message}`);
    } catch (error)
    {
        console.error('Error sending message:', error);
    }
}

function handleTestCommands(message)
{
    switch (message.content)
    {
        case '!mia':
            message.reply('Mia test successful!');
            break;
        case '!test-9':
            message.reply('Test for 09:00 AM successful!');
            break;
        case '!test-14':
            message.reply('Test for 02:00 PM successful!');
            break;
        default:
            message.reply('Unknown test command.');
    }
}