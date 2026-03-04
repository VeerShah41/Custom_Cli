const jokes = [
    {
        setup: "Why do programmers prefer dark mode?",
        punchline: "Because light attracts bugs!",
    },
    {
        setup: "I told my wife she was drawing her eyebrows too high.",
        punchline: "She looked surprised.",
    },
    {
        setup: "Why did the developer go broke?",
        punchline: "Because he used up all his cache.",
    },
    {
        setup: "How many programmers does it take to change a light bulb?",
        punchline: "None — that's a hardware problem.",
    },
    {
        setup: "Why do Java developers wear glasses?",
        punchline: "Because they don't C#.",
    },
    {
        setup: "A SQL query walks into a bar, walks up to two tables and asks...",
        punchline: '"Can I join you?"',
    },
    {
        setup: "Why was the JavaScript developer sad?",
        punchline: "Because he didn't Node how to Express himself.",
    },
    {
        setup: "What's a pirate's favourite programming language?",
        punchline: "R! But their true love has always been the C.",
    },
    {
        setup: "Why did the function break up with the loop?",
        punchline: "It kept going around in circles and never returned anything.",
    },
    {
        setup: "I asked my dog what 2 minus 2 is.",
        punchline: "He said nothing.",
    },
];

class Joke {
    program: any;

    constructor(program: any) {
        this.program = program;
    }

    register() {
        this.program
            .command("joke")
            .description("Lighten up your mood with a random joke")
            .action(() => this.joking());
    }

    joking() {
        const joke = jokes[Math.floor(Math.random() * jokes.length)];
        console.log("\n😄 " + joke.setup);
        setTimeout(() => {
            console.log("👉 " + joke.punchline + "\n");
        }, 3000);
    }
}

module.exports = Joke;
