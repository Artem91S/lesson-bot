const { Telegraf } = require("telegraf");

const bot = new Telegraf('5301019579:AAGwSUWnD2-Yxa2o_no_glieXXp0mdFixD4');


bot.start((ctx) => ctx.reply('Welcome'));

module.exports = async (request, response) => {
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

export default handleMessage;