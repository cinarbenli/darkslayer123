const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => { //Dcs Ekib8
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setTitle('Hooop Atladın!')
    .setColor("GREEN")
    .setTimestamp()
    .setDescription('')
    .setImage(`https://cdn.discordapp.com/attachments/382583684554817549/383949014036381696/giphy_2.gif`)
    return message.channel.sendEmbed(sunucubilgi); //Dcs Ekibi
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'atla',
  description: 'Efsane Atayışı Gösterir',
  usage: 'atla' //Dcs Ekibi
};