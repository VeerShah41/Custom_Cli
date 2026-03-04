"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Command } = require("commander");
class CLI_Engine {
    constructor() {
        this.program = new Command();
    }
    registerCommands(commands) {
        commands.forEach((commandClass) => {
            const commandInstance = new commandClass(this.program);
            commandInstance.register();
        });
    }
    run() {
        this.program.parse();
    }
}
module.exports = CLI_Engine;
