const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(`DarkSlayer | Kullanıcı Komutları`, client.user.avatarURL) 
      .setDescription('**[Website](YAKINDA)**')
.setThumbnail(client.user.avatarURL)
      .addField('**Komutlar:**', '`havadurumu`, `instagram`, `rastgeleşifre`, `ilginçbilgi`, `burç`, `tekerleme`, `davetoluştur`, `emojiyükle`, `ping`, `avatar`, `kullanıcı-bilgi`, `beşiktaş`, `fenerbahçe`, `galatasaray`, `spotify`, `youtube`')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'kullanıcı',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
      usage:"kullanıcı"
};