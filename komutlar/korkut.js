const Discord = require('discord.js');
const loglar = require('../ayarlar.json');
//Dcs Ekibi
exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Korkut')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== '..') {
      const sunucubilgi = new Discord.RichEmbed() //Dcs Ekibi
    .setAuthor('Bööö Korktun mu?')
    .setColor('RANDOM')
    .setTimestamp()
        .setImage(`https://78.media.tumblr.com/452063fcc1533a028f27cba85291d644/tumblr_ms8w5wWoOT1spwp48o1_500.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};
//Dcs Ekibi
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["böö"],
  permLevel: 0
};

exports.help = {
  name: 'korkut',
  usage:"korkut"
};
   