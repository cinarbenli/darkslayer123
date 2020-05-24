const Discord = require('discord.js');   
 //Dcs Ekibi
var hd = [
    ":arrow_right: Kartal",
    ":arrow_right: Sincap",
    ":arrow_right: Yılan",
    ":arrow_right: Boğa",
    ":arrow_right: Tilki",
    ":arrow_right: At",
    ":arrow_right: Sinek",
    ":arrow_right: Deve Kuşu",
    ":arrow_right: Kelebek",
    ":arrow_right: Tilki",
    ":arrow_right: Karınca",
    ":arrow_right: Arı",

];

module.exports.run = async (bot, message, args) => {

  message.channel.send(message.author.toString() + " Hangi hayvansın: " + (hd[Math.floor(Math.random() * hd.length)]));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hayvan"],
  permLevel: 0 //Dcs Ekibi
};

exports.help = {
  name: 'hangi-hayvansın',
  description: 'Sana hangi hayvan oldugunu söylerim :))',
  usage: 'hangi-hayvansın'
};
   