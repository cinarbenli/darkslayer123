const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription('**BEN DJ DIKKAT**')
    .setImage(`https://media.giphy.com/media/WOBRgKPG7lk4pSYTjK/giphy.gif`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'djdikkat',
  description: 'DjDikkat Gifi gönderir.',
  usage: 'djdikkat'
};