const Discord = require('discord.js');

exports.run = (client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let darkrol = message.mentions.roles.first()  
  let darkuser = message.guild() 

  if (!darkuser) return message.channel.send(` Kimden rolü alacağımı etiketle.`).catch(console.error);
  if (!darkrol) return message.channel.send(` Rolu etiketlemelisin`);
  message.channel.send(`Başarıyla \`${darkuser.user.tag}\` kişisinden \`${darkrol.name}\` rolü alındı. :tick2:`);
darkuser.removeRole(darkrol);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rol-al'],
  permLevel: 3,
  kategori: "yetkili"
};

exports.help = {
  name: 'rolal',
  description: 'Belirttiğiniz kullanıcıya belirttiğiniz rolü alır.',
  usage: 'rolal <@kullanıcı> <@rol>'
};