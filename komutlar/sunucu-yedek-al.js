const fs = require('fs')
const Discord =  require ('discord.js')//ben embedi yapıyom sen yap burayı oky tm

exports.run = (client, message, args) => {

        if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send(':carpi: Yetersiz **yetki!**')


  var list = [];
message.guild.channels.forEach(kan => {
let parent;
if(kan.parent) parent = kan.parent.name
else parent = "Yok"
list.push({ 
"tip": `${kan.type}`,"isim": `${kan.name}`,"parentname": `${parent}`
})
})
fs.writeFile("././sunucuyedekle.json", JSON.stringify(list)) 
const embed = new Discord.RichEmbed() 
.setColor('GREEN') 
.setDescription ('Sunucu yedeği **alındı !**')
message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["yedek-al"],
    permLevel: 0
}

exports.help = {
    name: 'yedek-al',
    description: 'Yedek almanızı sağlar.',
    usage: "yedek-al"
}