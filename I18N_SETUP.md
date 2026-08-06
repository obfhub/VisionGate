# Internationalization (i18n) Setup

## Overview
Your app now supports **Romanian (RO)** and **Russian (RU)** languages using **i18next** and **react-i18next**.

## Features
- ✅ Language switcher component in the top-right corner
- ✅ Language preference saved to localStorage
- ✅ Automatic language detection from localStorage
- ✅ All major text translated (Hero, Contact Form, Buttons, etc.)
- ✅ Telegram messages sent in the current language

## How to Switch Languages

1. **Click the language switcher** in the top-right corner (RO / RU)
2. The language preference is **automatically saved** to your browser
3. When you return, your **preferred language is remembered**

## File Structure

```
src/
├── i18n/
│   ├── config.js              # i18n configuration
│   └── locales/
│       ├── ro.json            # Romanian translations
│       └── ru.json            # Russian translations
├── components/
│   ├── LanguageSwitcher.jsx    # Language picker component
│   ├── hero/
│   │   └── Hero.jsx            # Uses i18n
│   └── sections/
│       └── Contact.jsx         # Uses i18n
└── main.jsx                    # i18n initialized
```

## How to Add More Translations

### Adding a New Language

1. Create a new translation file in `src/i18n/locales/` (e.g., `es.json`)
2. Add to `src/i18n/config.js`:
   ```javascript
   import esTranslations from './locales/es.json';
   
   resources: {
     ro: { translation: roTranslations },
     ru: { translation: ruTranslations },
     es: { translation: esTranslations },  // Add this
   }
   ```
3. Update `LanguageSwitcher.jsx` to add the language button

### Adding New Translation Keys

1. Open `src/i18n/locales/ro.json` and `ru.json`
2. Add your key in the same structure (e.g., `"mySection": { "myKey": "value" }`)
3. In your component:
   ```javascript
   import { useTranslation } from 'react-i18next';
   
   export default function MyComponent() {
     const { t } = useTranslation();
     return <h1>{t('mySection.myKey')}</h1>;
   }
   ```

## Translation Keys Available

### Navigation
- `nav.home` - Home
- `nav.solutions` - Solutions
- `nav.howItWorks` - How it works
- `nav.terminals` - Terminals
- `nav.contact` - Contact

### Hero Section
- `hero.title` - Main heading
- `hero.subtitle` - Subtitle
- `hero.cta` - Call-to-action button
- `hero.phone` - Phone button title
- `hero.email` - Email button title
- `hero.telegram` - Telegram button title

### Contact Form
- `contact.name` - Name field
- `contact.company` - Company field
- `contact.phone` - Phone field
- `contact.email` - Email field
- `contact.employees` - Employee count dropdown
- `contact.integration` - Integration type dropdown
- `contact.projectDetails` - Project details textarea
- `contact.sendRequest` - Submit button text
- `contact.sending` - Sending state text
- `contact.requestSent` - Success message title
- `contact.thankYou` - Thank you message
- `contact.error` - Error message

### Contact Info
- `contact.talkAbout` - "Talk about your project"
- `contact.response` - Response time message
- `contact.phone` - Phone number
- `contact.email` - Email address
- `contact.location` - Location

## Current Language Support

| Language | Code | Status |
|----------|------|--------|
| Romanian | ro   | ✅ Complete |
| Russian  | ru   | ✅ Complete |

## Telegram Messages
Telegram messages from the contact form are sent in the **current language**:
- If user is viewing in Russian → message is in Russian
- If user is viewing in Romanian → message is in Romanian

## Browser LocalStorage
The selected language is stored in localStorage as:
```javascript
localStorage.getItem('language') // Returns 'ro' or 'ru'
```

## Future Enhancements
- Add more languages (Spanish, French, etc.)
- Add language-specific formatting (dates, currency)
- Add RTL support for Arabic

---

For more info on i18next: https://www.i18next.com/
