const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {



    let google = args.slice(0).join('+');

        let link = `https://www.google.com/search?q=` + google;
        if(!google)return message.reply(`Googleda Aratmak İstediğini Yazarmısın`)
        if(!link)return message.reply("Error Hata 404")
        let embed = new Discord.RichEmbed()
    
    .setColor("RED")
    .setTimestamp()
    .addField('Aradığın:', `${args.slice(0).join(' ')}`)
    .addField("Yazılan:", `${args.slice(0).join(' ')}`)
    .addField('Link:', `${link}`)
    .setFooter("Google", message.author.avatarURL);
          
    message.channel.send(embed);
    message.author.send(`Bulunan ${link} | ${ message.guild.name}`);
  
}



exports.conf =
{
  aliases: ["google"]
}

exports.help =
{
  name: "internet",
  description: "Google Search.",
  usage: "internet"
}