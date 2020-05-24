const Discord = require('discord.js')
exports.run = (client, message, args) => {
  
  const Mesaj = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`${args[0]} sayısının karekökü: ${Math.sqrt(args[0])}`)
  
  message.channel.send(Mesaj)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['karekök'],
  permLevel: 0
}

exports.help = {
  name: 'Karekök',
  usage:'karekök'
}