const Discord = require('discord.js');

exports.run = (client, message, args, member) => {
    let mesaj = args.slice(0).join(' ');
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":negative_squared_cross_mark: Duyuru Yapmak İçin Üst Rolde Olman Gerekli Kanka");
    if (mesaj.length < 1) return message.channel.send(':x: Duyuruya yazmak için bir şeyler yazınız.');
  let incidentchannel = message.guild.channels.find(name, "duyuru");
    if(!incidentchannel) return message.channel.send(":x: duyuru kanalını bulamıyorum.");

    incidentchannel.send("@everyone | **Duyuru**\n\n ${mesaj}");
  message.channel.send(':white_check_mark: Duyuru başarıyla yapıldı.')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuryap', 'duyur'],
  permLevel: 2
};

exports.help = {
  name: 'şekilli-duyuru',
  description: 'Duyuru',
  usage: 'duyuru <mesaj>'
};