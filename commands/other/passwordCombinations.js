const commando = require("discord.js-commando");

class passwordCombinations extends commando.Command {
    constructor(client) {
        super(client, {
            name: "passwordcombinations",
            group: "other",
            memberName: "password combinations",
            description: "!passwordCombinations allows the user to find the amount of possible password combinations for a certain length of password"
        });

        client.on("message", message => {
            let userInput = message.content
            var passwordLength = userInput.substr(21, 23);
            var char = (10+26+26+35);
            var total = Math.pow(char, passwordLength);
            total.toLocaleString('en', {maximumSignificantDigits : 21})

            message.channel.send("The total amount of combinations is " + total);
        });
    }
}
module.exports = passwordCombinations;