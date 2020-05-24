const Discord = require("discord.js")
const {RichEmbed} = require('discord.js');
const client = new Discord.Client()

const moment = require('moment');

exports.run = async (client, msg, args) => {
            const embed = new RichEmbed()
            .setColor("RANDOM")
            .setAuthor(msg.guild.name, msg.guild.iconURL)
            .setTitle(`Roller [${msg.guild.roles.size}]`)
            .setDescription(`<@&${msg.guild.roles.map(role => `${role.id}`).join('>, <@&')}>`)
            return msg.channel.send(embed)
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'roller',
  description: '',
  usage: 'roller'
};