const Discord = require("discord.js");
const ffmpeg = require("ffmpeg");
const ytdl = require('ytdl-core');
exports.run = function (client, message, args) {
		let value = args.slice(0).join(' ');
    if(!value) {
	    message.reply("**15 Temmuz Marşını Dinlemek İçin `!!15-temmuz çal` Yazmalısın**")
    }		
    if (!message.member.voiceChannel) return message.reply("**15 Temmuz Marşını Dinlemek İçin Lütfen Sesli Kanala Gir**");
		    if (value === "çal") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=-MxzzyYxGEc', { filter: 'audioonly' })
            const dispatcher = connection.playStream(stream)
        }));
          const turk = new Discord.RichEmbed()
          .setTitle('Ne mutlu Türküm diyene!')
          .setImage('https://yunti.files.wordpress.com/2018/07/15temmuz_03_tam35-blogspot-com.gif')
          return message.channel.send(turk)
          return;
    };
	if (value === "bitir") {
      message.channel.send("3 saniye içinde kanaldan ayrılıyorum...").then(m => {
        setTimeout(()=>{
          m.edit("**Ayrıldım!**")
        }, 2800)
      })
      setTimeout(()=>{
        const voiceChannel = message.member.voiceChannel;
        voiceChannel.leave()
      }, 3000)
	}
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};
exports.help = {
    name: "15-temmuz",
    description: "15 Temmuz Marşı'nı çalar.",
    usage: "15-temmuz <çal/bitir>"
};