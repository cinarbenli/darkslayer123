const Discord = require("discord.js");
const ffmpeg = require("ffmpeg");
const ytdl = require('ytdl-core');
exports.run = function (client, message, args) {
		let value = args.slice(0).join(' ');
    if(!value) {
	    message.reply("**İstiklal Marşını Dinlemek İçin `!!istiklalmarşı çal` Yazmalısın**")
    }		 //15 temmuz değil ! ( MİLLİ MAARŞIMIZI DİNLİYEN ASIL NE MUTLU TÜRKİYEM DİYEN KİŞİDİR )? 
    if (!message.member.voiceChannel) return message.reply("**İstiklal Marşını Dinlemek İçin Lütfen Sesli Kanala Gir**");
		    if (value === "çal") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=Y75Km7dlt94', { filter: 'audioonly' })
            const dispatcher = connection.playStream(stream)
        }));
          const turk = new Discord.RichEmbed()
          .setTitle('Ne mutlu Türküm diyene!')
          .setImage('https://cdn.glitch.com/a0edfb5a-8170-4f31-9a22-d8e215a7fa03%2F1495639834_tumblr_oohvro8afj1vedtgco1_400.gif?v=1583058359108')
          return message.channel.send(turk)
          return;
    }; // BÖYLESİ DAHA İYİ BENCE
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
    aliases: ['istiklal maarşı', 'istiklalmaarşı', 'istiklalmaarsı', 'istiklalmaarsi','ISTIKALAL-MARRŞI'],
    permLevel: 0
};
exports.help = {
    name: "istiklalmarşı",
    description: "İstiklal Marşı'nı çalar.",
    usage: "istiklalmarşı <çal/bitir>"
};