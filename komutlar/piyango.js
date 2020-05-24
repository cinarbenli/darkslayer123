const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send(' ``Acaba Kazanabilecek Mi?`` ').then(message => {
      var espriler = ['**Tebrikler! Piyangonun tam gözüne vurdun bro!**','**Yapma be,kaçırdın bro.**'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["piyango"],
  permLevel: 0
};

exports.help = {
  name: 'piyangoçek',
  description: 'Acaba Kazanabilecek Misin?',
  usage: 'piyangoçek'
};