const {
    Telegraf
} = require('telegraf')
const { photos, weasels } = require('./const')
require('dotenv').config()
var weaselPhotos = require('./const').weasels

const bot = new Telegraf(process.env.TOKEN)
bot.start((ctx) => ctx.reply(`Привіт, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'нєгр без імені'}!`))
bot.help((ctx) => ctx.reply(require('./const').commands))
bot.command('weasel', async (ctx) => {
    try {
        await ctx.replyWithPhoto(weaselPhotos[Math.floor(Math.random() * weaselPhotos.length)])
    } catch(e) {
        console.error(e)
    }
})
bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))