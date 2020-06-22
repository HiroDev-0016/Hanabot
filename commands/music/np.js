const { Command } = require('discord.js-commando');
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
const queue = new Map(); 
const client = new Discord.Client();
//MADE BY CTK
module.exports = class LoopCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'np',
      group: 'music',
      memberName: 'np',
      guildOnly: true,
      description: 'Shows the music who is playing'
    });
  }

  run(message) {
    if (
      typeof message.guild.musicData.songDispatcher == 'undefined' ||
      message.guild.musicData.songDispatcher == null
    ) {
      return message.say('There is no song playing right now!');
    }
if(
typeof message.guild.musicData.nowPlaying.duration === 'undefined' || message.guild.musicData.nowPlaying.duration === null )
{
 return message.say('No song are playing!')
}

const serverQueue = queue.get(message.guild.id);
 var embed = new MessageEmbed()
 .setThumbnail(message.guild.musicData.nowPlaying.thumbnail)
 .setColor('RANDOM')
 .setTitle("**<a:disco:700554191625650190> NOW PLAYING**")
 .addField(`Current Playing:`, `${message.guild.musicData.nowPlaying.title}`)
 .addField(`Duration`, `${message.guild.musicData.nowPlaying.duration}`)  
.addField(`Connected in:`, `${message.guild.me.voice.channel.name}`)
 
 message.channel.send(embed)
}
}