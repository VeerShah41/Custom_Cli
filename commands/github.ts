const axios = require("axios");
const chalk = require("chalk");

class Github_Command {
    program: any;

    constructor(program: any) {
        this.program = program;
    }

    register() {
        this.program
            .command("github <username>")
            .description("Fetch public info about a GitHub user")
            .action((username: string) => this.fetchUser(username));
    }

    async fetchUser(username: string) {
        try {
            const res = await axios.get(`https://api.github.com/users/${username}`);
            const u = res.data;
            console.log(chalk.bold.cyan(`\n GitHub Profile: ${u.login}`));
            console.log(chalk.white(`  Name      : ${u.name || "N/A"}`));
            console.log(chalk.white(`  Bio       : ${u.bio || "N/A"}`));
            console.log(chalk.white(`  Location  : ${u.location || "N/A"}`));
            console.log(chalk.white(`  Repos     : ${u.public_repos}`));
            console.log(chalk.white(`  Followers : ${u.followers}`));
            console.log(chalk.white(`  Following : ${u.following}`));
            console.log(chalk.gray(`  Profile   : ${u.html_url}\n`));
        } catch (err: any) {
            if (err.response?.status === 404) {
                console.log(chalk.red(`User "${username}" not found on GitHub.`));
            } else {
                console.log(chalk.red("Failed to fetch GitHub user:", err.message));
            }
        }
    }
}

module.exports = Github_Command;
