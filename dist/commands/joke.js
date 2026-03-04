"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require("axios");
class Joke {
    constructor(program) {
        this.program = program;
        this.api = "https://official-joke-api.appspot.com/random_joke";
    }
    register() {
        this.program
            .command("joke")
            .description("Lighten up your mood with a random joke")
            .action(() => this.joking(this.api));
    }
    async joking(api) {
        try {
            const res = await axios.get(api);
            console.log(res.data.setup);
            setTimeout(() => {
                console.log(res.data.punchline);
            }, 3000);
        }
        catch (err) {
            console.log("Failed to fetch joke:", err.message);
        }
    }
}
module.exports = Joke;
