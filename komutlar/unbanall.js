const Discord = require('discord.js'); 

exports.run = (client, message, args) => {

   message.channel.send(' Sunucudaki Tüm Yasaklanan kullanıcıların yasağını kaldırdı.')

  message.guild.fetchBans().then(bans => {
      bans.forEach(user => {
        message.guild.unban(user)
      });
    });
};

  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['banaffı'],
  permLevel: 3
};

exports.help = {
  name: 'tyk',
  description: 'Sunucudaki Tüm yasaklı kullanıcıların yasağını kaldırır.',
  usage: 'tyk'
};