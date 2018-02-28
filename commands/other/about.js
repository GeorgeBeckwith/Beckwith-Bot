var commando = require("discord.js-commando")

class about extends commando.Command {
    constructor(client){
        super(client, {
            name: "about",
            group: "other",
            memberName: "about",
            description: "!about provides dons with info tings"
        });
    }
async run(message, args){
    message.reply("This bot was made by George Beckwith on the 4th of February 2018");
}

}
module.exports = about;