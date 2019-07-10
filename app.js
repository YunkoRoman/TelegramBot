const TeleramBot = require('node-telegram-bot-api');
const db = require('./dataBase').getInstance();
const token = require('./token');

const bot = new TeleramBot(token, {polling: true});


bot.onText(/\/start/, function (msg, match){
    bot.sendMessage(msg.chat.id, msg.from.first_name + ' ' + msg.from.last_name + ' '+ 'hello')
    bot.sendMessage(msg.chat.id, 'Write /help')
});
bot.onText(/\/help/, function (msg, match){
    bot.sendMessage(msg.chat.id, `/create <date>^<text>`);
    bot.sendMessage(msg.chat.id, `/all `);
    bot.sendMessage(msg.chat.id, `/delete <id> `);
});
bot.onText(/\/create(.+)/, async function (msg, match){
    const ChatModel = db.getModel('chat');
   let authorId = msg.from.id;
   let chatId = msg.chat.id;
   let fullText = match[1].split('^');
   let date = new Date(fullText[0]);
   let text = fullText[1];
   date.setUTCHours(date.getHours()+3);
    console.log(date);
    console.log(ChatModel);
    console.log(db.getModel());
    const Pib = await ChatModel.create({
       text,
       date,
       authorId,
       chatId,
       checked:false
   })
    bot.sendMessage(chatId, 'Pib created')

});
