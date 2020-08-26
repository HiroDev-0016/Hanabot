const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db')
const { getMember, formatDate } = require("../../functions.js");
const ms = require('ms')
module.exports = class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'shards',
      aliases: ['bot-info', 'st'],
      memberName: 'status',
      group: 'misc',
      description: 'Shows bot status',
      guildOnly: true
    });
  }

async run(message, client) {



   /* Monitor Status de Shards - Discord Bots 
*
* Dev: GM#3078 (arturdealcantara)
* Propósito: Mostrar o status dos shards separadamente, tendo em vista saber através do ID, tempo de execução, memória Ram usada, ping, quantidade de usuários e guilds.
* OBS.: A tabela suporta apenas 6 colunas.
* Outros.: Foi desenvolvido para o ZabbiX, um excelente bot para discord.
* Informações adicionais: Me procura no meu servidor, link na bio do Github.
*/

// Package usado para criar a TABELA "npm i ascii-table".
const AsciiTable = require('ascii-table'),
	// Defina um título se quiser, se não, deixe vazio ().
	table = new AsciiTable('Hana Shards'),
	unit = ['', 'K', 'M', 'G', 'T', 'P']


	/* 
	* Título da COLUNA;
	* São suportados 6 colunas por tabela;
	* Se quiser, pode por paginação.
	*/

	table.setHeading('ID', 'Ping', 'Guilds', 'Users')

	// Necessário para centralizar o Row na tabela
	table.setAlign(0, AsciiTable.CENTER)
	table.setAlign(1, AsciiTable.CENTER)
	table.setAlign(2, AsciiTable.CENTER)
	table.setAlign(3, AsciiTable.CENTER)
	table.setAlign(4, AsciiTable.CENTER)
	table.setAlign(5, AsciiTable.CENTER)

	// Não é necessário essa próxima linha, a tabela já vem pronta.
	table.setBorder('|', '-', '+', '+')

	// Busca por algumas informações, para preencher a tabela.
	const uptime = await message.client.shard.broadcastEval('this.uptime'),
		ping = await message.client.shard.broadcastEval('Math.round(this.ws.ping)'),
		guilds = await message.client.shard.fetchClientValues('guilds.cache.size'),
		channels = await message.client.shard.fetchClientValues('channels.cache.size'),

		// Note que não fiz o tratamento de remover os bots da contagem, no caso é o total de usuários + bots.
		users = await message.client.shard.fetchClientValues('users.cache.size')

	for (let i = 0; i < message.client.options.shardCount; i++) {

		// Cada coluna é preenchida com uma informação, então cada informação deve estar no lugar correto, pode separar as colunas por ',' (vírgula).
		table.addRow(i, '~' + Math.round(ping[i]) , guilds[i].toLocaleString('pt-BR'), users[i].toLocaleString('pt-BR'))
	}
	/* 
	* Para que seja criado os Rows (linhas da tabela), é necessário o FOR, passando o parâmetro com o máx '< (menor que) shardCount'.
	* Para que crie exatamente a quantidade correta de Rows.
	*/


		// Cada coluna é preenchida com uma informação, então cadt-BR'))


	//O reduce busca reduzir um array. Ele iterará por cada elemento dessa lista com o objetivo de ao final gerar um único valor.
	const botGuilds = guilds.reduce((prev, val) => prev + val),
		botUsers = users.reduce((prev, val) => prev + val),
		ping_media = ping.reduce((prev, val) => prev + val),
		media = ping_media / message.client.options.shardCount
	let bytesToSize = (input, precision) => {

	let index = Math.floor(Math.log(input) / Math.log(1024))
	if (unit >= unit.length) return input + 'B'
	return (input / Math.pow(1024, index)).toFixed(precision) + ' ' + unit[index] + 'B'
};
	// Aqui definimos um Row vazio ou complementado por algum simbolo.
	table.addRow('______', '______', '______', '______')

	// Essa é a última linha da TABELA, então seria o resultado da soma ou média dos valores mostrados las linhas anteriores.
	table.addRow('TOTAL', '-', botGuilds.toLocaleString('pt-BR'), botUsers.toLocaleString('pt-BR'))

	/* 
	*Essa parte é a mais esperada, que envia de fato a TABELA, no canal onde foi usado o comando. 
	*NOTA: "Eu particularmente, tentei por em embed, não funciona bem, fica quebrado."
	* O "prolog", nada mais é que um Markdown (Markdown é uma linguagem simples de marcação originalmente criada por John Gruber e Aaron Swartz. Markdown converte seu texto em HTML válido)  
	*/
	return message.channel.send(`\`\`\`prolog
${table.toString()}\`\`\``)

	// É necessário limpar os Rows, sempre, depois de usar o comando, caso não limpe, as informações ficam se sobrepondo.
	table.clearRows()


// Arrow Function que converterá os Byts usados em "KB (Kilobytes), MB (Megabyte), GB (Gigabyte), TB (Terabyte), PB (Petabyte)"


let hfserver = await db.fetch(`vipserver_${message.guild.id}`)
let hemblem = await db.fetch(`hanaserver_${message.guild.id}`)
if(hfserver === null) hfserver = 'Not Active'
if(hemblem === null) hemblem = ''
db.add(`cu_${message.author.id}`, 1)
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
const joined = formatDate(message.client.user.createdAt);
let user = `${message.client.user.id}`
let user2 = `${message.author.id}`
const member2 = formatDate(message.guild.member(user).joinedAt);
const member = getMember(message, args.join(" "));

const joineds = formatDate(message.client.user.joinedTimestamp);
console.log(`Ms: ${ms(joined)}`)
var d = new Date,
dformat = [d.getMonth()+1,
       d.getDate(),
       d.getFullYear()].join('/')+' '+
      [d.getHours(),
       d.getMinutes(),
       d.getSeconds()].join(':');
if(language === 1){

const totalOffline = message.guild.members.cache.filter(m => m.user.presence.status == "offline").size
const totalIdle = message.guild.members.cache.filter(m => m.user.presence.status == "idle").size
const bots = message.guild.members.cache.filter(member => member.user.bot).size;
const users = message.guild.members.cache.filter(member => !member.user.bot).size;
const totaldnd = message.guild.members.cache.filter(m => m.user.presence.status == "dnd").size
const totalOnline = message.guild.members.cache.filter(m => m.user.presence.status == "online").size
const voiceChannelCount = message.guild.channels.cache.filter(c => c.type === 'voice').size
const ChannelCount = message.guild.channels.cache.filter(c => c.type === 'text').size
var OneDay = message.client.user.createdAt.getTime()
let days = Math.floor(message.author.createdAt / 8.64e+7) % 50;
let hours = Math.floor(message.author.createdAt / 3600000) % 24; 
let minutes = Math.floor(message.author.createdAt / 60000) % 60; 
let seconds = Math.floor(message.author.createdAt  / 1000) % 60; 
const embedpause = new Discord.MessageEmbed()
   .setThumbnail(`${message.client.user.displayAvatarURL({dynamic: true})}`)
   .setTitle('Página 1 | Bot Status')
   .setDescription(`

<:hana_arrow:729074687145017435> **Meu nome**: ${message.client.user.tag}
<:info:729075450315407507> **ID**: ${message.client.user.id}
<:update_server:733109979997012030> **Servidores**: ${message.client.guilds.cache.size}
<:channel:733109261474725937> **Canais**: ${message.client.channels.cache.size}
<:blacklisted:729074968104534116> **Usúarios**: ${message.client.users.cache.size} 
:date: **Fui criado na data**: ${joined}
<:join_arrow:733368342131245146> **Eu entrei aqui no dia:** ${member2}
<:owner:733110769658364015> **Meu dono**: <@${message.client.users.cache.get('700805591094001692').id}> (${message.client.users.cache.get('700805591094001692').id})
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>

1️⃣ **Pagina Atual**: Mostra informações do bot
2️⃣ Mostra informações do servidor
3️⃣ Mostra suas informações`)
if (message.guild.me.voice.channel != null) {
embedpause.addField(`Conectado no canal de voz:`, `${message.guild.me.voice.channel.name}`)

}
let regionw = `${message.guild.region}`
if(message.guild.region === 'us-central') regionw = ':flag_us: EUA Central'
if(message.guild.region === 'us-east') regionw = ':flag_us: EUA (Leste)'
if(message.guild.region === 'us-west') regionw = ':flag_us: EUA (Oeste)'
if(message.guild.region === 'us-south') regionw = ':flag_us: EUA (Sul)'
if(message.guild.region === 'india') regionw = ':flag_in: índia'
if(message.guild.region === 'sydney') regionw = ':flag_au: Sydney'
 if(message.guild.region === 'brazil') regionw = ':flag_br: Brasil'
 if(message.guild.region === 'europe') regionw = ':flag_eu: Europa'
 if(message.guild.region === 'russia') regionw = ':flag_ru: Rússia'
 if(message.guild.region === 'hongkong') regionw = ':flag_hk: Hong-Kong'
 if(message.guild.region === 'singapore') regionw = ':flag_sg: Singapura'
 if(message.guild.region === 'japan') regionw = ':flag_jp: Japão'
 if(message.guild.region === 'southafrica') regionw = ':flag_za: África do Sul'
const embed2 = new MessageEmbed()
.setTitle('Página 2 | Servidor')
.setThumbnail(`${message.guild.iconURL()}`)
.setDescription(`<:hana_arrow:729074687145017435> Nome: ${message.guild.name}
<:info:729075450315407507> ID: ${message.guild.id}
:globe_with_meridians: Região: ${regionw}
<:channel:733109261474725937> Canais: ${voiceChannelCount + ChannelCount} - 🗣 (${voiceChannelCount}) 💬 (${ChannelCount})
<:owner:733110769658364015> Dono(a): ${message.guild.owner}
<:update_member:733366682562723840> Membros: ${message.guild.members.cache.size}
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
<:vip:729076045843529828> Hana Premium For Servers: ${hfserver}
<:hypesquad:729075047565885561> Emblemas:
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>

1️⃣ Mostra informações do bot
2️⃣ **Pagina Atual**: Mostra informações do servidor
3️⃣ Mostra suas informações`)
const member23 = formatDate(message.guild.member(user2).joinedAt);
const member223 = formatDate(message.guild.member(user2).createdAt);
const member233 = message.guild.member(user2)
let apelido = message.guild.members.cache.get(`${message.author.id}`).nickname
if(apelido === 'undefined' || apelido === null) apelido = 'Nenhum Apelido'
        let roles = member233.roles.cache
            .filter(r => r.id !== message.guild.id)
            .map(r => r).join(", ") || 'none';
   let roles2 = member233.roles.cache
            .filter(r => r.id !== message.guild.id)

const embed3 = new MessageEmbed()
.setTitle('Página 3 | Suas informações')
.setThumbnail(`${message.author.displayAvatarURL({dynamic: true})}`)
.setDescription(`<:users:733373429788704778> **Nome:** ${message.guild.name}
<:settings:729077133472694323> **Apelido:** ${apelido}
<:info:729075450315407507> **ID:** ${message.guild.id}
<:update_member:733366682562723840> **Data de entrada (Discord):** ${member223}
:date: **Data de entrada (Servidor):** ${member23}
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
<:create_role:733380744486977766> **Cargos (${roles2.size}):** ${roles}
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>

1️⃣ Mostra informações do bot
2️⃣ Mostra informações do servidor
3️⃣ **Pagina Atual**: Mostra suas informações`)

return message.say(embedpause).then(msg => {
msg.react('1️⃣')
msg.react('2️⃣')
msg.react('3️⃣')

       let filtro = (reaction, usuario) => reaction.emoji.name === "2️⃣" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro, {max: 3, time: 60000})

coletor.on("collect", cp => {
     msg.edit(embed2)
})
       let filtro2 = (reaction, usuario) => reaction.emoji.name === "1️⃣" && usuario.id === message.author.id;
        let coletor2 = msg.createReactionCollector(filtro2, {max: 3, time: 60000})

coletor2.on("collect", cp => {
     msg.edit(embedpause)
})
       let filtro3 = (reaction, usuario) => reaction.emoji.name === "3️⃣" && usuario.id === message.author.id;
        let coletor3 = msg.createReactionCollector(filtro3, {max: 3, time: 60000})

coletor3.on("collect", cp => {
     msg.edit(embed3)
})
})
}
const { CommandoClient } = require('discord.js-commando');
const totalOffline = message.guild.members.cache.filter(m => m.user.presence.status == "offline").size
const totalIdle = message.guild.members.cache.filter(m => m.user.presence.status == "idle").size
const bots = message.guild.members.cache.filter(member => member.user.bot).size;

