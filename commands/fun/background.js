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
      name: 'background',
      aliases: ['back'],
      memberName: 'background',
      group: 'misc',
      description: 'Pause the current playing song',
      guildOnly: true,
     hidden: true
    });
  }

async run(message, tools) {
const language = await db.fetch(`language_${message.guild.id}`)
let bl34 = await db.fetch(`blist_${message.author.id}`)
let blreasom = await db.fetch(`blreason_${message.author.id}`)
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
const { prefix } = require('../../config.json')
 const args = message.content.slice(prefix.length).trim().split(/ +/g);

let pages = ['**Name: Trees \nPrice: 10000 \nType: Uncommon \nTo buy react on `🛒`**', 
'**Name: Nyan Cat \nPrice: 25000 \nType: Rare \nTo buy react on `🛒`**', 
'**Name: Cats, Cats and Cats \nPrice: 5000 \nType: Common \nTo buy react on `🛒`**',
'**Name: The Paraside \nPrice: 50000 \nType: Epic \nTo buy react on `🛒`**',
'**Name: Tonight \nPrice: 25000 \nType: Rare \nTo buy react on `🛒`**'];
let page = 1;
let images = ['https://i.pinimg.com/originals/7a/7d/cf/7a7dcfa6474ec4cbfa81113eebe3c0dc.jpg',
 'https://cdn.suwalls.com/wallpapers/meme/nyan-cat-9089-2560x1600.jpg', 
'https://previews.123rf.com/images/belchonock/belchonock1706/belchonock170600259/79516749-cat-background.jpg', 
'https://3.bp.blogspot.com/-0AqXPk4sSr4/Ubc2OS7TWtI/AAAAAAAAA_w/SY9POQQXt28/s1600/Sky+Anime+Landscape+16.jpg', 
'https://cdnb.artstation.com/p/assets/images/images/019/170/273/large/ford-nguyen-city-street.jpg'];
let image = 1;
let prices = [ 10000, 
25000, 
5000,
50000,
25000,];
let price = 1;
let types = [ `back1`, 
`nyancat`, 
`back3`,
`back4`,
`back5`,];
let type = 1;
if(!args[1]){ 
const embed = new MessageEmbed()
.setColor('RANDOM')
.setTitle('🖼| Backgrounds')
.setFooter(`Page ${page} of ${pages.length}`)
.setDescription(pages[page-1])
.setImage(`${images[image-1]}`)
return message.channel.send(embed).then(msg => { 
msg.react('◀').then(r => {
msg.react('▶')
msg.react('🛒')
msg.react('✅')
 const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
const equipFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
const buyFilter = (reaction, user) => reaction.emoji.name === '🛒' && user.id === message.author.id;

const backwards = msg.createReactionCollector(backwardsFilter, {time: 120000});
const forwards = msg.createReactionCollector(forwardsFilter, {time: 120000})
const buybutton = msg.createReactionCollector(buyFilter, {time: 120000})
const equip = msg.createReactionCollector(equipFilter, {time: 120000});

backwards.on('collect',  r => {
if(page === 1) return;
page--;
image--;
price--;
type--;
embed.setDescription(pages[page-1])
embed.setFooter(`Page ${page} of ${pages.length}`)
embed.setImage(images[image-1])
msg.edit(embed)
})

forwards.on('collect',  r => {

if(page === pages.length) return;
page++;
image++;
price++;
type++;
embed.setDescription(pages[page-1])
embed.setImage(images[image-1])
embed.setFooter(`Page ${page} of ${pages.length}`)
msg.edit(embed)
})

buybutton.on('collect', r => {
if(db.fetch(`e${types[type-1]}_${message.author.id}`) === 1){
return message.say('You already bought this item')
}
if(db.fetch(`credits_${message.author.id}`) < prices[price-1]){
 return message.say('You dont have sufficient credits')
}
embed.setTitle('You sucessfully bought this background! (' + prices[price-1] + ')')
msg.reactions.removeAll()
db.set(`e${types[type-1]}_${message.author.id}`, 1)
db.set(`${types[type-1]}_${message.author.id}`, 1)
db.subtract(`credits_${message.author.id}`, prices[price-1])
console.log(`Set e${types[type-1]}`)
msg.edit(embed)

})
equip.on('collect', async r => {
 if(db.fetch(`e${types[type-1]}_${message.author.id}`) != 1){
  return message.say('You don\'t have this background.') }
 embed.setTitle('Background equipped with sucess!')
 db.set(`back1_${message.author.id}`, 0)
 db.set(`nyancat_${message.author.id}`, 0)
 db.set(`backid_${message.author.id}`, 0)
 db.set(`back4_${message.author.id}`, 0)
 db.set(`back3_${message.author.id}`, 0)
 db.set(`back5_${message.author.id}`, 0)
 db.set(`${types[type-1]}_${message.author.id}`, 1)
 msg.edit(embed)
})

})

})
}
if(args[1].includes('list')){
let back1 = ''
if(db.fetch(`eback1_${message.author.id}`) === 1) back1 = `<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
**Name: Trees \nType: Uncommon**`
let back2 = ''
if(db.fetch(`enyancat_${message.author.id}`) === 1) back2 = `<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
**Name: Nyan Cat \nType: Rare**`
let back3 = ''
if(db.fetch(`eback3_${message.author.id}`) === 1) back3 = `<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
**Name: Cats, Cats and Cats \nType: Common**`
let back4 = ''
if(db.fetch(`eback4_${message.author.id}`) === 1) back4 = `<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
**Name: The Paradise \nType: Epic**`
let back5 = ''
if(db.fetch(`eback5_${message.author.id}`) === 1) back5 = `<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
**Name: Tonight \nType: Rare**`
const embedlist = new MessageEmbed()
.setTitle('🖼 | Background List')
.setDescription(`${back1}
${back2}
${back3}
${back4}
${back5}`)
.setFooter('Your list contains all your backgrounds, if you want to see a image, find it on ht!background', message.member.user.displayAvatarURL({dynamic: true}))
.setColor('RANDOM')
.setThumbnail(message.member.user.displayAvatarURL({dynamic: true}))
message.say(embedlist)
}
}
}