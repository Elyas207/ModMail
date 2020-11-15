const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('The Bot Is connected to uptimerobot.com'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
/*--------------------------------------------------------------------------------*/
const Discord = require("discord.js");


const bot = new Discord.Client();

const PREFIX = '/';

/////
bot.on("ready", () => {
  console.log(`Logged in! And Working...`);

  bot.user.setActivity('DM me to send a message to the Mods!');
});

bot.on('message', message => {
  console.log(message.content);
});

//// do not touch this code me, unless i need to change the custom status!

bot.on('message', message => {
  if (message.content === PREFIX + `test`) {
    message.author.send(`the bot is online and all commands should be working!`);

  }
});
//////////////////////////
bot.on('message', (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content.startsWith(PREFIX)) {
    return;

  }
  var msg = message.content;
  var A = message.author.username;
  var D = message.author.discriminator;
  let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(A + "||" + message.author.id)
    .setDescription(msg)
    .setFooter(A + "#" + D)
    .setTimestamp()
  if (message.channel.type == "dm") {
    bot.users.fetch("--This has been deleted for the privacy of the mods").then(user => user.send(embed).catch(err => console.log(err)))
  }

});

bot.on("message", (message) => {
  const arg = message.content.slice(PREFIX.length).split(" ");
  const args = message.content.slice(PREFIX.length + arg[0].length).split(" ").join(" ");
  if (message.author.bot) {
    return;
  }
  if (!message.content.startsWith(PREFIX)) {
    return;
  }
  var A = message.author.username;
  var D = message.author.discriminator;
  let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Moderator:" + A + D)
    .setDescription(args)
    .setTimestamp()
  if (message.channel.type == "dm") {
    bot.users.fetch(arg[0]).then(user => user.send(embed).catch(err => console.log(err)))
  }
});

bot.on('message', async message => {

  let Help = [PREFIX + 'Help']
  let foundInText = false;
  for (var i in Help) {
    if (message.content.toLowerCase().includes(Help[i].toLowerCase())) foundInText = true;
  }
  if (foundInText) {
    number = 5;
    imageNumber = Math.floor(Math.random() * number) + 1;
    message.channel.send('`Hi! I am SpaceAces ModMail bot!`');
    message.channel.send('`**How do i use the ModMail?**`');
    message.channel.send('`All you have to do is Dm me and i will send your message to the Mods!`');
    message.channel.send('`**There is something wrong with the bot**`');
    message.channel.send('`If there is a problem with the bot, then you can DM` @(ツ)#2355 `!`');
  }
});

//////////////////////////////////////////////////////////////////////
bot.login(process.env.TOKEN);