const totaldnd = message.guild.members.cache.filter(m => m.user.presence.status == "dnd").size
const totalOnline = message.guild.members.cache.filter(m => m.user.presence.status == "online").size
const voiceChannelCount = message.guild.channels.cache.filter(c => c.type === 'voice').size
const ChannelCount = message.guild.channels.cache.filter(c => c.type === 'text').size
const embedpause = new Discord.MessageEmbed()
   .setThumbnail(`${message.client.user.displayAvatarURL({dynamic: true})}`)
   .setTitle('Página 1 | Bot Status')
   .setDescription(`

<:hana_arrow:729074687145017435> **My name**: ${message.client.user.tag}
<:info:729075450315407507> **ID**: ${message.client.user.id}
<:update_server:733109979997012030> **Guilds**: ${message.client.guilds.cache.size}
<:channel:733109261474725937> **Channels**: ${message.client.channels.cache.size}
<:blacklisted:729074968104534116> **Users**: ${message.client.users.cache.size} 
:date: **I was created in the date**: ${joined}
<:join_arrow:733368342131245146> **I joined here in the date:** ${member2}
<:owner:733110769658364015> **My owner**: <@${message.client.users.cache.get('700805591094001692').id}> (${message.client.users.cache.get('700805591094001692').id})
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>

1️⃣ **Actual Page**: Shows bot info
2️⃣ Shows server info
3️⃣ Show your info`)
if (message.guild.me.voice.channel != null) {
embedpause.addField(`Connected in:`, `${message.guild.me.voice.channel.name}`)

}
let regionw = `${message.guild.region}`
if(message.guild.region === 'us-central') regionw = ':flag_us: US Central'
if(message.guild.region === 'us-east') regionw = ':flag_us: US East'
if(message.guild.region === 'us-west') regionw = ':flag_us: US West'
if(message.guild.region === 'us-south') regionw = ':flag_us: US South'
if(message.guild.region === 'india') regionw = ':flag_in: india'
if(message.guild.region === 'sydney') regionw = ':flag_au: Sydney'
 if(message.guild.region === 'brazil') regionw = ':flag_br: Brazil'
 if(message.guild.region === 'europe') regionw = ':flag_eu: Europe'
 if(message.guild.region === 'russia') regionw = ':flag_ru: Russia'
 if(message.guild.region === 'hongkong') regionw = ':flag_hk: Hong-Kong'
 if(message.guild.region === 'singapore') regionw = ':flag_sg: Singapore'
 if(message.guild.region === 'japan') regionw = ':flag_jp: Japan'
 if(message.guild.region === 'southafrica') regionw = ':flag_za: South Africa'
