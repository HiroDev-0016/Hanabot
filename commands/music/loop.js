const { Command } = require('discord.js-commando');
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
//MADE BY CTK
module.exports = class LoopCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'loop',
      group: 'music',
      memberName: 'loop',
      guildOnly: true,
      description: 'Loop the current playing song'
    });
  }

  run(message) {
const embed = new MessageEmbed()
       .setTitle(`Sucessfully Looped song`)
       .addField(`Name:`, `${message.guild.musicData.nowPlaying.title}`)
       .addField(`Duration:`, `${message.guild.musicData.nowPlaying.duration}`)
       .setThumbnail(message.guild.musicData.nowPlaying.thumbnail)
       .setImage('https://thumbs.gfycat.com/HelplessGratefulBirdofparadise-size_restricted.gif')
    if (!message.guild.musicData.isPlaying) {
      return message.say('There is no song playing right now!');
    } else if (
      message.guild.musicData.isPlaying &&
      message.guild.triviaData.isTriviaRunning
    ) {
      return message.say('You cannot loop over a trivia!');
    }
 message.channel.send(`Looping.`)
                .then(msg => {
                       setTimeout(function() {
                    msg.edit(`<a:windows_loading:715751950318305282> Looping..`)
                    }, 3000);
                       setTimeout(function() {
                    msg.edit(`<a:windows_loading:715751950318305282> Looping...`)
                    }, 3540);                       
                       setTimeout(function() {
                    msg.edit(`<@${message.member.id}>`, embed)                    
                    }, 4000);

      
    })
    


    
    message.guild.musicData.queue.unshift(message.guild.musicData.nowPlaying);
    return;
  }
};