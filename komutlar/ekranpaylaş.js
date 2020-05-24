const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.voiceChannel) return message.channel.send(new Discord.RichEmbed().setDescription("Bir sesli kanalda değilsiniz!").setColor('RANDOM'));
  else message.channel.send(new Discord.RichEmbed().setDescription(`**[Ekran Paylaşımını İzlemek İçin Tıkla!](https://discordapp.com/channels/${message.guild.id}/${message.member.voiceChannel.id})**`).setColor('RANDOM'));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: 'ekran-paylaş',
  description: 'Sesli kanalda ekran paylaşmanızı sağlar.',
  çalma: 'ekran-paylaş',
};