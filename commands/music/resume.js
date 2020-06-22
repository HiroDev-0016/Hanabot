const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
module.exports = class ResumeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'resume',
      aliases: ['resume-song', 'continue'],
      memberName: 'resume',
      group: 'music',
      description: 'Resume the current paused song',
      guildOnly: true
    });
  }

  run(message) {
    var voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.reply('Join a channel and try again');

    if (
      typeof message.guild.musicData.songDispatcher == 'undefined' ||
      message.guild.musicData.songDispatcher === null
    ) {
      return message.reply('There is no song playing right now!');
    }

const embedplay = new MessageEmbed()
   .setThumbnail(message.guild.musicData.nowPlaying.thumbnail)
   .setTitle(':play_pause: Resume ')
   .setDescription(`Resumed the song: **${message.guild.musicData.nowPlaying.title}**`)
    message.say(embedplay);

    message.guild.musicData.songDispatcher.resume();
  }
};
