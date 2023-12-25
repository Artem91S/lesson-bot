import { Markup, Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
import getWeatherByCity from '../index.js'
const bot = new Telegraf('5301019579:AAGwSUWnD2-Yxa2o_no_glieXXp0mdFixD4');


const testButton = Markup.keyboard([
  Markup.button.callback('/test', '/test'),
])

const mainMenu = Markup.keyboard([
  Markup.button.callback('/weather', '/weather'),
  Markup.button.callback('/delete', '/delete')
])

bot.start((ctx) => ctx.reply('Welcome'));

// bot.help((ctx) => ctx.reply('Send me a sticker'));

bot.command('menu', (ctx)=> {
  ctx.reply('here is menu', mainMenu);
})

bot.command('hide', (ctx) => {
  ctx.reply('removed', Markup.removeKeyboard());
})

bot.command('weather', async (ctx)=> {
  currentScene = 'weather';
  ctx.reply('Sure! What city do you want to check?');
});


bot.command('delete', async (ctx)=> {
  // const messageId = ctx.message.message_id;
  try {
      if (previousMessageId) {
          await ctx.deleteMessage(previousMessageId);
          previousMessageId = null;
      } else {
          ctx.reply('previous message was deleted before');
      }
  } catch(err) {
      console.log(err);
  }
});

bot.on(message('sticker'), (ctx) => ctx.reply('👍'));

bot.on(message('text'), async (ctx)=> {
  switch(currentScene) {
      case 'weather':
          const res = await getWeatherByCity(ctx.message.text)
          currentScene = 'main';
          ctx.reply(res);
          break;
      default:
          ctx.reply('I dont know what to do');
  }
  // console.log(ctx.message.from);
  previousMessageId = ctx.message.message_id;
  // ctx.telegram.sendMessage(ctx.message.chat.id, 'test message');
  // ctx.reply('I dont know what to do', testButton);
});

const header = async (request, response) => {
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

  // Acknowledge the message with Telegram
  // by sending a 200 HTTP status code
  // The message here doesn't matter.
  response.send("OK");
};

export default header;