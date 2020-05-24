//Creative Devopler's
const Discord = require("discord.js"); // BU KOMUT Dr.MaS TARAFINDAN EDİTLENMİŞTİR.
module.exports.run = async (bot, message, args) => {
  
    let replies = ["https://i.postimg.cc/Ls4HRwK3/12312.jpg","https://i.postimg.cc/1tfsVFzg/12321.jpg","https://i.postimg.cc/KjTbJyBx/213211.jpg","https://i.postimg.cc/bJW8xvGm/89123.jpg","https://i.postimg.cc/sDpyWs3J/cnquwq.jpg","https://i.postimg.cc/g2mpqQJb/cnuwq.jpg","https://i.postimg.cc/6pcXHc22/feokwo.jpg","https://i.postimg.cc/gcLGY35Q/qc2.jpg","https://i.postimg.cc/TY8fhpvw/quwh.jpg","https://i.postimg.cc/s22RbW7n/qwec.jpg","https://i.postimg.cc/43FTG31X/qwewq.jpg","https://i.postimg.cc/Ss2bxpZC/qwewqcx.jpg","https://i.postimg.cc/LXcKq077/qwewqeq.jpg","https://i.postimg.cc/Y0QcQzBS/sadaw.jpg","https://i.postimg.cc/05SqgPKq/ss.jpg","https://i.postimg.cc/Dz0txT3H/tugkan-gonultas-elraenn-kimdir.jpg","https://i.postimg.cc/FRJwQVRx/vew.jpg","https://i.postimg.cc/SxDBLK3c/wq.jpg","https://i.postimg.cc/FHrtJSW9/wqeq.jpg","https://i.postimg.cc/MKb2T5YP/wqeqc.jpg","https://i.postimg.cc/1zdbTj9t/wqewq.jpg","https://i.postimg.cc/2yRMjLLN/wqewqec.jpg"];
    let result = Math.floor((Math.random() * replies.length));
    let gifembed = new Discord.RichEmbed()
        .setTitle("Fotoğrafın!")
        .setColor("RED")
        .setFooter(`Elraenn Fotoğraf!`, message.author.avatarURL)
        .setFooter(`DarkSlayer | Tarafından Yapılmıştır.`, message.author.avatarURL)
        .setImage(replies[result]);
  
    message.channel.send(gifembed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['elraenn','elraen', 'elraeen'],
  permLevel: 0
};
//THECLAWNZ
exports.help = {
  name: 'elraen ',
  description: 'Rastgele Elraenn fotoğrafları atar.',
  usage: 'elraenn'
};