const embed2 = new MessageEmbed()
.setTitle('Página 2 | Servidor')
.setThumbnail(`${message.guild.iconURL()}`)
.setDescription(`<:hana_arrow:729074687145017435> Name: ${message.guild.name}
<:info:729075450315407507> ID: ${message.guild.id}
:globe_with_meridians: Region: ${regionw}
<:channel:733109261474725937> Channels: ${voiceChannelCount + ChannelCount} - 🗣 (${voiceChannelCount}) 💬 (${ChannelCount})
<:owner:733110769658364015> Owner: ${message.guild.owner}
<:update_member:733366682562723840> Members: ${message.guild.members.cache.size}
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
<:vip:729076045843529828> Hana Premium For Servers: ${hfserver}
<:hypesquad:729075047565885561> Emblems:
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>

1️⃣ Shows bot info
2️⃣ **Actual Page**: Shows server info
3️⃣ Show your info`)
const member23 = formatDate(message.guild.member(user2).joinedAt);
const member223 = formatDate(message.guild.member(user2).createdAt);
const member233 = message.guild.member(user2)
let apelido = message.guild.members.cache.get(`${message.author.id}`).nickname
if(apelido === 'undefined' || apelido === null) apelido = 'Nenhum Apelido'
        let roles = member233.roles.cache
            .filter(r => r.id !== message.guild.id)
            .map(r => r).join(", ") || 'none';
   let roles2 = member233.roles.cache
            .filter(r => r.id !== message.guild.id)

