# 🌟 Mia Reminder Bot

A powerful Discord bot that provides daily reminders for your Slack attendance notifications and offers seamless Docker integration. Built with Node.js and Discord.js to ensure you never forget to report your attendance! 🚀

---

## 📜 Features

- **Daily Reminders:**:
  - **09:02 AM**: Reminder to submit your attendance in Slack.
  - **02:02 PM**: Afternoon reminder not to forget your Slack notification.

- **Test Commands:**:
  - `!mia`: Test Commands:
  - `!test-9`: Test for the morning reminder.
  - `!test-14`: Test for the afternoon reminder.

- **Docker Support:**:
  - Easy deployment with **Docker Compose**.
  - Automatic updates with the **`latest`-Tagging** strategy.

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/thyrail/mia-reminder-bot.git
cd mia-reminder-bot
```

### 2️⃣ Install Dependencies
```bash
pnpm install
```

### 3️⃣ Create the `.env` File
```env
DISCORD_TOKEN=dein_discord_bot_token
DISCORD_MIA_BOT_CHANNEL_ID=deine_channel_id
DISCORD_TESTS_CHANNEL_ID=deine_tests_channel_id
```

---

## 🐳 **Docker Setup**

### 1️⃣ Build the Docker Image

```bash
docker compose build`
```

### 2️⃣ Start the Container

```bash
docker compose up -d
```
### 3️⃣ Stop the Container

```bash
docker compose down
```

---

## 🖌️ Style Guidelines

- **Qualität:** Formatiere den Code mit `Prettier` und prüfe ihn mit `ESLint`.
- **Naming Conventions:** Naming Conventions: Verwende klare und prägnante Variablennamen.

--- 

## 🌐 Technologien

- **Discord.js:** Integration with the Discord API.
- **Node.js:** JavaScript runtime environment.
- **Docker:** Containerized deployment.
- **Cron:** Scheduled tasks.

---

## 🧩 To-Do

- 🔲 Ignore public holidays.
- 🔲 Add more customizable notification styles.
- 🔲 Support for multiple languages.

---

## 📄 License

### This project is licensed under the [MIT-License](LICENSE).
