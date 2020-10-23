const discord = require("discord.js");
const botConfig =  require("./botconfig.json");

const client = new discord.Client();


client.on("ready", async () => {


    console.log(`${client.user.username} is online`);
    client.user.setActivity("Jonko smoken", {type: "LISTENING"});


});

client.on("message", async message => {

if(message.author.bot) return;

if(message.channel.type == "dm") return;

var prefix =  botConfig.prefix;

var messageArray = message.content.split(" ");

var command = messageArray[0];

if(command === `${prefix}social`){
    return message.channel.send(" https://www.youtube.com/channel/UCsE_8xw20vgI0zO4EPy8E8w " + " https://www.twitch.tv/jxshytv " + " https://www.snapchat.com/add/joshuapaton " + " https://instagram.com/josh__paton?igshid=1gdo044stqyf2 ");         
}

if(command === `${prefix}help`){


var botEmbed  = new discord.MessageEmbed()
.setTitle("Help")
.setDescription(".socials")
.setColor("#0099ff")
.addField("bot name", client.user.username)
.setThumbnail("https://i.imgur.com/wSTFkRM.png")
.setImage("")

return message.channel.send(botEmbed);

}

})


















client.login(process.env.TOKEN);