const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: '4k'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  } else {
    msg.channel.send("Bu kanal bir NSFW Kanalı Değil! <a:nsfw:702210395502411987>")
  }
};
 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['nsfw4k','4knsfw,4k'],
   permLevel: 0
 };

 exports.help = {
   name: '4k',
   description: '+18 Resim Gösterir',
   usage: 'nsfw4k'
 };