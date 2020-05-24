const Discord = require('discord.js');

exports.run = (client, message, args) => {
message.delete();

let question = args.join(' ');

let user = message.author.username

if (!question) return message.channel.sendEmbed(

new Discord.RichEmbed()

.addField(`:x: | Yazı yazman gerek.`)).then(m => m.delete(5000));

console.log("Oylama Komutu " + message.author.username + '#' + message.author.discriminator + " Tarafından Kullanıldı.")
message.channel.sendEmbed(

new Discord.RichEmbed()

.setColor("RED")
.setThumbnail(client.user.avatarURL)
.setTimestamp()
.setFooter('DarkSlayer Oylama Sistemi', client.user.avatarURL)

.addField(`**Oylama**`, `**${question}**`)).then(function(message) {

message.react('✅');

message.react('❌');

});

};
//Oyun Elitleri Botuna Aittir İzinsiz Paylaşılması Yasaktır!!!
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['oylama',"anket"],

permLevel: 2
};

exports.help = {
name: 'oylama',
description: 'Oylama yapmanızı sağlar.',
usage: 'oylama <oylamaismi>'
}
