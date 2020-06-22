const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js')
module.exports = class SkipAllCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'vote',
      aliases: ['dbl', 'bpd'],
      memberName: 'vote',  
      group: 'music',
      description: 'Clear **all** musics from the queue',
      guildOnly: true
    });
  }

  run(message) {

const embed = new MessageEmbed()
.setTitle('Vote')
.setDescription(`<a:hana_love:724449381306335283> If you like my commands and you want to help me you can simple vote!

<:hana_arrow:723930278783090709> Bot list sites:`)
.addField(`Discord Bot List`, `<a:hana_dbl:724459044001022022> [Click here to vote in DBL](https://top.gg/bot/710137790897062059/vote)`)
.addField(`Bots para discord`, `<:hana_bpd:724458241458962545> [Click here to vote in BPD](https://botsparadiscord.com/bots/710137790897062059/votar)`)
.setImage('https://cdn.discordapp.com/attachments/707254966334521364/722279340427051018/20200615_233958_0000.png')
.setFooter(`Command executed by ${message.author.username}`, message.member.user.displayAvatarURL)
.setColor('RANDOM')
message.channel.send(embed)
  }
};
