const axios = require("axios");
const chalk = require("chalk");

class Quote_Command {
    program: any;

    constructor(program: any) {
        this.program = program;
    }

    register() {
        this.program
            .command("quote")
            .description("Get a random inspirational quote")
            .action(() => this.fetchQuote());
    }

    async fetchQuote() {
        try {
            const res = await axios.get("https://zenquotes.io/api/random");
            const q = res.data[0];
            console.log(chalk.bold.yellow(`\n  "${q.q}"`));
            console.log(chalk.gray(`      — ${q.a}\n`));
        } catch (err: any) {
            console.log(chalk.red("Failed to fetch quote:", err.message));
        }
    }
}

module.exports = Quote_Command;
