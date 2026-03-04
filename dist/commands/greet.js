"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
class Greet_Command {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("greet <name>")
            .description("Greet someone by name")
            .action((name) => this.greet(name));
    }
    greet(name) {
        console.log(chalk.green(`Hello ${name}! 👋`));
    }
}
module.exports = Greet_Command;
