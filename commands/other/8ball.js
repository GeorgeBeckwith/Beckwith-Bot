const commando = require("discord.js-commando");

class eightball extends commando.Command {
    constructor(client) {
        super(client, {
            name: "8ball",
            group: "other",
            memberName: "eightball",
            description: "!8ball provides a random answer upon users request"
        });
    }
    async run(message, args){
        var answers = [
            "yes", "no", "maybe"
        ];
        var answer = answers[Math.floor(Math.random() * answers.length)];
        message.reply(answer.toString())

    }
}
module.exports = eightball;