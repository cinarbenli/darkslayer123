const Discord = require('discord.js')
const client = new Discord.Client()
exports.run = async (client, message) => {
    var totalsure = (client.uptime / 1000)
    var gun = Math.floor(totalsure / 86400)
    var saat = Math.floor(totalsure / 3600)
    Math.floor(totalsure %= 3600)
    var dakika = Math.floor(totalsure / 60)
    var saniye = Math.floor(totalsure % 60)
    var aktivlik = `${gun} gün, ${saat} saat, ${dakika} dakika, ${saniye} saniye`
    message.channel.send(aktivlik)
}
exports.conf = {
  aliases: ['calisma', 'calismasuresi', 'calisma-suresi', 'uptime']
}
exports.help = {
  name: "çalışma-süresi",
  usage: "uptime"
}
