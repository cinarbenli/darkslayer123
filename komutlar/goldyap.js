const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
 
  let nesne = args[0]
  if (!nesne) return message.channel.send('Bir kullanıcıyı etiketlemelisin!')
  
  db.set(`gold_${nesne}`, 'gold')
  
  message.channel.send(`**${nesne}** Adlı kullanıcı artık gold üye! <a:dia:702107531820138586>`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};
exports.help = {
  name: 'goldyap',
  description: '[Admin Komutu]',
  usage: 'goldyap <kişi>'
};