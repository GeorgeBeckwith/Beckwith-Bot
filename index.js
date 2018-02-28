var commando = require("discord.js-commando");
var beckwithBot = new commando.Client({
    owner: "You",
    commandPrefix: "!"
});

beckwithBot.login("NDA5MDk1ODU5MDE2NDMzNjY5.DVZ9bw.vYOnO6zhnD1MNJ-Lblf8x7YeQyg");

beckwithBot.registry.registerGroup("other", "Other");
beckwithBot.registry.registerCommandsIn(__dirname + "/commands")
beckwithBot.registry.registerDefaults();

process.on('unhandledRejection', err => console.error(`Uncaught Promise Rejection: \n${err.stack}`));

