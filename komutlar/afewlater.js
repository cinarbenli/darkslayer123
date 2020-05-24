const Discord = require('discord.js');
const Jimp = require('jimp');

exports.run = async (client, message, args) => {
var user = message.mentions.users.first() || message.author;
      if (!message.guild) user = message.author;
  

      message.channel.send(`<a:loading:702107532784697366>  | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(3000));

      Jimp.read(user.avatarURL, (err, image) => {
          image.resize(295, 295)
        
          Jimp.read("https://i.ytimg.com/vi/-2Z0Y3Kk8nU/maxresdefault.jpg", (err, avatar) => {
                avatar.resize(295, 295)
                avatar.opacity(0.5);
                image.composite(avatar, 1, 0).write(`./img/wasted/${client.user.id}-${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/wasted/${client.user.id}-${user.id}.png`));
                }, 1000);
            })})};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afl'],
  permLevel: 0
};

exports.help = {
  name: "afewlater",
  category: "Eğlence",
  description: "5 dakika sonra efekti",
  usage: "afewlater"
};