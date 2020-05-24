   
const Discord = require('discord.js');
const ms = require('parse-ms');
//DarkCode
exports.run = async(client, message, args) => {
  let okul = new Date('2020/06/19 00:00:00')
// 00 ların sol tarafına yıl ay gün yazın ben Bilmiyom ne zaman tatil olacağını
    let zaman = ms(okul - Date.now())
//DarkCode
    message.channel.send(`Okulun Kapanmasına  **${zaman.days}** gün **${zaman.hours}** saat **${zaman.minutes}** dakika kaldı!`)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["osayaç"],
    kategori: 'eğlence',
  permLevel: 0
};

exports.help = {
  name: 'okul-sayaç',

  description: 'Yılbaşının kutlanmasına kaç gün kaç saat kaç dakika kaç saniye olduğunu gösterir.',
  usage: 'okulsayaç'
};