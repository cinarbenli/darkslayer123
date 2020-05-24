const db = require('quick.db')
const ayarlar = require('../ayarlar.json');
const googleTTS = require('google-tts-api');
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
 

  let yazi = args.join(" ")
  if (!message.member.voiceChannel) return message.channel.send(' Öncelikle Sesli Bir kanala Katıl');
  if (!yazi) return message.channel.send('Sesli olarak söylenmesini istediğin mesajı belirtmelisin. \`!!konuş Merhaba\`')
  
  googleTTS(`${yazi}`, 'tr', 1).then(url => {
    message.member.voiceChannel.join().then(connection => {
      message.channel.send(`\`${yazi}\` **Mesajı Sesli Olarak Söyleniyor**`)
      connection.playStream(url).on("end",() => {
      })
    })
  })
  
};


    

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['konuş'],
  permLevel: 0
};

exports.help = {
  name: 'seslimesaj',
  usage: "konuş"
};