const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'status',
      aliases: ['stats', 'st'],
      memberName: 'status',
      group: 'misc',
      description: 'Shows bot status',
      guildOnly: true
    });
  }

run(message) {
const { CommandoClient } = require('discord.js-commando');
const client = new CommandoClient({
  owner: '700805591094001692' // change this to your Discord user ID
})

const guild = client.guilds.cache.get(message.guild.id);
const bot = new Discord.Client();   
const embedpause = new Discord.MessageEmbed()
   .setThumbnail(`${message.guild.iconURL()}`)
   .setTitle('Bot status')
   .setDescription(`General Info`)
   .addField(`Bot info`,
`**My name**: Hana
**My ID**: 710137790897062059
**Guilds**: ${message.client.guilds.cache.size}
**Channels (Global)**: ${message.client.channels.cache.size}
**Users using Hana**: ${message.client.users.cache.size} 
**Created in**: 05/13/2020
**My Owner (ID)**: 700805591094001692 or Hiro 🍀#0016`, true)
   .addField(`Server info`, `Sever name: ${message.guild.name}
ID: ${message.guild.id}
Server region: ${message.guild.region}
Server channels: ${message.guild.channels.cache.size}
Server owner: ${message.guild.owner}
Members: ${message.guild.members.cache.size}`, true);
if (message.guild.me.voice.channel != null) {
embedpause.addField(`Connected in:`, `${message.guild.me.voice.channel.name}`)

}
message.say(embedpause)

}
}