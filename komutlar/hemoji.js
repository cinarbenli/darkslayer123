const ayarlar = require('../ayarlar.json');
exports.run = async(client, message, args) => {
  if(!args[0]) return message.channel.send(`Bir emoji adı girmelisin.`)
  let emoji = message.guild.emojis.find(emoji => emoji.name === args[0]);
  if (!emoji || !emoji.animated) return message.channel.send(`Bu sunucuda bu adda bir emoji yok veya belirtilen emoji hareketli bir emoji değil.`)
  message.channel.send({files: [emoji.url]});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hemoji'],
  permLevel: 0
};

exports.help = {
  name: 'h-emoji',
  description: 'ismini girdiniz emojiyi hareketli olarak atar.',
  usage: 'hemoji <Emoji-Adı>',
};