const discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'anal'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  } else {
    msg.channel.send("Burası NSFW Kanalı Değil! <a:nsfw:702210395502411987>")
  }
};

 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['anal'],
   permLevel: 0
 };

 exports.help = {
   name: 'anal',
   description: '+18 Resim Gösterir',
   usage: 'anal'
 };