module.exports = member => {
  let guild = member.guild;
  member.send('niye gittin hacı ya?');
  guild.defaultChannel.send(`${member.user.username} gitti.`);
};
