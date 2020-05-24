const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, params) => {
    var sans = ["Eroin Gibisin Varlığın Ölüm Yokluğun Kriz", "Manşet: Diz üstü yaşamaktansa ayakta ölmeyi tercih ederim.", "Ben ölümden korkmuyorum hızlı adımlarla yaşıyorum ama , sen ölümden kork bence , ben cehennemde seni bekliyorum .!", "Çok hızlıyız diyosun ya hani, Sıkıntı yok,radar olup ceza kesmesini de biliriz. . . ", "İkinci şansa inanmam ben ölü ile işim gömene kadardır."];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`**Racon Sözleri**`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'racon',
  description: 'racon sözleri',
  usage: 'racon'
};
