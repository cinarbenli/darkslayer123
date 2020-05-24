const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
 
  let nesne = args[0]
  if (!nesne) return message.channel.send('Bir kullanıcıyı etiketlemelisin!')
  
  db.delete(`gold_${nesne}`)
  
  message.channel.send(`**${nesne}** Adlı kullanıcıdan gold üyelik başarıyla alındı! <a:tik:702107546558660608>`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};
exports.help = {
  name: 'goldçıkar',
  description: '[Admin Komutu]',
  usage: 'goldçıkar <kişi>'
};