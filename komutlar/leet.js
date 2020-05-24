const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
exports.run = async (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
  if(!mesaj) return message.reply(`**Doğru Kullanım**: ${ayarlar.prefix}leet <mesaj>`)
  let asd = mesaj
  .replace('a', '4')
  .replace('b', '8')
  .replace('e', '3')
  .replace('l', '1')
  .replace('o', '0')
  .replace('s', '5')
  .replace('t', '7')
  const embedmsjlıleet = new Discord.RichEmbed()
  .setColor('#00AE86')
  .setTitle('Leet Hali')
  .setDescription(asd)
  message.channel.send(embedmsjlıleet)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}
exports.help = {
    name: 'leet',
    description: 'Yazdığınız yazıyı leet türüne çevirir.',
    usage: 'leet <mesaj>'
}
