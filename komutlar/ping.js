const Discord =require ('discord.js')
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "Bot Pingi",
              icon_url: "https://www.itpedia.nl/wp-content/uploads/2018/07/wifi.png"
            },
                "thumbnail": {
                 "url": "https://cdn.discordapp.com/avatars/386421264409165829/08d0f8fb174dda6c6c01ce7d55bf0e76.png?size=2048"
            },
            title: "",
            description:`:ping_pong: Pingim **${Math.round(client.ping)}** ms <a:ping:702107537775919154>\n`,
            fields: [
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "",
              text: "© 𝕯𝖘 | Hakan"
            }
          }
        });  
        message.react("🛰️")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p', 'pong', 'uptime',],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun Pingini Gösterir!',
  usage: 'ping'
};