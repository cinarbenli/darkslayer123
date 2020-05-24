const Discord = require('discord.js');

exports.run = function(client, message, args) {

    var öneri = args.slice(0).join(' ');
    var guildID = "702849793097072711";
    var channelID = "702888206651097129";
    
    if (!öneri){
        return message.reply("Bir Mesaj Belirtin!");
    } else {
        
        var embed = new Discord.RichEmbed()
            .setTimestamp()
            .addField("Eylem:", "Öneri")
            .addField("Kullanıcı:", message.author.tag)
            .addField("ID", message.author.id)
            .addField("Öneri", öneri)
        
        client.guilds.get(guildID).channels.get(channelID).send(embed);
        message.channel.send("Öneriniz Alınmıştır! Teşekkür Ederiz!");
    };

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öner"], 
  permLevel: 0 
};

exports.help = {
  name: 'öneri', 
  description: "bot hakkındaki önerilerinizi bot sahiplerine ulaştırır", 
  usage: 'öneri <mesaj>' 
};