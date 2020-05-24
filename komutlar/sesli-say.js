const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  if(message.author.bot || message.channel.type === "dm") return;
  const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
   
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
      const emoji = client.emojis.find(emoji => emoji.name === "saniye");
  const arrifentembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor('Bilgi', `${message.author.displayAvatarURL}`)
        .addField(`￥ Ses kanallarında ${count} kişi bulunmaktadır.`, `￥ Sunucuda ${message.guild.memberCount} kişi bulunmaktadır.`)
        .setThumbnail("https://media.giphy.com/media/xUPGcqaVH1cDeKZTBS/giphy.gif")
        .setTimestamp()
        .setFooter(`Jack-BOT`)
 
  message.channel.sendEmbed(arrifentembed)
  message.react(emoji)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'kullanıcıyı susturur.',
  usage: 'say'
};