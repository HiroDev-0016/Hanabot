const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const client = new Discord.Client()
const { prefix } = require('../../config.json')
const db = require('quick.db')

module.exports = class SkipAllCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'mute',
      aliases: ['silenciar'],
      memberName: 'mute',  
      group: 'misc',
      description: 'Bane um membro',
      guildOnly: true
    });
  }
async run(message, client){
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
const main = db.fetch(`main_${message.client.user.id}`)
if(main === 1){
return message.say(`**<a:erro:729089430685614092> | Sorry for the incovenience, all my commands is in maintence!**`)}
const main2 = db.fetch(`mainmod_${message.client.user.id}`)
if(main2 === 1){
return message.say(`**<a:erro:729089430685614092> | Sorry for the incovenience, the module \`MODERATION\` is in maintence!**`)}
const del = await db.fetch(`del_${message.guild.id}`)
if(del === 1) {
message.delete()
.catch(err => {
console.log('Can\'t delete this command...')})}

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const user = message.mentions.users.first()
        var person = message.guild.member(
          message.mentions.users.first() || message.guild.members.cache.get(args[1])
        );
        if (!person) return message.reply("I can't find the user called " + args[1]);
        let role = message.guild.roles.cache.find(role => role.name === "Muted");
 if(!role) {message.guild.roles.create({
  data: {
    name: 'Muted',
    color: 'GREY',
  },
  reason: 'Created role for the use of tempmute command',
}) 
           }
if (!message.member.hasPermission(['MUTE_MEMBERS'])) {
	console.log('This member cant');
return message.say('<a:erro:729089430685614092> **| You dont\'t have permission to ban, you need to permissions \`MUTE_MEMBERS\` to mute members**')
}
if (!message.guild.me.hasPermission(['MANAGE_ROLES'])) {
	console.log('This member cant');
return message.say('<a:erro:729089430685614092> **| I need the permission \`MANAGE_ROLES\` to mute members**')
}




if(user.id === message.client.user.id) return message.say('<a:erro:729089430685614092> **| You can\'t mute me!**')
let footertext = 'Use ht!muteconfig (url) to set a image!'
const banconf = await db.fetch(`muteconf_${message.author.id}`)
let bancount = db.fetch(`mutecount_${message.author.id}`)
if(bancount === null) bancount = 1
if(banconf === 1) footertext = `${message.author.username} already muted ${bancount} members!`
          const muteembed2 = new MessageEmbed()
          .setTitle(`[<:muted:741309599403212830>] ${message.author.username} | Action: Mute`)
          .setDescription('<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>')
          .setThumbnail(`${message.member.user.displayAvatarURL({dynamic: true})}`)
          .addField(`📋 | Muted member:`, `<a:seta:730182633346039848> **${user.tag} - (${person.id})**`)
          .addField(`👥 | Responsible Moderator:`, `<a:seta:730182633346039848> **${message.author.tag} (ID:${message.author.id})**`)
          .addField(`📜 | Reason:`, `<a:seta:730182633346039848> **${args.slice(2).join(" ")}**`)
          .setColor('RANDOM')
          .setFooter(`${footertext}`, message.member.user.displayAvatarURL({dynamic: true}))
const checki = await db.fetch(`configmute_${message.author.id}`)
const checki2 = await db.fetch(`url_${message.author.id}`)
if(checki === 1) muteembed2.setImage(`${checki2}`)

                  
                       message.channel.send(muteembed2)
   db.add(`mutecount_${message.author.id}`, 1)                   
                        person.roles.add(role.id);
const logs = await db.fetch(`log_${message.guild.id}`)
let channelid = await db.fetch(`cid_${message.guild.id}`)
 if(logs === 1){

message.guild.channels.cache.get(channelid).send(muteembed2)
    .catch(err => {
console.log('Can\'t find this channel...')})
}                 
                  
                
                
                }
              }