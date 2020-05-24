const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('Blue')
.setTitle('Kayıt Komutları')
.setTimestamp()
.addField('!!kayıt','Mevcut Kanal Kayıtını Gösterir.')
.addField('!!kayıt-rol','Kayıt Rolünü Belirlersiniz.')
.addField('!!kayıt-log','Kayıt Log Kanalını Belirlersiniz.')
.addField('!!kayıt-kanal','Kayıt Kanalını Belirlersiniz.')
.setFooter('DarkSlayer Kayıt Sistemi.')
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
  name: 'kayıt-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};