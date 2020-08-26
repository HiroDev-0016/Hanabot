  const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db')
module.exports = class SkipAllCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'ban',
      memberName: 'ban',  
      group: 'music',
      description: 'Clear **all** musics from the queue',
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
const { prefix } = require('../../config.json')
 const args = message.content.slice(prefix.length).trim().split(/ +/g);
if (!message.member.hasPermission(['ADMINISTRATOR', 'BAN_MEMBERS'])) {
	console.log('This member cant');
return message.say('<a:erro:729089430685614092> **| You dont\'t have permission to ban, you need to permissions \`BAN_MEMBERS\` or `ADMINISTRATOR` to ban members**')
}
if (!message.guild.me.hasPermission(['ADMINISTRATOR', 'BAN_MEMBERS'])) {
	console.log('This member cant');
return message.say('<a:erro:729089430685614092> **| I need to permissions \`BAN_MEMBERS\` or `ADMINISTRATOR` to ban members**')
}
const user = message.mentions.users.first()
if(!user) return message.say('<a:erro:729089430685614092> **| You need to mention someone!**')

var membro = message.mentions.members.first() || message.guild.members.get(args[0]);
const banconf = await db.fetch(`banconf_${message.author.id}`)
let footertext = 'Use ht!banconfig (url) to set a image!'
let bancount = db.fetch(`bancount_${message.author.id}`)
if(bancount === null) bancount = 0
if(banconf === 1) footertext = `${message.author.username} already banned ${bancount} members!`

if(user.id === message.client.user.id) return message.say('<a:erro:729089430685614092> **| You can\'t ban me!**')
let reason1 = args.slice(2).join(" ")
 if(!reason1) reason1 = "No Reason Provided"
const embedconf = new MessageEmbed()
.setTitle(`[<:update_member:733366682562723840>] ${message.author.tag} | Action: Confirm`)
.setDescription(`
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
<:info:729075450315407507> | User: 
<a:seta:730182633346039848> **${user.tag} (${user.id})**

<:file:730182942051139595> | Reason:
<a:seta:730182633346039848> **${reason1}**`)
.setThumbnail(`${message.member.user.displayAvatarURL({dynamic: true})}`)
.setColor('RANDOM')
const logs = await db.fetch(`log_${message.guild.id}`)
const channellog = await db.fetch(`cid_${message.guild.id}`)

const banembed = new MessageEmbed()
.setTitle(`[<:update_member:733366682562723840>] ${message.author.tag} | Action: Ban`)
.setThumbnail(`${message.member.user.displayAvatarURL({dynamic: true})}`)
.setDescription(`
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
<:info:729075450315407507> | User: 
<a:seta:730182633346039848> **${user.tag} (${user.id})**

<:info:729075450315407507> | Responsible Moderator:
<a:seta:730182633346039848> **${message.author.tag} (${message.author.id})**

<:file:730182942051139595> | Reason:
<a:seta:730182633346039848> **${reason1}**`)
.setColor('RANDOM')
.setFooter(`${footertext}`, message.member.user.displayAvatarURL({dynamic: true}))
const checki = await db.fetch(`configban_${message.author.id}`)
const checki2 = await db.fetch(`urlban_${message.author.id}`)
if(checki === 1) banembed.setImage(`${checki2}`)
let channelid = await db.fetch(`cid_${message.guild.id}`)
message.channel.send(embedconf).then(msg => {
msg.react('✅')

let filtro = (reaction, usuario) => reaction.emoji.name === "✅" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro, {max: 1})

coletor.on("collect", cp => {
db.add(`bancount_${message.author.id}`, 1)
    msg.delete()
    membro.ban()
    .catch(err => {
console.log('Can\'t ban this member...')})
 if(logs === 1){

message.guild.channels.cache.get(channelid).send(banembed)
.catch(err => {
console.log('Can\'t find a channel...')})
}  
    message.channel.send(banembed).then(msg => {msg.delete({timeout: 30000})})
});
})

}
}