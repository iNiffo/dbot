const discord = require("discord.js");
const botConfig =  require("./botconfig.json");

const client = new discord.Client();


client.on("ready", async () => {


    console.log(`${client.user.username} is online`);
    client.user.setActivity("Jonko smoken", {type: "COMPETING"});


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

if(command ===`${prefix}rogue`){
    return message.channel.send("Use code Fakka for 10% off your next rogue energy purchase you fucking pepega https://www.rogueenergy.com/?rfsn=4654754.8d8456&utm_source=refersion&utm_medium=affiliate&utm_campaign=4654754.8d8456");
}

if(command ===`${prefix}zebi`){
    return message.channel.send("Je kanker moeder");
}

if(command === `${prefix}help`){


var botEmbed  = new discord.MessageEmbed()
.setTitle("Help")
.setDescription(".socials")
.setColor("#0099ff")
.addField("Bot Information", client.user.username)
.setThumbnail("https://i.imgur.com/wSTFkRM.png")
.setImage("")

return message.channel.send(botEmbed);

}

})


















client.login("token");