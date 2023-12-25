import { Markup, Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
import fetch from 'node-fetch'
import express from 'express';
const app = express();


// async function getWeatherByCity(city) {
//     try {
//         const cityData = await fetch(
//             `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
//         ).then((res) => res.json());
//         const {lat, lon} = cityData[0];
//         const weatherData = await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
//         ).then((res) => res.json());
//         console.log(weatherData);
//         return `Weather in ${city} is ${Math.round(weatherData.main.temp - 273)} degrees`;
//     } catch (err) {
//         return 'no city was found';
//     }
// }
const bot = new Telegraf('5301019579:AAGwSUWnD2-Yxa2o_no_glieXXp0mdFixD4');
bot.on(message("text"), (ctx) => ctx.reply("Hello"));

async (request, response) => {
  try {
	await bot.handleUpdate(request.body);
  } catch (error) {
    console.error("Error handling update", error.message);
  }

  response.send("OK");
};
// // from openweathermap
// const apiKey = "bf60c7cca9ba7d27aa20f720b3d78bec";
// const city = 'Kyiv';
// let previousMessageId;
// let currentScene = 'main';
// const testButton = Markup.keyboard([
//     Markup.button.callback('/test', '/test'),
// ])
// const mainMenu = Markup.keyboard([
//     Markup.button.callback('/weather', '/weather'),
//     Markup.button.callback('/delete', '/delete')
// ])
// bot.start((ctx) => ctx.reply('Welcome'));
// // bot.help((ctx) => ctx.reply('Send me a sticker'));
// bot.command('menu', (ctx)=> {
//     ctx.reply('here is menu', mainMenu);
// })
// bot.command('hide', (ctx) => {
//     ctx.reply('removed', Markup.removeKeyboard());
// })
// bot.command('weather', async (ctx)=> {
//     currentScene = 'weather';
//     ctx.reply('Sure! What city do you want to check?');
// });
// bot.command('delete', async (ctx)=> {
//     // const messageId = ctx.message.message_id;
//     try {
//         if (previousMessageId) {
//             await ctx.deleteMessage(previousMessageId);
//             previousMessageId = null;
//         } else {
//             ctx.reply('previous message was deleted before');
//         }
//     } catch(err) {
//         console.log(err);
//     }
// });
// bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
// bot.on(message('text'), async (ctx)=> {
//     switch(currentScene) {
//         case 'weather':
//             const res = await getWeatherByCity(ctx.message.text)
//             currentScene = 'main';
//             ctx.reply(res);
//             break;
//         default:
//             ctx.reply('I dont know what to do');
//     }
//     // console.log(ctx.message.from);
//     previousMessageId = ctx.message.message_id;
//     // ctx.telegram.sendMessage(ctx.message.chat.id, 'test message');
//     // ctx.reply('I dont know what to do', testButton);
// });
// // bot.hears('hi', (ctx) => ctx.reply('Hey there'));
// bot.launch().then(()=> console.log('bot started!'));
app.get('/', (req,res)=> {
    res.send('tg bot is ready!');
})
app.listen('8080', () => {
    console.log(`server started`);
});
export default app;