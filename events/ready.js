const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const Moment = require('moment')
module.exports = client => {
console.log(`BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
 client.user.setActivity("DarkSlayer");
  var oyun = [ 
        "!!yardım ile yardım menüsüne bakabilirsiniz.",
        "!!sunucutanıt ile sunucunuzu tanıtabilirsiniz.", 
        "!!sunucu-kur ile hazır odaları kurabilir ", 
        "!!panel-kur ile sunucunuza panel kurabilirsiniz.", 
        "!!davet ile botumuzun davet linkine ve sunucumuzun davet liinkine bakabilirsiniz.", 
        "!!afk ile gelişmiş afk sistemini kullanabilirsiniz.", 
        "!!!!rol-kur ile hazır roller kurabilirsiniz.", 

   ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "");
        }, 2 * 2000);
}

