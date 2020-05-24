const Discord = require ("discord.js");

exports.run = (client, message) => {
  
  
  var embed = new Discord.RichEmbed()
  
  .setColor("RANDOM")
  .setDescription("Artık sende korona oldun")
  .setImage(`https://media.giphy.com/media/J1RWP1OyfkwATrL9cd/giphy.gif`)
  .setFooter("Korona var burda!!!!")
  
  message.channel.send(embed)
  
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "",
  permLevel: 0
};

module.exports.help = {
  name: 'korona-ol',
  description: 'Korana olmak için en iyi yöntem',
  usage: 'korona-ol'
};