import { Markup, Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
const bot = new Telegraf('5301019579:AAGwSUWnD2-Yxa2o_no_glieXXp0mdFixD4');
bot.on(message("text"), (ctx) => ctx.reply("Hello"));

bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
const handleMessage = async (request, response) => {
  try {
    // Ensure that this is a message being sent
    if (request?.body) {
      console.log(request.body);
      await bot.handleUpdate(request.body);
    }
  } catch (error) {
    // If there was an error sending our message then we
    // can log it into the Vercel console
    console.error("Error sending message");
    console.log(error.toString());
  }
};

export default handleMessage;