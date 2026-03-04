const chalk = require("chalk");

class Greet_Command {
  program: any;

  constructor(program: any) {
    this.program = program;
  }

  register() {
    this.program
      .command("greet <name>")
      .description("Greet someone by name")
      .action((name: string) => this.greet(name));
  }

  greet(name: string) {
    console.log(chalk.green(`Hello ${name}! 👋`));
  }
}

module.exports = Greet_Command;
