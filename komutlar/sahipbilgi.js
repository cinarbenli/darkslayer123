const Discord = require('discord.js')
exports.run = (client, message) =>
{
let codeming = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("DarkSlayer Sahip Bilgi Menüsü")
.setFooter(`${message.author.nickname}`, `${message.author.avatarURL}`)
.setDescription(`${message.author.nickname} **için yazıldı.**` )
.addField(' Instagram ' , ' Insatgramınızı yazın. ')
.addField(' Twitter ' , ' Twitterinizi yazın. ')
.addField(' Facebook ' , ' Facebookunuzu yazın ')
.addField(' Discord ' , ' Discordunuzu yazın ')
.addField(' Destek Sunucusu ' , 'Destek Sunucusu linkini yazın')
.setThumbnail(`${message.author.avatarURL}`)
message.channel.send(codeming).then(yasin => yasin.delete('30000'))
}
                                    
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permlevel: 0
}

exports.help = {
name : "sahipbilgi",
despricton : "açıklama",
usage : "sahipbilgi"
}