const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('Blue')
.setTitle('Otorol Komutları')
.setTimestamp()
.addField('!!otorol','Sunucuya yeni katılan kişinin otomatik rolünü ayarlarsınız.')
.addField('!!otorol-kanal','Otorol Log Kanalını Ayarlarsınız.')
.setFooter('DarkSlayer Otorol Sistemi.')
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'otorol-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};