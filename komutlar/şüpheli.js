const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Güvenlik Yükleniyor.').then(message => {
      var espriler = ['** Şüpheli https://www.kisa.link/MBdE **','** Güvenli https://www.kisa.link/MBdD **'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sorgula'],
  permLevel: 0
};

exports.help = {
  name: 'sorgula',
  description: 'Kontrol yapar.',
  usage: 'şüpheli'
};