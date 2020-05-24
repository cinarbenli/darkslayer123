const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  let kanal = message.mentions.channels.first();
  if (!kanal) return message.reply('Otorol Kanalı için bir kanal etiketlemelisiniz!')
  
  db.set(`otoK_${message.guild.id}`, kanal.id)
  
  const emb = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.displayAvatarURL)
  .setDescription(`Otorol Kanal'ı başarıyla ${kanal} olarak ayarlandı!`)
  .setColor("RANDOM")
  .setTimestamp()
  message.channel.send(emb)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['otorol-kanal-ayarla','oto-rol-ayarla'],
  permLevel: 2,
  kategori: "ayar"
}
exports.help = {
  name: 'otorol-kanal',
  description: 'Sunucuya özel otorol kanalı ayarlar.',
  usage: 'otorol-kanal'
}