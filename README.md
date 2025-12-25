# Random Password Generator 🔐

A simple, responsive random password generator built with **HTML, CSS, and JavaScript**.  
Choose password length and character types (uppercase, lowercase, numbers, special characters), then generate and copy a secure password.

## Features
- Select character sets: Uppercase / Lowercase / Numbers / Special characters
- Choose password length (1–64)
- One-click password generation
- Copy-to-clipboard button
- Input validation + friendly error messages
- Clean modern UI


## How to Run
### Option 1: Live Server (Recommended)
1. Open the folder in **VS Code**
2. Install the **Live Server** extension
3. Right-click `index.html` → **Open with Live Server**

### Option 2: Open directly in browser
Just double-click `index.html` to open it in your browser.

## How It Works (High Level)
- The browser loads HTML/CSS to render the UI
- JavaScript listens for the Generate button click
- It builds an allowed character set based on your selections
- It randomly picks characters to form a password
- Result is shown on the page and can be copied

## Customization
- Increase max length by changing `max="64"` in `index.html`
- Update special characters set inside `index.js`

## License
MIT (or choose any license you prefer)

