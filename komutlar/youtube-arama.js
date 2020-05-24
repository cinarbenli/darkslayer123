exports.run = (bot, message, args, level) => {
const Discord = require("discord.js");
var search = require('youtube-search');
var youtubeThumbnail = require('youtube-thumbnail');
const query = args.join(' ');
var opts = {
  maxResults: 1,
  key: 'AIzaSyDNOt5evQAVb8RSQNNBlFB3d3eeu-GOH2M'
};

search(query, opts, function(err, results) {
    if(err) return console.log(err);

    var output = new Discord.RichEmbed();
var thumbnail = youtubeThumbnail(results[0].link).high.url
output.setThumbnail(thumbnail);
output.setThumbnail("https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1000/https://www.okajans.com/wp-content/uploads/2019/10/Youtube-logo-full-color.png")
output.setTitle('YouTube Araması');
output.addField('Video Başlığı', results[0].title);
output.addField('Link', results[0].link);
output.addField('Kanal', results[0].channelTitle);
output.addField('Video Açıklaması', results[0].description)
output.setColor('#E53935');
message.channel.send({embed: output});
});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: []
};

exports.help = {
    name: 'youtube',
    description: 'youtubeda arama yaparsýnýz.',
    usage: 'ytv <search>'
};