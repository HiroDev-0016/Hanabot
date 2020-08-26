const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
var emblemaserver = '❎'
var marry = "Alone :("
var emblemapartner = '<:hana_partner:721021327061942272>'
var emblemadev = '<:hana_staff:721018953266364547>'
var apelido = 'Not Set'
const emblemaowner = '<:hana_developer:721019012091346945>';
const Discord = require('discord.js')
const client = new Discord.Client()
const bughunter = '<:bughunter:721019880760934400>'
const verified = '<:hana_verifieduser:721019468515377246>'
const db = require('quick.db')
module.exports = class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'setback',
      aliases: ['sb'],
      memberName: 'setground',
      group: 'misc',
      description: 'Pause the current playing song',
      guildOnly: true,
     hidden: true
    });
  }
async run(message, client){
const language = await db.fetch(`language_${message.guild.id}`)
const { prefix } = require('../../config.json')
const args = message.content.slice(prefix.length).trim().split(/ +/g);
if(language === 1){
const vip = await db.fetch(`vip_${message.author.id}`)
if(vip != 'Active') return message.say('<:vip:729076045843529828> **|** Esse comando é apenas para membros **Hana Premium**!')
if(!args[1]) return message.say('<:vip:729076045843529828> **|** Coloque um URL!')
const { Canvas } = require("canvas-constructor")
const canvas = require('canvas');

if(args[1].includes('.gif')||args[1].includes('.jpg') || args[1].includes('.png') || args[1].includes('.jpeg') || args[0].includes('.jpg') || args[0].includes('.png') || args[0].includes('.jpeg')) {
message.delete()
.catch(err => {
console.log('Can\'t delete this command...' + err)})
db.set(`background_${message.author.id}`, args.slice(1).join(" "))
db.set(`backid_${message.author.id}`, 1)
const back = await db.fetch(`background_${message.author.id}`)
const img = await canvas.loadImage(`${back}`)
const mage = new Canvas(1280, 720)
.addImage(img, 0, 0, 1280, 720)
.toBuffer()
return message.channel.send(`<a:notify:737371231606800464> ** | <@${message.author.id}>
:notepad_spiral: | Background inserido com sucesso!** `,{files: [mage]})
} else {
return message.say('Um URL inválido foi colocado, lembre de que o url deve ter o final .png, .jpg ou .jpeg')
}


}
 const vip = await db.fetch(`vip_${message.author.id}`)
if(vip != 'Active') return message.say('<:vip:729076045843529828> **|** This command is only for **Hana Premium** members!') 
if(!args[1]) return message.say('<:vip:729076045843529828> **|** Provide an URL!')
const { Canvas } = require("canvas-constructor")
const canvas = require('canvas');
if(args[1].includes('.jpg') || args[1].includes('.png') || args[1].includes('.jpeg')) {
db.set(`background_${message.author.id}`, args.slice(0).join(" "))
db.set(`backid_${message.author.id}`, 1)
const back = await db.fetch(`background_${message.author.id}`)
const img = await canvas.loadImage(`${back}`)
const mage = new Canvas(1280, 720)
.addImage(img, 0, 0, 1280, 720)
.toBuffer()

return message.channel.send(`<a:notify:737371231606800464> ** | <@${message.author.id}>
:notepad_spiral: | New background imagem sucessfully set!** `,{files: [mage]})
} else {
message.say('An Invalid URL has been provided, please remember that the URL needs to be with the final .png, .jpg ou .jpeg')
  }

}
  }