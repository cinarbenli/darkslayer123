const Discord = require('discord.js');
const ms = require('parse-ms');

exports.run = async(client, message, args) => {
  let okul = new Date('2020-11-11')
    let zaman = ms(okul - Date.now())
    message.channel.send(`Doğum gününün kutlanmasına **${zaman.days}** gün **${zaman.hours}** saat **${zaman.minutes}** dakika kaldı!`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["aq"],
  permLevel: 0
}; //dcs ekibi

exports.help = {
  name: 'doğum-günü',
  usage: 'op'
};