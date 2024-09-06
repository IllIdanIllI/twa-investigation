// import { createServer } from 'http';
import { Telegraf, Markup } from 'telegraf'
// import { message } from 'telegraf/filters'
// import fs from 'fs'

// fs.cpSync('', '', {filter:})

console.log('start')
const bot = new Telegraf(process.env.T_TOKEN!)
// console.log(process.env.T_TOKEN);

// переделываем на телеграф 
enum Command {
    START = 'start',
    APP = 'open_app'
}

//   сделать сервер на который можно слать логи
bot.command('message', (ctx) => {
    console.log('Message');

    ctx.reply(
        'I see your message',
    )
})

bot.command('start', (ctx) => {
    ctx.reply(
        'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение',
        Markup.keyboard([
            Markup.button.webApp('Отправить сообщение', `https://b45e5011224ce9.lhr.life`),
        ])
    )
})

/// смотреть что надо ставить для десктропа в локал сторэдж
bot.launch()