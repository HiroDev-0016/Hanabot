const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'pause',
      aliases: ['pause-song', 'hold', 'stop'],
      memberName: 'pause',
      group: 'music',
      description: 'Pause the current playing song',
      guildOnly: true
    });
  }

  run(message) {
    var voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.reply('Join a channel and try again');

    if (
      typeof message.guild.musicData.songDispatcher == 'undefined' ||
      message.guild.musicData.songDispatcher == null
    ) {
      return message.say('There is no song playing right now!');
    }
if(message.guild.musicData.nowPlaying === null) {
  return message.reply("I'm not playing anything")
}
const embedpause = new MessageEmbed()
   .setThumbnail(message.guild.musicData.nowPlaying.thumbnail)
   .setTitle('<a:mutem:703987260139241572> Pause ')
   .setDescription(`Paused the music **${message.guild.musicData.nowPlaying.title}**`)
    message.say(embedpause);

    message.guild.musicData.songDispatcher.pause();
  }
};
