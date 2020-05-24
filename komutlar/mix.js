const Discord = require('discord.js');
const funnyWords = require('funny-words');

exports.run = (bot, message) => {
    let args = message.content.split(' ').slice(1).join(" ");
    
    if (!args) return message.channel.send(":x: Karışım için yazı girmelisin.")
    message.channel.send(funnyWords(args))
}


module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mix'],
    kategori: 'eğlence',
  permLevel: 0
};

module.exports.help = {
  name: 'karıştır',
  description: 'yazdığınız yazıları karıştırır',
  usage: 'karıştır'
};