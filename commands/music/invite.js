const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js')
module.exports = class SkipAllCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'invite',
      aliases: ['add'],
      memberName: 'invite',  
      group: 'misc',
      description: 'Clear **all** musics from the queue',
      guildOnly: true
    });
  }

  run(message) {

const embed = new MessageEmbed()
.setTitle('Invite')
.setDescription(`<a:hana_love:724449381306335283> If you want to add me in your server you can click and be redirected to the invite page:`)
.addField(`Discord Bot List`, `<a:hana_dbl:724459044001022022> [Click here to add me using DBL website](https://top.gg/bot/710137790897062059)`)
.addField(`Bots para discord`, `<:hana_bpd:724458241458962545> [Click here to add me using BPD website](https://botsparadiscord.com/bots/710137790897062059)`)
.setImage('https://cdn.discordapp.com/attachments/707254966334521364/721575472906895501/20200614_010253_0000.png')
.setFooter(`Command executed by ${message.author.username}`, message.member.user.displayAvatarURL)
.setColor('RANDOM')
message.channel.send(embed)
  }
};