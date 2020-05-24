const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let guild = message.guild;
  let reason = args.slice(1).join(" ");
  let user =
    message.mentions.users.first() || client.users.get(args.slice(0).join(" "));
  if (!user)
    return message.channel
      .send("Kimi atacağını **yazmalısın !**")
      .catch(console.error);
  if (!reason)
    return message.channel.send("Sunucudan atma sebebini **yazmalısın !**");
  if (!message.guild.member(user))
    return message.channel.send("Böyle bir kullanıcı sunucuda **yok!**");
  if (!message.guild.member(user).kickable)
    return message.channel.send("Yetkilileri **atamam !**");
  message.guild.member(user).kick();
  message.channel.send("İşlem **başarılı !**");
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["at"],
  permLevel: 2
};
exports.help = {
  name: "kick",
  kategori: "admin",
  description: "İstediğiniz kişiyi sunucudan atar.",
  usage: "kick [kullanıcı] [sebep]"
};
