const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('Blue')
.setTitle('Sayaç Komutları')
.setTimestamp()
.addField('!!sayaç-ayarla','Sayaç Kanal ve Sayıyı Ayarlarsınız.')
.addField('!!sayaç-sıfırla','Sayaçı Sıfırlarsınız.')
.setFooter('DarkSlayer Sayaç Sistemi.')
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
  name: 'sayaç-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};