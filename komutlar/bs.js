const Discord = require("discord.js");
const Brawl = require("brawlstars");
exports.run = async (client, message, args) => {
  var request = require("request");
  var tag = args[0];
  if (!tag) {
    message.channel.send("Lütfen kullanıcı tagını giriniz.");
  } else {
      var options = {
      method: "GET",
      url: `https://api.starlist.pro/v1/player?tag=${tag}`,
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNjb3JkX3VzZXJfaWQiOiIzMzk0Mzk3MjAyODkyNzE4MDgiLCJyZWFzb24iOiJ0b2tlbi4iLCJ2ZXJzaW9uIjoxLCJpYXQiOjE1Nzg5MzkyMjN9.Mmm7zSeL6OPL_n84PTFVgTI3QDl6lkaJ-bM4YK8uv-M"
      }
    };
    request(options, function(error, response, body) {
      if (error) throw new Error(error);
      body = JSON.parse(body);
      console.log(body);
      if (body.code) {
        if (body.message) {
          message.channel.send("Yanlış tag!\nBir Brawl Stars tagı içerisinde sadece `0`, `2`, `8`, `9`, `P`, `Y`, `L`, `Q`, `G`, `R`, `J`, `C`, `U`, `V` içerebilir!");
        } else {
          message.channel.send("Aman, bir şeyler ters gitti." + body.code);
        }
      } else {
        const embed = new Discord.RichEmbed()
          .setTitle(`${body.name}`)
          .setDescription(`${body.name} adlı kullanıcının Brawl Stars profili.`)
          .addField(`Trophy sayısı`, `${body.trophies}`)
          .addField(`Seviye`, `${body.expLevel}`)
          .addField(`Zafer sayısı`, `${body.victories}`)
          .addField(`Bir klanda mı?`, `${body.hasClub ? "Evet" : "Hayır"}`)
          .addField(`Kaç brawlerı var?`, `${body.brawlers.length}`)
          .setColor("RANDOM")
          .setFooter("DarkSlayer")
        message.channel.send(embed);
      }
    });
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [
    "brawlstars-profil",
    "brawl-stars-profil",
    "brawlprofil",
    "bs-profil",
    "brawlstars",
    "bs"
  ],
  permLevel: 0
};
exports.help = {
  name: "brawl",
  description: "BrawlStars İstatistik",
  usage: "brawl"
};