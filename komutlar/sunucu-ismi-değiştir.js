const Discord = require('discord.js')

exports.run = (client, message, args) => {

message.guild.setName(args.join(" ")).then(() => message.channel.send(`Sunucunun İsmi \`${args.join(" ")}\` Yapıldı`)).catch(_ => message.channel.send(`Yeterli Yetkim YOK!`))
}

exports.conf = { 
enabled: true, guildOnly: true, 
permlevel: 4, 
aliases: ["guild-name-change"]
}

exports.help = {
name: "sunucu-ismi-değiştir", 
description: "sunucu ismi değiştirir", 
usage: "sunucuisimdeğiştir <yeni isim>"
}