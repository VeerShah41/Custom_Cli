const axios = require("axios");

class Joke {
    api: string;
    program: any;

    constructor(program: any) {
        this.program = program;
        this.api = "https://official-joke-api.appspot.com/random_joke";
    }

    register() {
        this.program
            .command("joke")
            .description("Lighten up your mood with a random joke")
            .action(() => this.joking(this.api));
    }

    async joking(api: string) {
        try {
            const res = await axios.get(api);
            console.log(res.data.setup);
            setTimeout(() => {
                console.log(res.data.punchline);
            }, 3000);
        } catch (err: any) {
            console.log("Failed to fetch joke:", err.message);
        }
    }
}

module.exports = Joke;
