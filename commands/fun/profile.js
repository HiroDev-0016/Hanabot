const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const discord = require("discord.js")
const client = new discord.Client()
  const { Canvas } = require("canvas-constructor")
  const canvas = require('canvas');
const db = require('quick.db')
const fetch = require("node-fetch")
module.exports = class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'profile',
      aliases: ['perfil'],
      memberName: 'profile',
      group: 'misc',
      description: 'Pause the current playing song',
      guildOnly: true,
     hidden: true
    });
  }

async run(message) {
let checkingfs = '540, 420, 25, 25'
let checkingm = '540, 449, 25, 25'
let creditslog =  '540, 390, 25, 25'
let hype = ''
const language = await db.fetch(`language_${message.guild.id}`)
let bl34 = await db.fetch(`blist_${message.author.id}`)
let blreasom = await db.fetch(`blreason_${message.author.id}`)
let layout = await canvas.loadImage('https://cdn.glitch.com/2a652bc7-ce3d-43dd-b2a9-13c8f64cdb0e%2Flayout1.png?v=1595432834959')
let background = await canvas.loadImage('https://olliehoff.co.uk/wp-content/uploads/2015/12/Fallout_Desktop_2560x1440.png')
let dev = ''
const creditslogo = await canvas.loadImage('https://images.tcdn.com.br/img/editor/up/469103/cifrao.png')
let marryimg = await canvas.loadImage('https://i.imgur.com/QmENm54.png')
const fslogo = await canvas.loadImage('https://i.imgur.com/r9aZs1X.png')
const avatar = await canvas.loadImage(message.member.user.displayAvatarURL({ format: 'jpg' }));  
let backid = await db.fetch(`backid_${message.author.id}`)
if(bl34 === '<:enabled:730821706347708437>')
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
const main2 = db.fetch(`mainfun_${message.client.user.id}`)
if(main2 === 1){
return message.say(`**<a:erro:729089430685614092> | Sorry for the incovenience, the module \`FUN\` is in maintence!**`)}

const { prefix } = require('../../config.json')
db.add(`cu_${message.author.id}`, 1)
 const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
const user = message.mentions.users.first()
let rep3 = await db.fetch(`rep_${message.author.id}`)
let credits3 = await db.fetch(`credits_${message.author.id}`)
let vip3 = await db.fetch(`vip_${message.author.id}`)
let married3 = await db.fetch(`marry4_${message.author.id}`)
let hanaabout3 = await db.fetch(`about_${message.author.id}`)
let hanastaff3 = await db.fetch(`hanastaff5_${message.author.id}`)
let hanavipicon3 = await db.fetch(`hanavip5_${message.author.id}`) 
let hanadev3 = await  db.fetch(`hanadev5_${message.author.id}`)
let hanabh3 = await db.fetch(`hanabh5_${message.author.id}`)
let hanamarry3 = await db.fetch(`hanamarry5_${message.author.id}`)
let hp3 = await  db.fetch(`hanap5_${message.author.id}`)
let cu3 = await db.fetch(`cu_${message.author.id}`)
if(hp3 === null) hp3 = ''
if(hanamarry3 === null) hanamarry3 = ''
if(hanadev3 === null) hanadev3 = ''
if(hanavipicon3 === null) hanavipicon3 = ''
if(hanastaff3 === null) hanastaff3 = ''
if(hanabh3 === null) hanabh3 = ''
if(vip3 === null) vip3 = 'Not Active'
if(married3 === null) married3 = 'Ninguém'
if(credits3 === null) credits3 = 0
if(rep3 === null) rep3 = 0
if(hanaabout3 === null) hanaabout3 = 'I\'m using Hana! You can change this using ht!aboutme'
if(hanadev3 === 1){
dev = await canvas.loadImage('https://cdn.glitch.com/2a652bc7-ce3d-43dd-b2a9-13c8f64cdb0e%2Fdev.png?v=1595283155434')
}
let marry32 = ''
if(hanamarry3 === ':ring:'){
marry32 = await canvas.loadImage('https://cdn.discordapp.com/attachments/671466567904526336/735492131841638470/emoji.png')
}
let staff = ''
if(hanastaff3 === 1){
staff = await canvas.loadImage('https://cdn.discordapp.com/attachments/734577186182267070/735561995863982080/purple_staff.png')
}
if(language === 1){
if(!args[0]) {
if(message.author.id === message.member.user.bot) db.set(`bot_${message.author.id}`, '<:bot:538163542260580352>')


let bot = await db.fetch(`bot_${message.author.id}`)
if(bot === null) bot = ''
if(message.author.id === message.guild.owner.id) db.set(`gowner_${message.author.id}`, ':crown:')
if(message.author.id != message.guild.owner.id) db.set(`gowner_${message.author.id}`, '')
let gowner3 = await db.fetch(`gowner_${message.author.id}`)
if(message.member.user.presence.status === "offline") db.set(`status_${message.author.id}`, '<:offline:727684258663235596>')
if(message.member.user.presence.status === "idle") db.set(`status_${message.author.id}`, '<:idle:727686689602142279>')
let stats3 = await db.fetch(`status_${message.author.id}`)
if(stats3 === null) stats3 =  '<:offline:727684258663235596>'
let bl = await db.fetch(`blist_${message.author.id}`)
if(bl === null) bl = '<:disabled:729074769621811200>'
let gemblems = db.fetch(`gemblem_${message.author.id}`)
let gemblem = db.fetch(`gemblem_${message.guild.id}`)
if(gemblems === null) gemblems = ''
let gguild42 = await db.fetch(`gguild_${message.author.id}`)
if(gguild42 === null) gguild42 = ''
if(married3.length > 7) married3 = married3.substring(0, 7) + "..."
if(hanaabout3.length > 7) hanaabout3 = hanaabout3.substring(0, 53) + `\n${hanaabout3.substring(53, 80)}`
let vip313 = ''
if(vip3 === 'Active'){
vip313 = await canvas.loadImage('https://i.imgur.com/Lx3ZbJV.png')}
if(db.fetch(`back1_${message.author.id}`) === 1){
background = await canvas.loadImage('https://i.pinimg.com/originals/7a/7d/cf/7a7dcfa6474ec4cbfa81113eebe3c0dc.jpg')}
if(db.fetch(`nyancat_${message.author.id}`) === 1){
background = await canvas.loadImage('https://cdn.suwalls.com/wallpapers/meme/nyan-cat-9089-2560x1600.jpg')}
if(db.fetch(`back3_${message.author.id}`) === 1){
background = await canvas.loadImage('https://previews.123rf.com/images/belchonock/belchonock1706/belchonock170600259/79516749-cat-background.jpg')
}
if(db.fetch(`back4_${message.author.id}`) === 1){
background = await canvas.loadImage('https://3.bp.blogspot.com/-0AqXPk4sSr4/Ubc2OS7TWtI/AAAAAAAAA_w/SY9POQQXt28/s1600/Sky+Anime+Landscape+16.jpg')
}
if(db.fetch(`back5_${message.author.id}`) === 1){
background = await canvas.loadImage('https://cdnb.artstation.com/p/assets/images/images/019/170/273/large/ford-nguyen-city-street.jpg')
}
if(message.author.flags.toArray().includes('HOUSE_BRAVERY')) hype = await canvas.loadImage('https://cdn.discordapp.com/attachments/729065429326364752/746957852232384582/hypesquad_bravery.png')
if(message.author.flags.toArray().includes('HOUSE_BRILLIANCE')) hype = await canvas.loadImage('https://cdn.discordapp.com/attachments/729065429326364752/746957911112024126/hypesquad_brilliance.png')
if(message.author.flags.toArray().includes('HOUSE_BALANCE')) hype = await canvas.loadImage('https://cdn.discordapp.com/attachments/729065429326364752/746957881227608235/hypesquad_balance.png')

if(db.fetch(`lay1_${message.author.id}`) === 1) {
if(married3.length > 11) married3 = married3.substring(0, 11) + "..."
layout = await canvas.loadImage('https://i.imgur.com/0HbYwRX.png')
  if(backid === 1){
const back = await db.fetch(`background_${message.author.id}`)
const img = await canvas.loadImage(`${back}`)
if(backid === 1){
let mage1 = new Canvas(700, 490)
.addImage(img, 0, 0, 700, 490)
.addImage(layout, 0, 0) 
.addImage(hype, 260, 358, 25, 25)
.addImage(dev, 170, 358, 25, 25)
.addImage(vip313, 230, 358, 25, 25)
.addImage(marry32, 140, 358, 25, 25)
.addImage(staff, 200, 358, 25, 25)
.setColor("#2C2F33")
.setShadowColor('rgba(22, 22, 22, 1)')
.setShadowOffsetY(5)
.setShadowBlur(10)
.addCircle(87, 367, 43)
.addCircularImage(avatar, 90, 367, 45, 45)
.setTextFont('14pt Arial Black')
.setColor('#FFFFFF')
.addText(`${message.author.username}`, 140, 340)
.setTextFont('12pt Arial Black')    
.addText(`${hanaabout3}`, 15, 450)
.setTextFont('12pt Arial Black')
.addText(credits3, 620, 422)
.setTextFont('22pt Klavika Regular')
.addText(`Reps: ${rep3}`, 6, 40)
.setTextFont('13pt Arial Black') 
.setColor('#FF00FF')
.addText(married3, 137, 408)
.toBuffer()
return message.channel.send(`<@${message.author.id}>`, {files: [mage1]})
}
}
let canvasimg = new Canvas(700, 490)
.addImage(background, 0, 0, 700, 490)
.addImage(layout, 0, 0) 
.addImage(hype, 260, 358, 25, 25)
.addImage(dev, 170, 358, 25, 25)
.addImage(vip313, 230, 358, 25, 25)
.addImage(marry32, 140, 358, 25, 25)
.addImage(staff, 200, 358, 25, 25)
.setColor("#2C2F33")
.setShadowColor('rgba(22, 22, 22, 1)')
.setShadowOffsetY(5)
.setShadowBlur(10)
.addCircle(87, 367, 43)
.addCircularImage(avatar, 90, 367, 45, 45)
.setTextFont('14pt Arial Black')
.setColor('#FFFFFF')
.addText(`${message.author.username}`, 140, 340)
.setTextFont('12pt Arial Black')    
.addText(`${hanaabout3}`, 15, 450)
.setTextFont('12pt Arial Black')
.addText(credits3, 620, 422)
.setTextFont('22pt Klavika Regular')
.addText(`Reps: ${rep3}`, 6, 40)
.setTextFont('13pt Arial Black') 
.setColor('#FF00FF')
.addText(married3, 137, 408)
.toBuffer()
return message.channel.send(`<@${message.author.id}>`, {files: [canvasimg]})

}
  if(backid === 1){
const back = await db.fetch(`background_${message.author.id}`)
const img = await canvas.loadImage(`${back}`)
if(backid === 1){
let mage1 = new Canvas(700, 490)
.addImage(img, 0, 0, 700, 490)
.addImage(layout, 0, 0) 
.addImage(hype, 320, 90, 30, 30)
.addImage(vip313, 290, 85, 30, 30)
.addImage(dev, 230, 85, 30, 30)
.addImage(marry32, 200, 85, 30, 30)
.setColor("#2C2F33")
.setShadowColor('rgba(22, 22, 22, 1)')
.setShadowOffsetY(5)
.setShadowBlur(10)
.addCircle(101, 95, 62)
.addCircularImage(avatar, 100, 95, 64)
.setTextFont('18pt Arial Black')
.setColor('#FFFFFF')
.addText(`${message.author.tag}`, 200, 80)
.setTextFont('12pt Arial Black')    
.addText(`${hanaabout3}`, 15, 400)
.addImage(creditslogo, 540, 390, 25, 25)
.addText(credits3, 570, 409)
.addImage(fslogo, 540, 420, 25, 25)
.addText(rep3, 570, 439)
.addImage(marryimg, 540, 449, 25, 25)
.addText(married3, 570, 468)
.addImage(staff, 260, 85, 30, 30)
.toBuffer()
return message.channel.send(`<@${message.author.id}>`, {files: [mage1]})
}
}
let canvasimg = new Canvas(700, 490)
.addImage(background, 0, 0, 700, 490)
.addImage(layout, 0, 0) 
.addImage(hype, 320, 90, 30, 30)
.addImage(dev, 230, 85, 30, 30)
.addImage(vip313, 290, 85, 30, 30)
.addImage(marry32, 200, 85, 30, 30)
.addImage(staff, 260, 85, 30, 30)
.setColor("#2C2F33")
.setShadowColor('rgba(22, 22, 22, 1)')
.setShadowOffsetY(5)
.setShadowBlur(10)
.addCircle(101, 95, 62)
.addCircularImage(avatar, 100, 95, 64)
.setTextFont('18pt Arial Black')
.setColor('#FFFFFF')
.addText(`${message.author.tag}`, 200, 80)
.setTextFont('12pt Arial Black')    
.addText(`${hanaabout3}`, 15, 400)
.addImage(creditslogo, 540, 390, 25, 25)
.addText(credits3, 570, 409)
.addImage(fslogo, 540, 420, 25, 25)
.addText(rep3, 570, 439)
.addImage(marryimg, 540, 449, 25, 25)
.addText(married3, 570, 468)
.addImage(staff, 260, 85, 30, 30)
.toBuffer()
return message.channel.send(`<@${message.author.id}>`, {files: [canvasimg]})

}
if(!user && args[0].length > 3){
const amount = parseInt(args[0]);
if(isNaN(amount)) {
 return message.say(`<a:erro:729089430685614092> ┃ **Eu não consegui achar esse usuário! Talvez o id providenciado está inválido.**`)
}
if(message.client.users.cache.get(`${args[0]}`) == "undefined" || message.client.users.cache.get(`${args[0]}`) == null) {
return message.say('<a:erro:729089430685614092> ┃ **Eu não consegui achar esse usuário! Talvez o id providenciado está inválido.**')
}
let bot = await db.fetch(`bot_${args[0]}`)
const user = message.mentions.users.first()
let rep33 = await db.fetch(`rep_${args[0]}`)
let credits33 = await db.fetch(`credits_${args[0]}`)
let vip33 = await db.fetch(`vip_${args[0]}`)
let married33 = await db.fetch(`marry4_${args[0]}`)
let hanaabout33 = await db.fetch(`about_${args[0]}`)
let hanastaff33 = await db.fetch(`hanastaff5_${args[0]}`)
let hanavipicon33 = await db.fetch(`hanavip5_${args[0]}`) 
let hanadev33 = await  db.fetch(`hanadev5_${args[0]}`)
let hanabh33 = await db.fetch(`hanabh5_${args[0]}`)
let hanamarry33 = await db.fetch(`hanamarry5_${args[0]}`)
let hp33 = await  db.fetch(`hanap5_${args[0]}`)
let cu33 = await db.fetch(`cu_${args[0]}`)
if(bot === null) bot = ''
if(hp33 === null) hp3 = ''
if(hanamarry33 === null) hanamarry33 = ''
if(hanadev33 === null) hanadev33 = ''
if(hanavipicon33 === null) hanavipicon33 = ''
if(hanastaff33 === null) hanastaff33 = ''
if(hanabh33 === null) hanabh33 = ''
if(vip33 === null) vip33 = 'Not Active'
if(married33 === null) married33 = 'Alone'
if(credits33 === null) credits33 = 0
if(rep33 === null) rep33 = 0
if(hanaabout33 === null) hanaabout33 = 'I\'m using Hana! You can change this using ht!aboutme'


if(args[0] === message.guild.owner.id) db.set(`gowner_${args[0]}`, ':crown:')
if(args[0] != message.guild.owner.id) db.set(`gowner_${args[0]}`, '')
let gowner3 = await db.fetch(`gowner_${args[0]}`)
let stats = db.fetch(`status_${args[0]}`)
const avatar3 = await canvas.loadImage(message.client.users.cache.get(args[0]).displayAvatarURL({ format: 'jpg' }));  
if(married33.length > 7) married33 = married33.substring(0, 7) + "..."
if(hanaabout33.length > 7) hanaabout33 = hanaabout33.substring(0, 53) + `\n${hanaabout33.substring(53, 80)}`
if(stats === null) stats =  '<:offline:727684258663235596>'
let gemblems = db.fetch(`gemblem_${args[0]}`)
let gemblem = db.fetch(`gemblem_${message.guild.id}`)
if(gemblems === null) gemblems = ''
if(cu3 === null) cu3 = 0
let vip31 = ''
if(married3.length > 7) married3 = married3.substring(0, 7) + "..."
if(vip33 === 'Active'){
vip31 = await canvas.loadImage('https://i.imgur.com/Lx3ZbJV.png')}
let gguild432 = await db.fetch(`gguild_${args[0]}`)
if(gguild432 === null) gguild432 = ''
const backid3 = await db.fetch(`backid_${args[0]}`)
let dev33 = ''
if(hanadev33 === 1){
dev33 = await canvas.loadImage('https://cdn.glitch.com/2a652bc7-ce3d-43dd-b2a9-13c8f64cdb0e%2Fdev.png?v=1595283155434')
}
let marry321 = ''
if(hanamarry33 === ':ring:'){
marry321 = await canvas.loadImage('https://cdn.discordapp.com/attachments/671466567904526336/735492131841638470/emoji.png')
}
let staff333 = ''
if(hanastaff33 === 1){
staff333 = await canvas.loadImage('https://cdn.discordapp.com/attachments/734577186182267070/735561995863982080/purple_staff.png')
}
if(db.fetch(`back1_${args[0]}`) === 1){
background = await canvas.loadImage('https://i.pinimg.com/originals/7a/7d/cf/7a7dcfa6474ec4cbfa81113eebe3c0dc.jpg')}
if(db.fetch(`nyancat_${args[0]}`) === 1){
background = await canvas.loadImage('https://cdn.suwalls.com/wallpapers/meme/nyan-cat-9089-2560x1600.jpg')}
if(db.fetch(`back3_${args[0]}`) === 1){
background = await canvas.loadImage('https://previews.123rf.com/images/belchonock/belchonock1706/belchonock170600259/79516749-cat-background.jpg')
}
if(db.fetch(`back4_${args[0]}`) === 1){
background = await canvas.loadImage('https://3.bp.blogspot.com/-0AqXPk4sSr4/Ubc2OS7TWtI/AAAAAAAAA_w/SY9POQQXt28/s1600/Sky+Anime+Landscape+16.jpg')
}
if(db.fetch(`back5_${args[0]}`) === 1){
background = await canvas.loadImage('https://cdnb.artstation.com/p/assets/images/images/019/170/273/large/ford-nguyen-city-street.jpg')
}
if(message.client.users.cache.get(`${args[0]}`).flags.toArray().includes('HOUSE_BRAVERY')) hype = await canvas.loadImage('https://cdn.discordapp.com/attachments/729065429326364752/746957852232384582/hypesquad_bravery.png')
if(message.client.users.cache.get(`${args[0]}`).flags.toArray().includes('HOUSE_BRILLIANCE')) hype = await canvas.loadImage('https://cdn.discordapp.com/attachments/729065429326364752/746957911112024126/hypesquad_brilliance.png')
if(message.client.users.cache.get(`${args[0]}`).flags.toArray().includes('HOUSE_BALANCE')) hype = await canvas.loadImage('https://cdn.discordapp.com/attachments/729065429326364752/746957881227608235/hypesquad_balance.png')
if(db.fetch(`lay1_${args[0]}`) === 1) {
layout = await canvas.loadImage('https://i.imgur.com/0HbYwRX.png')
if(married33.length > 7) married33 = married33.substring(0, 7) + "..."
  if(backid === 1){
const back = await db.fetch(`background_${args[0]}`)
const img = await canvas.loadImage(`${back}`)
if(backid === 1){
let mage1 = new Canvas(700, 490)
.addImage(img, 0, 0, 700, 490)
.addImage(layout, 0, 0) 
.addImage(hype, 320, 90, 30, 30)
.addImage(dev33, 230, 85, 30, 30)
.addImage(vip31, 290, 85, 30, 30)
.addImage(marry321, 200, 85, 30, 30)
.addImage(staff333, 260, 85, 30, 30)
.setColor("#2C2F33")
.setShadowColor('rgba(22, 22, 22, 1)')
.setShadowOffsetY(5)
.setShadowBlur(10)
.addCircle(87, 367, 43)
.addCircularImage(avatar, 90, 367, 45, 45)
.setTextFont('14pt Arial Black')
.setColor('#FFFFFF')
.addText(`${message.client.users.cache.get(`${args[0]}`).username}`, 140, 340)
.setTextFont('12pt Arial Black')    
.addText(`${hanaabout3}`, 15, 450)
.setTextFont('12pt Arial Black')
.addText(credits3, 620, 422)
.setTextFont('22pt Klavika Regular')
.addText(`Reps: ${rep3}`, 6, 40)
.setTextFont('13pt Arial Black') 
.setColor('#FF00FF')
.addText(married33, 137, 408)
.toBuffer()
return message.channel.send(`<@${message.author.id}>`, {files: [mage1]})
}
}
let canvasimg = new Canvas(700, 490)
.addImage(background, 0, 0, 700, 490)
.addImage(layout, 0, 0) 
.addImage(hype, 320, 90, 30, 30)
.addImage(dev33, 230, 85, 30, 30)
.addImage(vip31, 290, 85, 30, 30)
.addImage(marry321, 200, 85, 30, 30)
.addImage(staff333, 260, 85, 30, 30)
.setColor("#2C2F33")
.setShadowColor('rgba(22, 22, 22, 1)')
.setShadowOffsetY(5)
.setShadowBlur(10)
.addCircle(87, 367, 43)
.addCircularImage(avatar, 90, 367, 45, 45)
.setTextFont('14pt Arial Black')
.setColor('#FFFFFF')
.addText(`${message.client.users.cache.get(`${args[0]}`).username}`, 140, 340)
.setTextFont('12pt Arial Black')    
.addText(`${hanaabout3}`, 15, 450)
.setTextFont('12pt Arial Black')
.addText(credits3, 620, 422)
.setTextFont('22pt Klavika Regular')
.addText(`Reps: ${rep3}`, 6, 40)
.setTextFont('13pt Arial Black') 
.setColor('#FF00FF')
.addText(married33, 137, 408)
.toBuffer()
return message.channel.send(`<@${message.author.id}>`, {files: [canvasimg]})

}
if(backid3 === 1){
const back = await db.fetch(`background_${message.client.users.cache.get(args[0]).id}`)
const img = await canvas.loadImage(`${back}`)
if(backid3 === 1) {
let mage122 = new Canvas(700, 490)
.addImage(img, 0, 0, 700, 490)
.addImage(layout, 0, 0) 
.addImage(vip31, 290, 85, 30, 30)
.addImage(marry321, 200, 85, 30, 30)
.addImage(dev33, 230, 85, 30, 30)
.addImage(hype, 320, 90, 30, 30)
.setColor("#2C2F33")
.setShadowColor('rgba(22, 22, 22, 1)')
.setShadowOffsetY(5)
.setShadowBlur(10)
.addCircle(101, 95, 62)
.addCircularImage(avatar3, 100, 95, 64)
.setTextFont('18pt Arial Black')
.setColor('#FFFFFF')
.addText(`${message.client.users.cache.get(args[0]).tag}`, 200, 80)
.setTextFont('12pt Arial Black')    
.addText(`${hanaabout33}`, 15, 400)
.addImage(creditslogo, 540, 390, 25, 25)
.addText(credits33, 570, 409)
.addImage(fslogo, 540, 420, 25, 25)
.addText(rep33, 570, 439)
.addImage(marryimg, 540, 449, 25, 25)
.addText(married33, 570, 468)
.addImage(staff333, 260, 85, 30, 30)
.toBuffer()
return message.channel.send(`<@${message.author.id}>`, {files: [mage122]})
}
}
let canvasimg22 = new Canvas(700, 490)
.addImage(background, 0, 0, 700, 490)
.addImage(layout, 0, 0) 
.addImage(hype, 320, 90, 30, 30)
.addImage(dev33, 230, 85, 30, 30)
.addImage(vip31, 290, 85, 30, 30)
.addImage(marry321, 200, 85, 30, 30)
.addImage(staff333, 260, 85, 30, 30)
.setColor("#2C2F33")
.setShadowColor('rgba(22, 22, 22, 1)')
.setShadowOffsetY(5)
.setShadowBlur(10)
.addCircle(101, 95, 62)
.addCircularImage(avatar3, 100, 95, 64)
.setTextFont('18pt Arial Black')
.setColor('#FFFFFF')
.addText(`${message.client.users.cache.get(args[0]).tag}`, 200, 80)
.setTextFont('12pt Arial Black')    
.addText(`${hanaabout33}`, 15, 400)
.addImage(creditslogo, 540, 390, 25, 25)
.addText(credits33, 570, 409)
.addImage(fslogo, 540, 420, 25, 25)
.addText(rep33, 570, 439)
.addImage(marryimg, 540, 449, 25, 25)
.addText(married33, 570, 468)
.addImage(staff333, 260, 85, 30, 30)
.toBuffer()
return message.channel.send(`<@${message.author.id}>`, {files: [canvasimg22]})
if(message.guild.members.cache.filter(member => member.user.bot)) return db.set(`bot_${args[0]}`, '<:bot_tag:727867192435277845>')
if(message.guild.members.cache.filter(member => !member.user.bot)) db.set(`bot_${args[0]}`, '')
}
let hanastaff = await db.fetch(`hanastaff5_${user.id}`)
let rep = await db.fetch(`rep_${user.id}`)
let credits345 = await db.fetch(`credits_${user.id}`)
let vip = await db.fetch(`vip_${user.id}`)
let hanamarry = await db.fetch(`hanamarry5_${user.id}`)
let married = await db.fetch(`marry4_${user.id}`)
let hanaabout = await db.fetch(`about_${user.id}`)
let hanavipicon = await db.fetch(`hanavip5_${user.id}`) 
let hanabh = await db.fetch(`hanabh5_${user.id}`)
let hanadev = await  db.fetch(`hanadev5_${user.id}`)
let hp5 = await  db.fetch(`hanap5_${user.id}`)
if(hp5 === null) hp5 = ''
if(hanadev === null) hanadev = ''
if(hanavipicon === null) hanavipicon = ''
if(hanastaff === null) hanastaff = ''
if(hanamarry === null) hanamarry = ''
if(hanabh === null) hanabh = ''
if(credits345 === null) credits345 = 0
if(rep === null) rep = 0
if(vip === null) vip = 'Not Active'
if(married === null) married = 'Alone'
if(hanaabout === null) hanaabout = 'I\'m using Hana! You can change this using ht!aboutme'
if(user.bot === true) db.set(`bot_${user.id}`, '<:bot:729109597767598110>')
if(user.bot === false) db.set(`bot_${user.id}`, '')
let bot = await db.fetch(`bot_${user.id}`)
if(bot === null) bot = ''
let cu = await db.fetch(`cu_${user.id}`)
let gemblems = db.fetch(`gemblem_${user.id}`)
let gemblem = db.fetch(`gemblem_${message.guild.id}`)
if(gemblems === null) gemblems = ''
if(cu === null) cu = 0
let bl333 = await db.fetch(`blist_${user.id}`)
if(bl333 === null) bl333 = '<:disabled:729074769621811200>'
let gguild43 = await db.fetch(`gguild_${user.id}`)
if(gguild43 === null) gguild43 = ''
if(user.id === message.guild.owner.id) db.set(`gowner_${user.id}`, ':crown:')
if(user.id != message.guild.owner.id) db.set(`gowner_${user.id}`, '')
let gowner33 = await db.fetch(`gowner_${user.id}`)
let bl32 = await db.fetch(`blist_${user.id}`)
let blreasom2 = await db.fetch(`blreason_${user.id}`)
if(bl32 === '<:enabled:730821706347708437>') {
 return message.say(`
<:blacklisted:729074968104534116> **| <@${message.author.id}> , <@${user.id}> está banido!**
:notepad_spiral: **| Motivo:** \`${blreasom2}\``)
}
const avatar3 = await canvas.loadImage(user.displayAvatarURL({ format: 'jpg' }));  
if(married.length > 7) married = married.substring(0, 7) + "..."
if(hanaabout.length > 7) hanaabout = hanaabout.substring(0, 53) + `\n${hanaabout.substring(53, 80)}`
if(gemblems === null) gemblems = ''
if(cu3 === null) cu3 = 0
let vip313 = ''
if(vip === 'Active'){
vip313 = await canvas.loadImage('https://i.imgur.com/Lx3ZbJV.png')}
let gguild432 = await db.fetch(`gguild_${user.id}`)
if(gguild432 === null) gguild432 = ''
const backid31 = await db.fetch(`backid_${user.id}`)
let dev33 = ''
if(hanadev === 1){
dev33 = await canvas.loadImage('https://cdn.glitch.com/2a652bc7-ce3d-43dd-b2a9-13c8f64cdb0e%2Fdev.png?v=1595283155434')
}
let marry321 = ''
if(hanamarry === ':ring:'){
marry321 = await canvas.loadImage('https://cdn.discordapp.com/attachments/671466567904526336/735492131841638470/emoji.png')
}
let staff3331 = ''
if(hanastaff === 1){
staff3331 = await canvas.loadImage('https://cdn.discordapp.com/attachments/734577186182267070/735561995863982080/purple_staff.png')
}
if(db.fetch(`back1_${user.id}`) === 1){
background = await canvas.loadImage('https://i.pinimg.com/originals/7a/7d/cf/7a7dcfa6474ec4cbfa81113eebe3c0dc.jpg')}
if(db.fetch(`nyancat_${user.id}`) === 1){
background = await canvas.loadImage('https://cdn.suwalls.com/wallpapers/meme/nyan-cat-9089-2560x1600.jpg')}
if(db.fetch(`back3_${user.id}`) === 1){
background = await canvas.loadImage('https://previews.123rf.com/images/belchonock/belchonock1706/belchonock170600259/79516749-cat-background.jpg')
}
if(db.fetch(`back4_${user.id}`) === 1){
background = await canvas.loadImage('https://3.bp.blogspot.com/-0AqXPk4sSr4/Ubc2OS7TWtI/AAAAAAAAA_w/SY9POQQXt28/s1600/Sky+Anime+Landscape+16.jpg')
}
if(db.fetch(`back5_${user.id}`) === 1){
background = await canvas.loadImage('https://cdnb.artstation.com/p/assets/images/images/019/170/273/large/ford-nguyen-city-street.jpg')
}
if(user.flags.toArray().includes('HOUSE_BRAVERY')) hype = await canvas.loadImage('https://cdn.discordapp.com/attachments/729065429326364752/746957852232384582/hypesquad_bravery.png')
if(user.flags.toArray().includes('HOUSE_BRILLIANCE')) hype = await canvas.loadImage('https://cdn.discordapp.com/attachments/729065429326364752/746957911112024126/hypesquad_brilliance.png')
if(user.flags.toArray().includes('HOUSE_BALANCE')) hype = await canvas.loadImage('https://cdn.discordapp.com/attachments/729065429326364752/746957881227608235/hypesquad_balance.png')
if(db.fetch(`lay1_${user.id}`) === 1) {
if(married.length > 11) married = married.substring(0, 11) + "..."
layout = await canvas.loadImage('https://i.imgur.com/0HbYwRX.png')
  if(backid === 1){
const back = await db.fetch(`background_${user.id}`)
const img = await canvas.loadImage(`${back}`)
if(backid === 1){
let mage1 = new Canvas(700, 490)
.addImage(img, 0, 0, 700, 490)
.addImage(layout, 0, 0) 
.addImage(hype, 260, 358, 25, 25)
.addImage(dev33, 170, 358, 25, 25)
.addImage(vip313, 230, 358, 25, 25)
.addImage(marry321, 140, 358, 25, 25)
.addImage(staff3331, 200, 358, 25, 25)
.setColor("#2C2F33")
.setShadowColor('rgba(22, 22, 22, 1)')
.setShadowOffsetY(5)
.setShadowBlur(10)
.addCircle(87, 367, 43)
.addCircularImage(avatar, 90, 367, 45, 45)
.setTextFont('14pt Arial Black')
.setColor('#FFFFFF')
.addText(`${user.username}`, 140, 340)
.setTextFont('12pt Arial Black')    
.addText(`${hanaabout}`, 15, 450)
.setTextFont('12pt Arial Black')
.addText(credits3, 620, 422)
.setTextFont('22pt Klavika Regular')
.addText(`Reps: ${rep3}`, 6, 40)
.setTextFont('13pt Arial Black') 
.setColor('#FF00FF')
.addText(married, 137, 408)
.toBuffer()
return message.channel.send(`<@${message.author.id}>`, {files: [mage1]})
}
}
let canvasimg = new Canvas(700, 490)
.addImage(background, 0, 0, 700, 490)
.addImage(layout, 0, 0) 
.addImage(hype, 260, 358, 25, 25)
.addImage(dev33, 170, 358, 25, 25)
.addImage(vip313, 230, 358, 25, 25)
.addImage(marry321, 140, 358, 25, 25)
.addImage(staff3331, 200, 358, 25, 25)
.setColor("#2C2F33")
.setShadowColor('rgba(22, 22, 22, 1)')
.setShadowOffsetY(5)
.setShadowBlur(10)
.addCircle(87, 367, 43)
.addCircularImage(avatar, 90, 367, 45, 45)
.setTextFont('14pt Arial Black')
.setColor('#FFFFFF')
.addText(`${user.username}`, 140, 340)
.setTextFont('12pt Arial Black')    
.addText(`${hanaabout}`, 15, 450)
.setTextFont('12pt Arial Black')
.addText(credits3, 620, 422)
.setTextFont('22pt Klavika Regular')
.addText(`Reps: ${rep3}`, 6, 40)
.setTextFont('13pt Arial Black') 
.setColor('#FF00FF')
.addText(married, 137, 408)
.toBuffer()
return message.channel.send(`<@${message.author.id}>`, {files: [canvasimg]})

}
if(backid31 === 1){
const back = await db.fetch(`background_${user.id}`)
const img = await canvas.loadImage(`${back}`)
if(backid31 === 1) {
let mage122 = new Canvas(700, 490)
.addImage(img, 0, 0, 700, 490)
.addImage(layout, 0, 0) 
.addImage(hype, 320, 90, 30, 30)
.addImage(dev33, 230, 85, 30, 30)
.addImage(vip313, 290, 85, 30, 30)
.addImage(marry321, 200, 85, 30, 30)
.setColor("#2C2F33")
.setShadowColor('rgba(22, 22, 22, 1)')
.setShadowOffsetY(5)
.setShadowBlur(10)
.addCircle(101, 95, 62)
.addCircularImage(avatar3, 100, 95, 64)
.setTextFont('18pt Arial Black')
.setColor('#FFFFFF')
.addText(`${user.tag}`, 200, 80)
.setTextFont('12pt Arial Black')    
.addText(`${hanaabout}`, 15, 400)
.addImage(creditslogo, 540, 390, 25, 25)
.addText(credits345, 570, 409)
.addImage(fslogo, 540, 420, 25, 25)
.addText(rep, 570, 439)
.addImage(marryimg, 540, 449, 25, 25)
.addText(married, 570, 468)
.addImage(staff3331, 260, 85, 30, 30)
.toBuffer()
return message.channel.send(`<@${message.author.id}>`, {files: [mage122]})
}
}
let canvasimg22 = new Canvas(700, 490)
.addImage(background, 0, 0, 700, 490)
.addImage(layout, 0, 0) 
.addImage(hype, 320, 90, 30, 30)
.addImage(dev33, 170, 358, 25, 25)
.addImage(vip313, 230, 358, 25, 25)
.addImage(marry321, 140, 358, 25, 25)
.addImage(staff3331, 200, 358, 25, 25)
.setColor("#2C2F33")
.setShadowColor('rgba(22, 22, 22, 1)')
.setShadowOffsetY(5)
.setShadowBlur(10)
.addCircle(101, 95, 62)
.addCircularImage(avatar3, 100, 95, 64)
.setTextFont('18pt Arial Black')
.setColor('#FFFFFF')
.addText(`${user.tag}`, 200, 80)
.setTextFont('12pt Arial Black')    
.addText(`${hanaabout}`, 15, 400)
.addImage(creditslogo, 540, 390, 25, 25)
.addText(credits345, 570, 409)
.addImage(fslogo, 540, 420, 25, 25)
.addText(rep, 570, 439)
.addImage(marryimg, 540, 449, 25, 25)
.addText(married, 570, 468)
.addImage(staff3331, 260, 85, 30, 30)
.toBuffer()
return message.channel.send(`<@${message.author.id}>`, {files: [canvasimg22]})

}

if(!args[0]) {
if(message.author.id === message.member.user.bot) db.set(`bot_${message.author.id}`, '<:bot:538163542260580352>')


let bot = await db.fetch(`bot_${message.author.id}`)
if(bot === null) bot = ''
if(message.author.id === message.guild.owner.id) db.set(`gowner_${message.author.id}`, ':crown:')
if(message.author.id != message.guild.owner.id) db.set(`gowner_${message.author.id}`, '')
let gowner3 = await db.fetch(`gowner_${message.author.id}`)
if(message.member.user.presence.status === "offline") db.set(`status_${message.author.id}`, '<:offline:727684258663235596>')
if(message.member.user.presence.status === "idle") db.set(`status_${message.author.id}`, '<:idle:727686689602142279>')
let stats3 = await db.fetch(`status_${message.author.id}`)
if(stats3 === null) stats3 =  '<:offline:727684258663235596>'
let bl = await db.fetch(`blist_${message.author.id}`)
if(bl === null) bl = '<:disabled:729074769621811200>'
let gemblems = db.fetch(`gemblem_${message.author.id}`)
let gemblem = db.fetch(`gemblem_${message.guild.id}`)
if(gemblems === null) gemblems = ''
let gguild42 = await db.fetch(`gguild_${message.author.id}`)
if(gguild42 === null) gguild42 = ''
if(married3.length > 7) married3 = married3.substring(0, 7) + "..."
if(hanaabout3.length > 7) hanaabout3 = hanaabout3.substring(0, 53) + `\n${hanaabout3.substring(53, 80)}`
let vip313 = ''
if(vip3 === 'Active'){
vip313 = await canvas.loadImage('https://i.imgur.com/Lx3ZbJV.png')}
if(message.author.flags.toArray().includes('HOUSE_BRAVERY')) hype = await canvas.loadImage('https://cdn.discordapp.com/attachments/729065429326364752/746957852232384582/hypesquad_bravery.png')
if(message.author.flags.toArray().includes('HOUSE_BRILLIANCE')) hype = await canvas.loadImage('https://cdn.discordapp.com/attachments/729065429326364752/746957911112024126/hypesquad_brilliance.png')
if(message.author.flags.toArray().includes('HOUSE_BALANCE')) hype = await canvas.loadImage('https://cdn.discordapp.com/attachments/729065429326364752/746957881227608235/hypesquad_balance.png')
if(db.fetch(`back1_${message.author.id}`) === 1){
background = await canvas.loadImage('https://i.pinimg.com/originals/7a/7d/cf/7a7dcfa6474ec4cbfa81113eebe3c0dc.jpg')}
if(db.fetch(`nyancat_${message.author.id}`) === 1){
background = await canvas.loadImage('https://cdn.suwalls.com/wallpapers/meme/nyan-cat-9089-2560x1600.jpg')}
if(db.fetch(`back3_${message.author.id}`) === 1){
background = await canvas.loadImage('https://previews.123rf.com/images/belchonock/belchonock1706/belchonock170600259/79516749-cat-background.jpg')
}
if(db.fetch(`back4_${message.author.id}`) === 1){
background = await canvas.loadImage('https://3.bp.blogspot.com/-0AqXPk4sSr4/Ubc2OS7TWtI/AAAAAAAAA_w/SY9POQQXt28/s1600/Sky+Anime+Landscape+16.jpg')
}
if(db.fetch(`back5_${message.author.id}`) === 1){
background = await canvas.loadImage('https://cdnb.artstation.com/p/assets/images/images/019/170/273/large/ford-nguyen-city-street.jpg')
}
if(db.fetch(`lay1_${message.author.id}`) === 1) {
layout = await canvas.loadImage('https://i.imgur.com/0HbYwRX.png')
if(married3.length > 11) married3 = married3.substring(0, 11) + "..."
  if(backid === 1){
const back = await db.fetch(`background_${message.author.id}`)
const img = await canvas.loadImage(`${back}`)
if(backid === 1){
let mage1 = new Canvas(700, 490)
.addImage(img, 0, 0, 700, 490)
.addImage(layout, 0, 0) 
.addImage(hype, 260, 358, 25, 25)
.addImage(dev, 170, 358, 25, 25)
.addImage(vip313, 230, 358, 25, 25)
.addImage(marry32, 140, 358, 25, 25)
.addImage(staff, 200, 358, 25, 25)
.setColor("#2C2F33")
.setShadowColor('rgba(22, 22, 22, 1)')
.setShadowOffsetY(5)
.setShadowBlur(10)
.addCircle(87, 367, 43)
.addCircularImage(avatar, 90, 367, 45, 45)
.setTextFont('14pt Arial Black')
.setColor('#FFFFFF')
.addText(`${message.author.username}`, 140, 340)
.setTextFont('12pt Arial Black')    
.addText(`${hanaabout3}`, 15, 450)
.setTextFont('12pt Arial Black')
.addText(credits3, 620, 422)
.setTextFont('22pt Klavika Regular')
.addText(`Reps: ${rep3}`, 6, 40)
.setTextFont('13pt Arial Black') 
.setColor('#FF00FF')
.addText(married3, 137, 408)
.toBuffer()
return message.channel.send(`<@${message.author.id}>`, {files: [mage1]})
}
}
let canvasimg = new Canvas(700, 490)
.addImage(background, 0, 0, 700, 490)
.addImage(layout, 0, 0) 
.addImage(hype, 260, 358, 25, 25)
.addImage(dev, 170, 358, 25, 25)
.addImage(vip313, 230, 358, 25, 25)
.addImage(marry32, 140, 358, 25, 25)
.addImage(staff, 200, 358, 25, 25)
.setColor("#2C2F33")
.setShadowColor('rgba(22, 22, 22, 1)')
.setShadowOffsetY(5)
.setShadowBlur(10)
.addCircle(87, 367, 43)
.addCircularImage(avatar, 90, 367, 45, 45)
.setTextFont('14pt Arial Black')
.setColor('#FFFFFF')
.addText(`${message.author.username}`, 140, 340)
.setTextFont('12pt Arial Black')    
.addText(`${hanaabout3}`, 15, 450)
.setTextFont('12pt Arial Black')
.addText(credits3, 620, 422)
.setTextFont('22pt Klavika Regular')
.addText(`Reps: ${rep3}`, 6, 40)
.setTextFont('13pt Arial Black') 
.setColor('#FF00FF')
.addText(married3, 137, 408)
.toBuffer()
return message.channel.send(`<@${message.author.id}>`, {files: [canvasimg]})

}
if(backid === 1){
const back = await db.fetch(`background_${message.author.id}`)
const img = await canvas.loadImage(`${back}`)
if(backid === 1){
let mage1 = new Canvas(700, 490)
.addImage(img, 0, 0, 700, 490)
.addImage(layout, 0, 0) 
.addImage(vip313, 290, 85, 30, 30)
.addImage(hype, 320, 90, 30, 30)
.addImage(dev, 230, 85, 30, 30)
.addImage(marry32, 200, 85, 30, 30)
.setColor("#2C2F33")
.setShadowColor('rgba(22, 22, 22, 1)')
.setShadowOffsetY(5)
.setShadowBlur(10)
.addCircle(101, 95, 62)
.addCircularImage(avatar, 100, 95, 64)
.setTextFont('18pt Arial Black')
.setColor('#FFFFFF')
.addText(`${message.author.tag}`, 200, 80)
.setTextFont('12pt Arial Black')    
.addText(`${hanaabout3}`, 15, 400)
.addImage(creditslogo, 540, 390, 25, 25)
.addText(credits3, 570, 409)
.addImage(fslogo, 540, 420, 25, 25)
.addText(rep3, 570, 439)
.addImage(marryimg, 540, 449, 25, 25)
.addText(married3, 570, 468)
.addImage(staff, 260, 85, 30, 30)
.toBuffer()
return message.channel.send(`<@${message.author.id}>`, {files: [mage1]})
}
}
let canvasimg = new Canvas(700, 490)
.addImage(background, 0, 0, 700, 490)
.addImage(layout, 0, 0) 
.addImage(dev, 230, 85, 30, 30)
.addImage(hype, 320, 90, 30, 30)
.addImage(vip313, 290, 85, 30, 30)
.addImage(marry32, 200, 85, 30, 30)
.addImage(staff, 260, 85, 30, 30)
.setColor("#2C2F33")
.setShadowColor('rgba(22, 22, 22, 1)')
.setShadowOffsetY(5)
.setShadowBlur(10)
.addCircle(101, 95, 62)
.addCircularImage(avatar, 100, 95, 64)
.setTextFont('18pt Arial Black')
.setColor('#FFFFFF')
.addText(`${message.author.tag}`, 200, 80)
.setTextFont('12pt Arial Black')    
.addText(`${hanaabout3}`, 15, 400)
.addImage(creditslogo, 540, 390, 25, 25)
.addText(credits3, 570, 409)
.addImage(fslogo, 540, 420, 25, 25)
.addText(rep3, 570, 439)
.addImage(marryimg, 540, 449, 25, 25)
.addText(married3, 570, 468)
.addImage(staff, 260, 85, 30, 30)
.toBuffer()
return message.channel.send(`<@${message.author.id}>`, {files: [canvasimg]})

}
if(!user && args[0].length > 3){
const amount = parseInt(args[0]);
if(isNaN(amount)) {
 return message.say(`<a:erro:729089430685614092> ┃ **Eu não consegui achar esse usuário! Talvez o id providenciado está inválido.**`)
}
if(message.client.users.cache.get(`${args[0]}`) == "undefined" || message.client.users.cache.get(`${args[0]}`) == null) {
return message.say('<a:erro:729089430685614092> ┃ **Eu não consegui achar esse usuário! Talvez o id providenciado está inválido.**')
}
let bot = await db.fetch(`bot_${args[0]}`)
const user = message.mentions.users.first()
let rep33 = await db.fetch(`rep_${args[0]}`)
let credits33 = await db.fetch(`credits_${args[0]}`)
let vip33 = await db.fetch(`vip_${args[0]}`)
let married33 = await db.fetch(`marry4_${args[0]}`)
let hanaabout33 = await db.fetch(`about_${args[0]}`)
let hanastaff33 = await db.fetch(`hanastaff5_${args[0]}`)
let hanavipicon33 = await db.fetch(`hanavip5_${args[0]}`) 
let hanadev33 = await  db.fetch(`hanadev5_${args[0]}`)
let hanabh33 = await db.fetch(`hanabh5_${args[0]}`)
let hanamarry33 = await db.fetch(`hanamarry5_${args[0]}`)
let hp33 = await  db.fetch(`hanap5_${args[0]}`)
let cu33 = await db.fetch(`cu_${args[0]}`)
if(bot === null) bot = ''
if(hp33 === null) hp3 = ''
if(hanamarry33 === null) hanamarry33 = ''
if(hanadev33 === null) hanadev33 = ''
if(hanavipicon33 === null) hanavipicon33 = ''
if(hanastaff33 === null) hanastaff33 = ''
if(hanabh33 === null) hanabh33 = ''
if(vip33 === null) vip33 = 'Not Active'
if(married33 === null) married33 = 'Alone'
if(credits33 === null) credits33 = 0
if(rep33 === null) rep33 = 0
if(hanaabout33 === null) hanaabout33 = 'I\'m using Hana! You can change this using ht!aboutme'


if(args[0] === message.guild.owner.id) db.set(`gowner_${args[0]}`, ':crown:')
if(args[0] != message.guild.owner.id) db.set(`gowner_${args[0]}`, '')
let gowner3 = await db.fetch(`gowner_${args[0]}`)
let stats = db.fetch(`status_${args[0]}`)
const avatar3 = await canvas.loadImage(message.client.users.cache.get(args[0]).displayAvatarURL({ format: 'jpg' }));  
if(married33.length > 7) married33 = married33.substring(0, 7) + "..."
if(hanaabout33.length > 7) hanaabout33 = hanaabout33.substring(0, 53) + `\n${hanaabout33.substring(53, 80)}`
if(stats === null) stats =  '<:offline:727684258663235596>'
let gemblems = db.fetch(`gemblem_${args[0]}`)
let gemblem = db.fetch(`gemblem_${message.guild.id}`)
if(gemblems === null) gemblems = ''
if(cu3 === null) cu3 = 0
let vip31 = ''
if(vip33 === 'Active'){
vip31 = await canvas.loadImage('https://i.imgur.com/Lx3ZbJV.png')}
let gguild432 = await db.fetch(`gguild_${args[0]}`)
if(gguild432 === null) gguild432 = ''
const backid3 = await db.fetch(`backid_${args[0]}`)
let dev33 = ''
if(hanadev33 === 1){
dev33 = await canvas.loadImage('https://cdn.glitch.com/2a652bc7-ce3d-43dd-b2a9-13c8f64cdb0e%2Fdev.png?v=1595283155434')
}
let marry321 = ''
if(hanamarry33 === ':ring:'){
marry321 = await canvas.loadImage('https://cdn.discordapp.com/attachments/671466567904526336/735492131841638470/emoji.png')
}
let staff333 = ''
if(hanastaff33 === 1){
staff333 = await canvas.loadImage('https://cdn.discordapp.com/attachments/734577186182267070/735561995863982080/purple_staff.png')
}
if(db.fetch(`back1_${args[0]}`) === 1){
background = await canvas.loadImage('https://i.pinimg.com/originals/7a/7d/cf/7a7dcfa6474ec4cbfa81113eebe3c0dc.jpg')}
if(db.fetch(`nyancat_${args[0]}`) === 1){
background = await canvas.loadImage('https://cdn.suwalls.com/wallpapers/meme/nyan-cat-9089-2560x1600.jpg')}
if(db.fetch(`back3_${args[0]}`) === 1){
background = await canvas.loadImage('https://previews.123rf.com/images/belchonock/belchonock1706/belchonock170600259/79516749-cat-background.jpg')
}
if(db.fetch(`back4_${args[0]}`) === 1){
background = await canvas.loadImage('https://3.bp.blogspot.com/-0AqXPk4sSr4/Ubc2OS7TWtI/AAAAAAAAA_w/SY9POQQXt28/s1600/Sky+Anime+Landscape+16.jpg')
}
if(db.fetch(`back5_${args[0]}`) === 1){
background = await canvas.loadImage('https://cdnb.artstation.com/p/assets/images/images/019/170/273/large/ford-nguyen-city-street.jpg')
}
if(message.client.users.cache.get(`${args[0]}`).flags.toArray().includes('HOUSE_BRAVERY')) hype = await canvas.loadImage('https://cdn.discordapp.com/attachments/729065429326364752/746957852232384582/hypesquad_bravery.png')
if(message.client.users.cache.get(`${args[0]}`).flags.toArray().includes('HOUSE_BRILLIANCE')) hype = await canvas.loadImage('https://cdn.discordapp.com/attachments/729065429326364752/746957911112024126/hypesquad_brilliance.png')
if(message.client.users.cache.get(`${args[0]}`).flags.toArray().includes('HOUSE_BALANCE')) hype = await canvas.loadImage('https://cdn.discordapp.com/attachments/729065429326364752/746957881227608235/hypesquad_balance.png')
if(db.fetch(`lay1_${args[0]}`) === 1) {
layout = await canvas.loadImage('https://i.imgur.com/0HbYwRX.png')
if(married33.length > 11) married33 = married33.substring(0, 11) + "..."
  if(backid === 1){
const back = await db.fetch(`background_${args[0]}`)
const img = await canvas.loadImage(`${back}`)
if(backid === 1){
let mage1 = new Canvas(700, 490)
.addImage(img, 0, 0, 700, 490)
.addImage(layout, 0, 0) 
.addImage(hype, 260, 358, 25, 25)
.addImage(dev33, 170, 358, 25, 25)
.addImage(vip31, 230, 358, 25, 25)
.addImage(marry321, 140, 358, 25, 25)
.addImage(staff333, 200, 358, 25, 25)
.setColor("#2C2F33")
.setShadowColor('rgba(22, 22, 22, 1)')
.setShadowOffsetY(5)
.setShadowBlur(10)
.addCircle(87, 367, 43)
.addCircularImage(avatar, 90, 367, 45, 45)
.setTextFont('14pt Arial Black')
.setColor('#FFFFFF')
.addText(`${message.client.users.cache.get(`${args[0]}`).username}`, 140, 340)
.setTextFont('12pt Arial Black')    
.addText(`${hanaabout33}`, 15, 450)
.setTextFont('12pt Arial Black')
.addText(credits3, 620, 422)
.setTextFont('22pt Klavika Regular')
.addText(`Reps: ${rep3}`, 6, 40)
.setTextFont('13pt Arial Black') 
.setColor('#FF00FF')
.addText(married3, 137, 408)
.toBuffer()
return message.channel.send(`<@${message.author.id}>`, {files: [mage1]})
}
}
let canvasimg = new Canvas(700, 490)
.addImage(background, 0, 0, 700, 490)
.addImage(layout, 0, 0) 
.addImage(hype, 260, 358, 25, 25)
.addImage(dev33, 170, 358, 25, 25)
.addImage(vip31, 230, 358, 25, 25)
.addImage(marry321, 140, 358, 25, 25)
.addImage(staff333, 200, 358, 25, 25)
.setColor("#2C2F33")
.setShadowColor('rgba(22, 22, 22, 1)')
.setShadowOffsetY(5)
.setShadowBlur(10)
.addCircle(87, 367, 43)
.addCircularImage(avatar, 90, 367, 45, 45)
.setTextFont('14pt Arial Black')
.setColor('#FFFFFF')
.addText(`${message.client.users.cache.get(`${args[0]}`).username}`, 140, 340)
.setTextFont('12pt Arial Black')    
.addText(`${hanaabout33}`, 15, 450)
.setTextFont('12pt Arial Black')
.addText(credits3, 620, 422)
.setTextFont('22pt Klavika Regular')
.addText(`Reps: ${rep3}`, 6, 40)
.setTextFont('13pt Arial Black') 
.setColor('#FF00FF')
.addText(married3, 137, 408)
.toBuffer()
return message.channel.send(`<@${message.author.id}>`, {files: [canvasimg]})

}

if(backid3 === 1){
const back = await db.fetch(`background_${message.client.users.cache.get(args[0]).id}`)
const img = await canvas.loadImage(`${back}`)
if(backid3 === 1) {
let mage122 = new Canvas(700, 490)
.addImage(img, 0, 0, 700, 490)
.addImage(layout, 0, 0) 
.addImage(hype, 320, 90, 30, 30)
.addImage(dev33, 230, 85, 30, 30)
.addImage(vip31, 290, 85, 30, 30)
.addImage(marry321, 200, 85, 30, 30)
.setColor("#2C2F33")
.setShadowColor('rgba(22, 22, 22, 1)')
.setShadowOffsetY(5)
.setShadowBlur(10)
.addCircle(101, 95, 62)
.addCircularImage(avatar3, 100, 95, 64)
.setTextFont('18pt Arial Black')
.setColor('#FFFFFF')
.addText(`${message.client.users.cache.get(args[0]).tag}`, 200, 80)
.setTextFont('12pt Arial Black')    
.addText(`${hanaabout33}`, 15, 400)
.addImage(creditslogo, 540, 390, 25, 25)
.addText(credits33, 570, 409)
.addImage(fslogo, 540, 420, 25, 25)
.addText(rep33, 570, 439)
.addImage(marryimg, 540, 449, 25, 25)
.addText(married33, 570, 468)
.addImage(staff333, 260, 85, 30, 30)
.toBuffer()
return message.channel.send(`<@${message.author.id}>`, {files: [mage122]})
}
}
let canvasimg22 = new Canvas(700, 490)
.addImage(background, 0, 0, 700, 490)
.addImage(layout, 0, 0) 
.addImage(hype, 320, 90, 30, 30)
.addImage(dev33, 230, 85, 30, 30)
.addImage(vip31, 290, 85, 30, 30)
.addImage(marry321, 200, 85, 30, 30)
.addImage(staff333, 260, 85, 30, 30)
.setColor("#2C2F33")
.setShadowColor('rgba(22, 22, 22, 1)')
.setShadowOffsetY(5)
.setShadowBlur(10)
.addCircle(101, 95, 62)
.addCircularImage(avatar3, 100, 95, 64)
.setTextFont('18pt Arial Black')
.setColor('#FFFFFF')
.addText(`${message.client.users.cache.get(args[0]).tag}`, 200, 80)
.setTextFont('12pt Arial Black')    
.addText(`${hanaabout33}`, 15, 400)
.addImage(creditslogo, 540, 390, 25, 25)
.addText(credits33, 570, 409)
.addImage(fslogo, 540, 420, 25, 25)
.addText(rep33, 570, 439)
.addImage(marryimg, 540, 449, 25, 25)
.addText(married33, 570, 468)
.addImage(staff333, 260, 85, 30, 30)
.toBuffer()
return message.channel.send(`<@${message.author.id}>`, {files: [canvasimg22]})
if(message.guild.members.cache.filter(member => member.user.bot)) return db.set(`bot_${args[0]}`, '<:bot_tag:727867192435277845>')
if(message.guild.members.cache.filter(member => !member.user.bot)) db.set(`bot_${args[0]}`, '')
}
let hanastaff = await db.fetch(`hanastaff5_${user.id}`)
let rep = await db.fetch(`rep_${user.id}`)
let credits = await db.fetch(`credits_${user.id}`)
let vip = await db.fetch(`vip_${user.id}`)
let hanamarry = await db.fetch(`hanamarry5_${user.id}`)
let married = await db.fetch(`marry4_${user.id}`)
let hanaabout = await db.fetch(`about_${user.id}`)
let hanavipicon = await db.fetch(`hanavip5_${user.id}`) 
let hanabh = await db.fetch(`hanabh5_${user.id}`)
let hanadev = await  db.fetch(`hanadev5_${user.id}`)
let hp = await  db.fetch(`hanap5_${user.id}`)
if(hp === null) hp = ''
if(hanadev === null) hanadev = ''
if(hanavipicon === null) hanavipicon = ''
if(hanastaff === null) hanastaff = ''
if(hanamarry === null) hanamarry = ''
if(hanabh === null) hanabh = ''
if(credits === null) credits = 0
if(rep === null) rep = 0
if(vip === null) vip = 'Not Active'
if(married === null) married = 'Alone'
if(hanaabout === null) hanaabout = 'I\'m using Hana! You can change this using ht!aboutme'
if(user.bot === true) db.set(`bot_${user.id}`, '<:bot:729109597767598110>')
if(user.bot === false) db.set(`bot_${user.id}`, '')
let gguild3 = await db.fetch(`gguild_${user.id}`)
if(gguild3 === null) gguild3 = ''
if(user.id === message.guild.owner.id) db.set(`gowner_${user.id}`, ':crown:')
if(user.id != message.guild.owner.id) db.set(`gowner_${user.id}`, '')

let gowner343 = await db.fetch(`gowner_${user.id}`)
let bl32 = await db.fetch(`blist_${user.id}`)
let blreasom2 = await db.fetch(`blreason_${user.id}`)  
if(bl32 === '<:enabled:730821706347708437>') {
return message.say(`
<:blacklisted:729074968104534116> **| <@${message.author.id}>, <@${user.id}> is banned!**
:notepad_spiral: **| Reason:** \`${blreasom2}\``)
}
const avatar3 = await canvas.loadImage(user.displayAvatarURL({ format: 'jpg' }));  
if(married.length > 7) married = married.substring(0, 7) + "..."
if(hanaabout.length > 7) hanaabout = hanaabout.substring(0, 53) + `\n${hanaabout.substring(53, 80)}`
if(cu3 === null) cu3 = 0
let vip313 = ''
if(vip === 'Active'){
vip313 = await canvas.loadImage('https://i.imgur.com/Lx3ZbJV.png')}
let gguild432 = await db.fetch(`gguild_${user.id}`)
if(gguild432 === null) gguild432 = ''
const backid31 = await db.fetch(`backid_${user.id}`)
let dev33 = ''
if(hanadev === 1){
dev33 = await canvas.loadImage('https://cdn.glitch.com/2a652bc7-ce3d-43dd-b2a9-13c8f64cdb0e%2Fdev.png?v=1595283155434')
}
let marry321 = ''
if(hanamarry === ':ring:'){
marry321 = await canvas.loadImage('https://cdn.discordapp.com/attachments/671466567904526336/735492131841638470/emoji.png')
}
let staff3331 = ''
if(hanastaff === 1){
staff3331 = await canvas.loadImage('https://cdn.discordapp.com/attachments/734577186182267070/735561995863982080/purple_staff.png')
}
if(db.fetch(`back1_${user.id}`) === 1){
background = await canvas.loadImage('https://i.pinimg.com/originals/7a/7d/cf/7a7dcfa6474ec4cbfa81113eebe3c0dc.jpg')}
if(db.fetch(`nyancat_${user.id}`) === 1){
background = await canvas.loadImage('https://cdn.suwalls.com/wallpapers/meme/nyan-cat-9089-2560x1600.jpg')}
if(db.fetch(`back3_${user.id}`) === 1){
background = await canvas.loadImage('https://previews.123rf.com/images/belchonock/belchonock1706/belchonock170600259/79516749-cat-background.jpg')
}
if(db.fetch(`back4_${user.id}`) === 1){
background = await canvas.loadImage('https://3.bp.blogspot.com/-0AqXPk4sSr4/Ubc2OS7TWtI/AAAAAAAAA_w/SY9POQQXt28/s1600/Sky+Anime+Landscape+16.jpg')
}
if(db.fetch(`back5_${user.id}`) === 1){
background = await canvas.loadImage('https://cdnb.artstation.com/p/assets/images/images/019/170/273/large/ford-nguyen-city-street.jpg')
}
if(user.flags.toArray().includes('HOUSE_BRAVERY')) hype = await canvas.loadImage('https://cdn.discordapp.com/attachments/729065429326364752/746957852232384582/hypesquad_bravery.png')
if(user.flags.toArray().includes('HOUSE_BRILLIANCE')) hype = await canvas.loadImage('https://cdn.discordapp.com/attachments/729065429326364752/746957911112024126/hypesquad_brilliance.png')
if(user.flags.toArray().includes('HOUSE_BALANCE')) hype = await canvas.loadImage('https://cdn.discordapp.com/attachments/729065429326364752/746957881227608235/hypesquad_balance.png')
if(db.fetch(`lay1_${user.id}`) === 1) {
if(married.length > 11) married = married.substring(0, 11) + "..."
layout = await canvas.loadImage('https://i.imgur.com/0HbYwRX.png')
  if(backid === 1){
const back = await db.fetch(`background_${user.id}`)
const img = await canvas.loadImage(`${back}`)
if(backid === 1){
let mage1 = new Canvas(700, 490)
.addImage(img, 0, 0, 700, 490)
.addImage(layout, 0, 0) 
.addImage(hype, 260, 358, 25, 25)
.addImage(dev33, 170, 358, 25, 25)
.addImage(vip313, 230, 358, 25, 25)
.addImage(marry321, 140, 358, 25, 25)
.addImage(staff3331, 200, 358, 25, 25)
.setColor("#2C2F33")
.setShadowColor('rgba(22, 22, 22, 1)')
.setShadowOffsetY(5)
.setShadowBlur(10)
.addCircle(87, 367, 43)
.addCircularImage(avatar, 90, 367, 45, 45)
.setTextFont('14pt Arial Black')
.setColor('#FFFFFF')
.addText(`${user.username}`, 140, 340)
.setTextFont('12pt Arial Black')    
.addText(`${hanaabout}`, 15, 450)
.setTextFont('12pt Arial Black')
.addText(credits3, 620, 422)
.setTextFont('22pt Klavika Regular')
.addText(`Reps: ${rep3}`, 6, 40)
.setTextFont('13pt Arial Black') 
.setColor('#FF00FF')
.addText(married, 137, 408)
.toBuffer()
return message.channel.send(`<@${message.author.id}>`, {files: [mage1]})
}
}
let canvasimg = new Canvas(700, 490)
.addImage(background, 0, 0, 700, 490)
.addImage(layout, 0, 0) 
.addImage(hype, 260, 358, 25, 25)
.addImage(dev33, 170, 358, 25, 25)
.addImage(vip313, 230, 358, 25, 25)
.addImage(marry321, 140, 358, 25, 25)
.addImage(staff3331, 200, 358, 25, 25)
.setColor("#2C2F33")
.setShadowColor('rgba(22, 22, 22, 1)')
.setShadowOffsetY(5)
.setShadowBlur(10)
.addCircle(87, 367, 43)
.addCircularImage(avatar, 90, 367, 45, 45)
.setTextFont('14pt Arial Black')
.setColor('#FFFFFF')
.addText(`${user.username}`, 140, 340)
.setTextFont('12pt Arial Black')    
.addText(`${hanaabout}`, 15, 450)
.setTextFont('12pt Arial Black')
.addText(credits3, 620, 422)
.setTextFont('22pt Klavika Regular')
.addText(`Reps: ${rep3}`, 6, 40)
.setTextFont('13pt Arial Black') 
.setColor('#FF00FF')
.addText(married, 137, 408)
.toBuffer()
return message.channel.send(`<@${message.author.id}>`, {files: [canvasimg]})

}
if(backid31 === 1){
const back = await db.fetch(`background_${user.id}`)
const img = await canvas.loadImage(`${back}`)
if(backid31 === 1) {
let mage122 = new Canvas(700, 490)
.addImage(img, 0, 0, 700, 490)
.addImage(layout, 0, 0) 
.addImage(dev33, 230, 85, 30, 30)
.addImage(vip313, 290, 85, 30, 30)
.addImage(hype, 320, 90, 30, 30)
.addImage(marry321, 200, 85, 30, 30)
.setColor("#2C2F33")
.setShadowColor('rgba(22, 22, 22, 1)')
.setShadowOffsetY(5)
.setShadowBlur(10)
.addCircle(101, 95, 62)
.addCircularImage(avatar3, 100, 95, 64)
.setTextFont('18pt Arial Black')
.setColor('#FFFFFF')
.addText(`${user.tag}`, 200, 80)
.setTextFont('12pt Arial Black')    
.addText(`${hanaabout}`, 15, 400)
.addImage(creditslogo, creditslog)
.addText(credits, 570, 409)
.addImage(fslogo, checkingfs)
.addText(rep, 570, 439)
.addImage(marryimg, checkingm)
.addText(married, 570, 468)
.addImage(staff3331, 260, 85, 30, 30)
.toBuffer()
return message.channel.send(`<@${message.author.id}>`, {files: [mage122]})
}
}
let canvasimg22 = new Canvas(700, 490)
.addImage(background, 0, 0, 700, 490)
.addImage(layout, 0, 0) 
.addImage(dev33, 230, 85, 30, 30)
.addImage(vip313, 290, 85, 30, 30)
.addImage(hype, 320, 90, 30, 30)
.addImage(marry321, 200, 85, 30, 30)
.addImage(staff3331, 260, 85, 30, 30)
.setColor("#2C2F33")
.setShadowColor('rgba(22, 22, 22, 1)')
.setShadowOffsetY(5)
.setShadowBlur(10)
.addCircle(101, 95, 62)
.addCircularImage(avatar3, 100, 95, 64)
.setTextFont('18pt Arial Black')
.setColor('#FFFFFF')
.addText(`${user.tag}`, 200, 80)
.setTextFont('12pt Arial Black')    
.addText(`${hanaabout}`, 15, 400)
.addImage(creditslogo, creditslog)
.addText(credits, 570, 409)
.addImage(fslogo, checkingfs)
.addText(rep, 570, 439)
.addImage(marryimg, checkingm)
.addText(married, 570, 468)
.addImage(staff3331, 260, 85, 30, 30)
.toBuffer()
return message.channel.send(`<@${message.author.id}>`, {files: [canvasimg22]})

}}  
  





