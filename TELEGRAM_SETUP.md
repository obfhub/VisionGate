# Telegram Bot Integration Setup

## Overview
The contact form on your website is now configured to send contact requests directly to your Telegram bot.

### Current Configuration
- **Bot Token:** `8653057580:AAHgG1JLU_r48-r9iRE4-EwPKKhnxlry-wU`
- **Chat ID:** Needs to be configured in `.env.local`

## Setup Instructions

### Step 1: Find Your Chat ID

1. Open Telegram and search for your bot (the one with token `8653057580:AAHgG1JLU_r48-r9iRE4-EwPKKhnxlry-wU`)
2. Send the `/start` command to the bot
3. Go to this URL in your browser:
   ```
   https://api.telegram.org/bot8653057580:AAHgG1JLU_r48-r9iRE4-EwPKKhnxlry-wU/getUpdates
   ```
4. Look for the `"chat": {"id": YOUR_CHAT_ID}` in the response
5. Copy your chat ID (it will be a negative number like `-1001234567890`)

### Step 2: Update .env.local

The `.env.local` file has already been created in the project root. Update it with your actual chat ID:

```bash
# Telegram Bot Configuration
VITE_TELEGRAM_CHAT_ID=-1001234567890  # Replace with your actual chat ID
```

### Step 3: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   # or
   base44 dev
   ```

2. Fill out the contact form on your website
3. Click "Trimite cererea" (Send Request)
4. Check your Telegram to confirm you received the message

## What Gets Sent to Telegram

When someone submits the contact form, the following information is sent to your Telegram bot:

```
📝 Noua cerere de contact

👤 Nume: [User's name]
🏢 Companie: [Company name]
📱 Telefon: [Phone number]
📧 Email: [Email address]
👥 Nr. Angajați: [Employee range]
🔧 Integrare: [Integration type]
📄 Mesaj: [Project details]
```

## Files Modified

- **`.env.local`** - Created with Telegram chat ID configuration
- **`src/components/sections/Contact.jsx`** - Updated `handleSubmit` function to send data to Telegram
- **`src/components/hero/Hero.jsx`** - Updated contact icons with actual phone/email

## Security Notes

⚠️ **Important:** The bot token and chat ID are sensitive. Keep `.env.local` out of version control:

1. The file is already in `.gitignore` (if not, add it):
   ```bash
   echo ".env.local" >> .gitignore
   ```

2. Never commit credentials to git
3. When deploying, configure environment variables through your hosting platform

## Troubleshooting

### Messages not arriving?
1. Check that the chat ID is correct in `.env.local`
2. Verify the bot token is active
3. Check browser console for errors (F12)
4. Try sending a test message directly to the bot's getUpdates endpoint

### Wrong chat ID format?
- Chat IDs for groups are negative numbers (e.g., `-1001234567890`)
- Personal chat IDs can be positive or negative

### Need to change the chat ID?
Simply update the `VITE_TELEGRAM_CHAT_ID` value in `.env.local` and restart your dev server.

## Production Deployment

When deploying to production (via Base44):

1. Set the environment variable `VITE_TELEGRAM_CHAT_ID` through your hosting platform's dashboard
2. Do NOT add `.env.local` to your repository
3. The bot will automatically use the production chat ID

---

For more help with Telegram Bot API: https://core.telegram.org/bots/api