const embed3 = new MessageEmbed()
.setTitle('Página 3 | About you')
.setThumbnail(`${message.author.displayAvatarURL({dynamic: true})}`)
.setDescription(`<:users:733373429788704778> **Name:** ${message.guild.name}
<:settings:729077133472694323> **Nickname:** ${apelido}
<:info:729075450315407507> **ID:** ${message.guild.id}
<:update_member:733366682562723840> **Join date (Discord):** ${member223}
:date: **Join date (Server):** ${member23}
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
<:create_role:733380744486977766> **Roles (${roles2.size}):** ${roles}
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>

1️⃣ Shows bot info
2️⃣ Shows server info
3️⃣ **Actual Page**: Show your info`)

return message.say(embedpause).then(msg => {
msg.react('1️⃣')
msg.react('2️⃣')
msg.react('3️⃣')

       let filtro = (reaction, usuario) => reaction.emoji.name === "2️⃣" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro, {max: 3, time: 60000})

coletor.on("collect", cp => {
     msg.edit(embed2)
})
       let filtro2 = (reaction, usuario) => reaction.emoji.name === "1️⃣" && usuario.id === message.author.id;
        let coletor2 = msg.createReactionCollector(filtro2, {max: 3, time: 60000})

coletor2.on("collect", cp => {
     msg.edit(embedpause)
})
       let filtro3 = (reaction, usuario) => reaction.emoji.name === "3️⃣" && usuario.id === message.author.id;
        let coletor3 = msg.createReactionCollector(filtro3, {max: 3, time: 60000})

coletor3.on("collect", cp => {
     msg.edit(embed3)
})
})
}
}
