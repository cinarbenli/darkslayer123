const Discord = require('discord.js');
const db = require('quick.db');
exports.run = (client, message, args) => {
 const embed = new Discord.RichEmbed()
  .setColor('GREEN')
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setTitle(`Üye Sayısı!`)
  .setDescription(`Sunucumuzda **${message.guild.memberCount}** adet kullanıcı, ${message.guild.channels.size} adet kanal ,${message.guild.members.filter(m => m.user.bot).size} adet bot bulunmakta!`)
  .setFooter(`DarkSlayer - Say Komutu`)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sunucu-say',
  description: 'Sunucuyu sayarsınız.',
  usage: 'sunucu-say'
};