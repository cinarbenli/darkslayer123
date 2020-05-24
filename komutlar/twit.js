const Discord = require("discord.js");

exports.run = (client, message, args) => { //Dcs Ekibi
  let yazı = args.slice(0).join(" ");
  if (yazı.length < 1)
    return message.reply("❓ Trump'a Ne Yazdırmak İstiyorsun?");
  var request = require("request");
  request(`https://pinkie-api.glitch.me/api/trump/${yazı}`, function(
    error,
    response,
    body
  ) {
    if (error) return console.log("⚠ HATA ⚠", error);
    else if (!error) {
      var veri = JSON.parse(body);
      const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(veri.message)
        .setFooter(`DarkSlayer`, message.author.avatarURL)
        .setTimestamp();
      return message.channel.sendEmbed(embed);
    }
  });
}; //Dcs Ekibi

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["twit-at"]
};

exports.help = {
  name: "twit",
  description: "Trumpa istediğniz Şeyi Yazdırdırır",
  usage: "twit"
};
   