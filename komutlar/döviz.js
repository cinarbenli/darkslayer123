const { Canvas } = require("canvas-constructor");
const { get } = require("snekfetch");
const Discord = require("discord.js")
const client = new Discord.Client()
const TCMB_Doviz = require('tcmb-doviz');
const Doviz = new TCMB_Doviz();
const ayarlar = require("../ayarlar.json")

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
    if(!args[0]) {
        let embed = new Discord.RichEmbed();
        embed.setColor("BLUE");
        message.channel.send({embed: embed});
    }
  const dolar = await Doviz.getKur("USD")
  const euro = await Doviz.getKur("EUR")
  const sterlin = await Doviz.getKur("GBP")
  const yen = await Doviz.getKur("JPY")
  const tarih = await Doviz.guncelTarih()
    const guildName = message.guild.name;
   get(message.guild.iconURL).then(guildIcon => {

        const canvas = new Canvas(500, 350)
        .setColor("#2C4F33")
        .addRect(0, 0, 500, 350)
        .setColor("#fffffs")
        .setTextFont('25px Impact')
        .setTextAlign("center")
        .addText(`                                      Döviz Bilgileri`, 70, 30)
        .setTextFont('22px Impact')
        .addText(`                                                     ==>  Dolar Alış & Satış:  ${dolar.alis} & ${dolar.satis}`, 10, 125)
        //.addText(`---`,10, 10)
        .addText(`                                                      ==>  Euro  Alış & Satış:  ${euro.alis}  & ${euro.satis}`, 10, 150)        
        .addText(`                                                       ==>   Sterlin Alış & Satış: ${sterlin.alis} & ${sterlin.satis}`, 10, 175)
        .addText(`                                                           ==>  Japon Yeni Alış & Satış: ${yen.alis} & ${yen.satis}`, 10, 200)
        .addText(`                                                                   Güncellenme Tarihi: ${tarih}`, 10, 225)
        .save();
        
        message.channel.send({files: [{ attachment: canvas.toBuffer(), name: "döviz.png"}]});
    });
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "döviz",
  usage: "döviz"
};