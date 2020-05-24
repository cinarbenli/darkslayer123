const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`${client.user.username} - Davet Menüsü`)
        .setDescription(`**Botumuza destek olmak için sunucunuza eklemeniz yeterli!**`)
        .setThumbnail(client.user.avatarURL)
        .addField(`Davet Linkleri`, `[Bot Davet Linki](https://discordapp.com/api/oauth2/authorize?client_id=702477655370629261&permissions=8&scope=bot)   **|**   [Destek Sunucusu](https://discord.gg/SvTXMs4)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ekle','davet','eekle','davet-et','davets','davet'],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};