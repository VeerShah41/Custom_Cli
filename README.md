# TSC Commander 🛠️

A fully functional CLI tool built with **Node.js + TypeScript** using an **Object-Oriented** architecture.

---

## 📦 Setup Instructions

### Prerequisites
- Node.js ≥ 18
- npm

### Install & Build

```bash
# Clone the repo
git clone https://github.com/VeerShah41/TSC_Commander.git
cd TSC_Commander

# Install dependencies
npm install

# Build (compile TypeScript → JavaScript)
npm run build
```

### Run directly (without global install)
```bash
node ./dist/index.js <command>
```

### Install globally
```bash
npm install -g .
mycli <command>
```

---

## 📋 Available Commands

### 👋 Greet
```bash
mycli greet <name>
```
Greets someone by name with colored output.

---

### 😄 Joke
```bash
mycli joke
```
Fetches a random joke from the [Official Joke API](https://official-joke-api.appspot.com/). Setup is printed first, punchline reveals after 3 seconds.

---

### 🐙 GitHub User Info
```bash
mycli github <username>
```
Fetches public profile data for any GitHub user via the [GitHub API](https://api.github.com).

---

### 💬 Random Quote
```bash
mycli quote
```
Fetches a random inspirational quote from the [ZenQuotes API](https://zenquotes.io).

---

### 🔢 Math Commands

| Command | Description |
|---|---|
| `mycli add <n1> <n2>` | Add two numbers |
| `mycli subtract <n1> <n2>` | Subtract n2 from n1 |
| `mycli multiply <n1> <n2>` | Multiply two numbers |
| `mycli divide <n1> <n2>` | Divide n1 by n2 |
| `mycli floor <n1> <n2>` | Floor division of n1 by n2 |
| `mycli ceil <n1> <n2>` | Ceiling division of n1 by n2 |
| `mycli mod <n1> <n2>` | Modulo of n1 by n2 |
| `mycli pow <base> <exp>` | Raise base to power of exp |
| `mycli sqrt <n>` | Square root of n |
| `mycli percent <value> <total>` | Value as % of total |

---

## 💡 Example Usage

```bash
# Greet
node ./dist/index.js greet Veer
# → Hello Veer! 👋

# Math
node ./dist/index.js add 10 5       # → 10 + 5 = 15
node ./dist/index.js pow 2 8        # → 2 ^ 8 = 256
node ./dist/index.js percent 3 4    # → 3 / 4 = 75.00%

# APIs
node ./dist/index.js joke           # → random joke
node ./dist/index.js github torvalds  # → GitHub profile info
node ./dist/index.js quote          # → inspirational quote
```

---

## 🏗️ Project Structure

```
TSC_Commander/
├── index.ts               # Entry point — registers all commands
├── cliEngine/
│   └── cliEngine.ts       # CLI Engine class (OOP core)
├── commands/
│   ├── greet.ts           # Greet command
│   ├── joke.ts            # Joke API command
│   ├── github.ts          # GitHub API command
│   ├── quote.ts           # Quote API command
│   └── math.ts            # All math commands
├── dist/                  # Compiled JS output
├── package.json
└── tsconfig.json
```

---

## 🔌 APIs Used

| API | Command | Endpoint |
|---|---|---|
| Official Joke API | `joke` | `https://official-joke-api.appspot.com/random_joke` |
| GitHub REST API | `github` | `https://api.github.com/users/<username>` |
| ZenQuotes API | `quote` | `https://zenquotes.io/api/random` |

---

## 🧰 Tech Stack

- **Node.js** — Runtime
- **TypeScript** — Language
- **Commander.js** — CLI framework
- **Axios** — HTTP requests
- **Chalk** — Colored terminal output
