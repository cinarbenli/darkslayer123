const Discord = require("discord.js") 
exports.run = async function(client, message, args) {

const user = message.mentions.members.first()
if (!user) 
return message.channel.send(`> **Bir Kullanıcı Etiketlemelisin.**`).catch(console.error)

if (!user.voiceChannel || user.voiceChannel.id === null || user.voiceChannel.id === NaN || user.voiceChannel.id === undefined) 
return message.reply(`> **Etiketlediğin Kullanıcı Zaten Ses Kanalına Bağlı Değil.**`).catch(console.error)

user.setVoiceChannel(null).then(() => {
message.channel.send(`> **Başarıyla Etiketlediğin Kullanıcının Ses Bağlantısını Kestim.**`)
})
}//codepack
exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["bağlantı-kes","kes"],
permLevel: 0
}
exports.help = {
name: 'bağlantı-kes',
description: 'Kullanıcının Bağlantısını Keser!',
usage: 'bağlantı-kes <kullanıcı> '
}