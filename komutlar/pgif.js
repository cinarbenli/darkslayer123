const discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'pgif'})
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
   aliases: ['pgif'],
   permLevel: 0
 };

 exports.help = {
   name: 'pgif',
   description: '+18 Gif Gösterir',
   usage: 'pgif'
 }
 