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

var token = botConfig.token.toString; // Doe hier iets mee idk. Ik heb ook alle messages
                                      // mooier gemaakt.

var messageArray = message.content.split(" ");

var command = messageArray[0];

if(command == `${prefix}purge`){

const purgeArgs = message.content.split(' ').slice(1);
const amount = purgeArgs.join(' '); // Vriend als je kan doe amount + 1 zodat het die command zelf
                                    // niet meetelt! Elke keer als ik dat probeer gooit ie gare error
                                    // die niet klopt.

if (!amount) return message.reply('You haven\'t given an amount of messages which should be deleted!');
if (isNaN(amount)) return message.reply('The amount parameter isn\'t a number!');

if (amount > 100) return message.reply('You can\'t delete more than 100 messages at once!');
if (amount < 1) return message.reply('You have to delete at least 1 message!');

await message.channel.messages.fetch({ limit: amount }).then(messages => {
message.channel.bulkDelete(messages)

});

}

if(command === `${prefix}twitch`){

var botEmbedTwitch = new discord.MessageEmbed()
.setTitle("Twitch")
.addField("Temz", "https://twitch.tv/temzjk", false)
.addField("Josh", "https://twitch.tv/JxshyTV", false)
.addField("Tape", "https://twitch.tv/TapeEU", false)
.setThumbnail("https://cdn0.iconfinder.com/data/icons/social-network-7/50/16-512.png")

return message.channel.send(botEmbedTwitch);

}

if(command === `${prefix}socials`){

var botEmbedSocials = new discord.MessageEmbed()
.setTitle("Socials")
.addField("Josh",
`Youtube: [click here](https://www.youtube.com/channel/UCsE_8xw20vgI0zO4EPy8E8w)
Twitch: [click here](https://www.twitch.tv/jxshytv)
Snapchat: [click here](https://www.snapchat.com/add/joshuapaton)
Instagram: [click here](https://instagram.com/josh__paton?igshid=1gdo044stqyf2)`, false)

return message.channel.send(botEmbedSocials);

}

if(command ===`${prefix}rogue`){
    return message.channel.send("Use code Fakka for 10% off your next rogue energy purchase you fucking pepega https://www.rogueenergy.com/?rfsn=4654754.8d8456&utm_source=refersion&utm_medium=affiliate&utm_campaign=4654754.8d8456");
}

if(command ===`${prefix}zebi`){
    return message.channel.send("Je kanker moeder");
}

if(command === `${prefix}help`){


var botEmbedHelp  = new discord.MessageEmbed()
.setTitle("Help")
.setDescription(".socials")
.setColor("#0099ff")
.addField("Bot Information", client.user.username)
.setThumbnail("https://i.imgur.com/wSTFkRM.png")
.setImage("")

return message.channel.send(botEmbedHelp);

}
})


















client.login("NzY5MzI4NDI0MjQ1NTI2NTg4.X5Na7Q.tbTIx2ioqTl5dA6gP-DYQHoNNtQ"); // mijn bot token btw
                                                                             // je had nooit een
                                                                             // variable gemaakt
                                                                             // om hier te zetten
                                                                             // en zelfs dat werkte
                                                                             // niet dus veel suc6
                                                                             // met config. ik heb
                                                                             // die token ding in
                                                                             // config gelaten en token
                                                                             // variable gemaakt.