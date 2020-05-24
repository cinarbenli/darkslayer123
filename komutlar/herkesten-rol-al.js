const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  var bot = "702477655370629261";
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.channel.send(
      "❌ **Bu Komutu Kullanabilmek İçin `Rolleri Yönet` Yetkisine Sahip Olmalısın!**"
    );
  let rol =
    message.mentions.roles.first() ||
    message.guild.roles.get(args[0]) ||
    message.guild.roles.find(rol => rol.name === args[0]);
  if (!rol)
    return message.channel.send(
      "❌ **Herkeseten Rol Alabilmen İçin Bir Rol Etiketlemelisin!**"
    );

  const embed = new Discord.RichEmbed()
    .setDescription(`✅ **Herkesten ${rol} Adlı Rol Alındı!**`)
    .setColor(rol.hexColor);

  message.guild.members.forEach(u => {
    u.removeRole(rol);
  });
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["toplurolal", "herkestenrolal"],
  permLevel: 3
};

exports.help = {
  name: "herkesten-rol-al",
  description: "Belirlenen Rolü Herkese Verir!",
  usage: "herkesten-rol-al"
};
   