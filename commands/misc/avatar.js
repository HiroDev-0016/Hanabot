const Discord = require("discord.js");
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db')
module.exports = class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'avatar',
      memberName: 'avatar',
      group: 'misc',
      description: 'Pause the current playing song',
      guildOnly: true,
     hidden: true
    });
  }

async run(message, client){
const { prefix } = require('../../config.json')
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const language = await db.fetch(`language_${message.guild.id}`)
let bl3 = await db.fetch(`blist_${message.author.id}`)
let blreasom = await db.fetch(`blreason_${message.author.id}`)
if(bl3 === '<:enabled:730821706347708437>')
if(language === 1) {
return message.say(`
<:blacklisted:729074968104534116> **| <@${message.author.id}> , Você está banido!**
:notepad_spiral: **| Motivo:** \`${blreasom}\``)
} else {
return message.say(`
<:blacklisted:729074968104534116> **| <@${message.author.id}> , You are banned!!**
:notepad_spiral: **| Reason:** \`${blreasom}\``)
}
let users = message.client.users.cache.find(user => user.username == `${args.slice(1).join(" ")}`);
const user = message.mentions.users.first()
if(!users){
const avm = new MessageEmbed()
  .setTitle(`** ${message.author.username}**'s avatar`)
.setColor("RANDOM") //can specifiy color of embed here
.setImage(`${message.member.user.displayAvatarURL({dynamic: true, size: 512})}`)
.addField(`Download`, `Click [here](${message.member.user.displayAvatarURL({dynamic: true})}) to download the image`)
.setFooter(`Command executed by: ${message.author.tag}` , message.member.user.displayAvatarURL({dynamic: true}))
return message.channel.send(avm)
}
if(!user){
if(users.id === 'undefined' || users.id === null) return message.say('I cannot find any user with this name...')
const avembed = new MessageEmbed()
  .setTitle(`** ${users.username}**'s avatar`)
.setColor("RANDOM") //can specifiy color of embed here
.setImage(`${users.displayAvatarURL({dynamic: true, size: 512})}`)
.addField(`Download`, `Click [here](${users.displayAvatarURL({dynamic: true})}) to download the image`)
.setFooter(`Command executed by: ${message.author.tag}` , users.displayAvatarURL({dynamic: true}))
return message.channel.send(avembed)
}
const embed = new  MessageEmbed()
.setTitle(`** ${user.username}**'s avatar`)
.setColor("RANDOM") //can specifiy color of embed here
.setImage(`${user.displayAvatarURL({dynamic: true, size: 512})}`)
.addField(`Download`, `Click [here](${user.displayAvatarURL({dynamic: true})}) to download the image`)

.setFooter(`GIF: If the final of the link got .webp, just change it to .gif` , user.displayAvatarURL({dynamic: true}))

message.channel.send(`<@${message.author.id}>`, embed)
}
}
