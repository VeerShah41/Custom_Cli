"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
class Math_Commands {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("add <n1> <n2>")
            .description("Add two numbers")
            .action((n1, n2) => {
            const result = Number(n1) + Number(n2);
            console.log(chalk.cyan(`${n1} + ${n2} = `) + chalk.bold(result));
        });
        this.program
            .command("multiply <n1> <n2>")
            .description("Multiply two numbers")
            .action((n1, n2) => {
            const result = Number(n1) * Number(n2);
            console.log(chalk.cyan(`${n1} × ${n2} = `) + chalk.bold(result));
        });
        this.program
            .command("divide <n1> <n2>")
            .description("Divide n1 by n2")
            .action((n1, n2) => {
            if (Number(n2) === 0) {
                console.log(chalk.red("Cannot divide by zero"));
                return;
            }
            const result = Number(n1) / Number(n2);
            console.log(chalk.cyan(`${n1} ÷ ${n2} = `) + chalk.bold(result));
        });
        this.program
            .command("subtract <n1> <n2>")
            .description("Subtract n2 from n1")
            .action((n1, n2) => {
            const result = Number(n1) - Number(n2);
            console.log(chalk.cyan(`${n1} - ${n2} = `) + chalk.bold(result));
        });
        this.program
            .command("floor <n1> <n2>")
            .description("Floor division of n1 by n2")
            .action((n1, n2) => {
            const result = Math.floor(Number(n1) / Number(n2));
            console.log(chalk.cyan(`floor(${n1} / ${n2}) = `) + chalk.bold(result));
        });
        this.program
            .command("ceil <n1> <n2>")
            .description("Ceiling division of n1 by n2")
            .action((n1, n2) => {
            const result = Math.ceil(Number(n1) / Number(n2));
            console.log(chalk.cyan(`ceil(${n1} / ${n2}) = `) + chalk.bold(result));
        });
        this.program
            .command("mod <n1> <n2>")
            .description("Modulo of n1 by n2")
            .action((n1, n2) => {
            const result = Number(n1) % Number(n2);
            console.log(chalk.cyan(`${n1} % ${n2} = `) + chalk.bold(result));
        });
        this.program
            .command("pow <base> <exp>")
            .description("Raise base to the power of exp")
            .action((base, exp) => {
            const result = Math.pow(Number(base), Number(exp));
            console.log(chalk.cyan(`${base} ^ ${exp} = `) + chalk.bold(result));
        });
        this.program
            .command("sqrt <n>")
            .description("Square root of n")
            .action((n) => {
            const result = Math.sqrt(Number(n));
            console.log(chalk.cyan(`√${n} = `) + chalk.bold(result));
        });
        this.program
            .command("percent <value> <total>")
            .description("Calculate value as a percentage of total")
            .action((value, total) => {
            const result = (Number(value) / Number(total)) * 100;
            console.log(chalk.cyan(`${value} / ${total} = `) + chalk.bold(result.toFixed(2) + "%"));
        });
    }
}
module.exports = Math_Commands;
