const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
  message.delete(3000)
  try {
    
    const embed = new Discord.RichEmbed()
    .setTitle(`DarkSlayer - Komut Sayısı`)
    .setDescription('**\nToplam**  **' + client.commands.size + '** **Komut Vardır!**')
    .setColor("#ff0000")
    .setThumbnail('https://media.giphy.com/media/E6jscXfv3AkWQ/giphy.gif')
    .setTimestamp()
    .setFooter(message.author.username , message.author.avatarURL)

    return message.channel.send({embed});
    
    message.channel.send();
  } catch (err) {
    message.channel.send('Daha Sonra Tekrar Deneyin!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ["komutsay"],
  kategori: 'genel',
  guildOnly: true,
  permLevel: 0
 
};

exports.help = {
  name: 'komut-say',
  description: 'Bottaki Komut Sayısını Gösterir.',
  usage: 'komut-say'
};