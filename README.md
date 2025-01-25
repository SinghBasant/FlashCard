# AWS Certification Flash Cards

An interactive flashcard application for AWS certification preparation, powered by Google's Gemini AI.

## Setup

1. Clone the repository
2. Copy `config.template.js` to `config.js`
3. Add your Gemini API key to `config.js`
4. Open `index.html` in a browser

## Security Note
The `config.js` file containing your API key is excluded from Git tracking. Never commit your actual API key to the repository.

## Deployment
For GitHub Pages deployment:
1. Set up your API key as a GitHub Secret
2. Use GitHub Actions to inject the API key during deployment 