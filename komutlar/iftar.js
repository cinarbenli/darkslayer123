const Discord = require('discord.js');
   const superagent = require('superagent');

    exports.run = async(client, message, args) => {
    if(!args[0]) return message.channel.send(`<a:uyari:702107531602034718> Bir şehir girmelisin.`)
    let {body} = await superagent 
    .get(`https://namazapi.glitch.me/namaz?sehir=${args[0]}`);
    if(!{body}) return message.channel.send(`Bir Hata Oluştu! Lütfen Biraz Sonra Tekrar Dene!`)
    if(body.hata) return message.channel.send(`Lütfen Geçerli Bir Şehir Gir!`)
    const embed = new Discord.RichEmbed()
    .setColor('ff000')
    .addField(`**${args[0]} iftar vakti:**`, body.Akşam, true)
    .setFooter('Hayırlı Ramazanlar!')
    .setTimestamp()
    message.channel.send(embed)
    }
    exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["iftarvakti"], 
  permLevel: 0
};

exports.help = {
  name: 'iftarvakti',
  usage:'iftar'
};
