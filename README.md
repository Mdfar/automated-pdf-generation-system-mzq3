Automated A4 PDF Generation System
Deployment (Linux CLI)

Install Docker and Docker Compose.

Clone this repository.

Run docker build -t pdf-engine .

Run docker run -p 3000:3000 pdf-engine.

Technical Specs

Engine: Headless Chromium (Playwright)

Format: A4 (ISO 216)

Resolution: 300 DPI via high-scale vector rendering

Fonts: Automatically embedded via CSS @font-face