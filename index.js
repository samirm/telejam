const Telegraf = require('telegraf');
//const Composer = require('micro-bot');
const functions = require('firebase-functions');
const bot = new Telegraf(process.env.BOT_TOKEN);
//const bot = new Composer();

bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.startPolling();

module.exports.bot = functions.https.onRequest(
    (res, rex) => bot.handleUpdate(req.body, res)
);
