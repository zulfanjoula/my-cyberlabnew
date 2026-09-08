# Cybersecurity Student Portfolio

A modern, professional, and authentic personal branding portfolio website designed specifically for a **Cybersecurity Student**.

Combines a dark **Cybersecurity Lab Environment** with subtle **Terminal Aesthetics** — engineered without clichés (no matrix rain, no fake hacking alerts, no skulls, no inflated skill percentages).

---

## 🌟 Key Features

* **Authentic Student Brand**: Clearly conveys an active learner practicing Linux, networking, web security, security tools, and CTFs.
* **Realistic Skill Tiers**: Skills categorized honestly as `FOUNDATION`, `LEARNING`, `PRACTICING`, or `BASIC`.
* **Hands-On Labs Showcase**: Documented practice projects (Network Recon, Packet Analysis, Web Security, CTF) with full objective and syntax modals.
* **Premium Certificate Lightbox**: Clean gallery with category filters, aspect-ratio preservation (`object-contain`), and a split modal displaying your high-res certificate image alongside a detailed learning reflection.
* **Interactive Learning Terminals**:
  * Hero terminal displaying `whoami`, `skills`, and `status: learning...` with typing cursor.
  * About card featuring `cat about.txt`.
  * Directive showcase displaying `cat goals.txt`.
* **Visual Learning Journey**: Connected vertical timeline with glowing green nodes tracking progress from foundations to hands-on labs and beyond.
* **Centralized Data Layer**: Every piece of content (profile, skills, projects, certificates, timeline, social links) is completely separated into `src/data/` for rapid editing.
* **Dual Run Mode**:
  1. Standard **React + TypeScript + Tailwind CSS + Vite** project ready for local dev or production deployment.
  2. Zero-dependency **`preview.html`** that can be opened immediately in any browser without needing Node.js or npm installed.

---

## 📁 Project Structure

```text
cybersecurity-portfolio/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── profile.svg               # Fallback / placeholder profile avatar
│       ├── profile.jpg               # [PLACE YOUR PROFILE PHOTO HERE]
│       └── certificates/
│           ├── cert-placeholder.svg  # Fallback certificate graphic
│           ├── certificate-01.jpg    # [PLACE REAL CERTIFICATE 1 HERE]
│           ├── certificate-02.jpg    # [PLACE REAL CERTIFICATE 2 HERE]
│           ├── certificate-03.jpg    # [PLACE REAL CERTIFICATE 3 HERE]
│           └── README.txt
├── src/
│   ├── types/
│   │   └── index.ts                  # TypeScript interfaces for all data structures
│   ├── data/
│   │   ├── profile.ts                # Name, headline, bio, philosophy, social links
│   │   ├── skills.ts                 # 8 core skills with honest levels
│   │   ├── projects.ts               # Practice labs, objectives, commands practiced
│   │   ├── certificates.ts           # Certificate items & in-depth learning writeups
│   │   └── journey.ts                # 6 milestones of the learning timeline
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx            # Cyber styled buttons (primary, secondary, ghost)
│   │   │   ├── GlowCard.tsx          # Charcoal surface with emerald hover lift
│   │   │   ├── Modal.tsx             # Accessible lightbox dialog (ESC key, backdrop click)
│   │   │   ├── StatusBadge.tsx       # Styled pills for FOUNDATION, LEARNING, PRACTICING
│   │   │   └── TerminalFrame.tsx     # macOS/Linux terminal window with copy functionality
│   │   └── ui/
│   │       ├── CertificateModal.tsx  # Side-by-side certificate preview & reflection
│   │       └── ProjectModal.tsx      # Deep dive into lab objectives & commands
│   ├── sections/
│   │   ├── Navbar.tsx                # Sticky blurred header with active section indicator
│   │   ├── Hero.tsx                  # Profile frame, headline, CTAs & hero terminal
│   │   ├── About.tsx                 # Authentic intro + cat about.txt card
│   │   ├── Skills.tsx                # 8 interactive skill cards with focus details
│   │   ├── Projects.tsx              # Lab practice cards & details modal
│   │   ├── Certificates.tsx          # Gallery with category filter & modal trigger
│   │   ├── Journey.tsx               # Glowing green progression timeline
│   │   ├── TerminalShowcase.tsx      # cat goals.txt learning directive
│   │   ├── Philosophy.tsx            # "Always Learning. Always Building." callout
│   │   ├── Contact.tsx               # GitHub, LinkedIn, Email cards with copy button
│   │   └── Footer.tsx                # Terminal connection closed notice & copyright
│   ├── styles/
│   │   └── index.css                 # Custom cyber grid background & ambient glows
│   ├── App.tsx                       # Main page orchestration & scroll tracking
│   └── main.tsx                      # React root entry point
├── preview.html                      # Standalone instant browser preview (zero install)
├── index.html                        # Vite HTML entry point
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## 🚀 How to Run and View

### Option 1: Instant Standalone Preview (No Node.js Required)
Simply open `preview.html` in any web browser (double-click the file or right-click -> Open with Chrome / Edge / Firefox).
You can also run a quick local HTTP server using Python:
```powershell
python -m http.server 8000
```
Then visit `http://localhost:8000/preview.html`.

### Option 2: Vite + React Development Server (With Node.js)
If you have Node.js installed:
```powershell
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev

# 3. Build for production
npm run build
```

---

## 🛠️ How to Customize Your Content

All text, links, and credentials live in clean TypeScript files inside `src/data/`:

| File | What to Customize |
| :--- | :--- |
| `src/data/profile.ts` | Your name, role, bio paragraph, social media URLs (GitHub, LinkedIn, Email) |
| `src/data/certificates.ts` | Real certificate titles, issuers, dates, descriptions, skills covered, and credential verification URLs |
| `src/data/projects.ts` | Lab names, categories, tools, objectives, key takeaways, and terminal commands practiced |
| `src/data/skills.ts` | Skills list, descriptions, and learning tier badges (`FOUNDATION`, `LEARNING`, `PRACTICING`, `BASIC`) |
| `src/data/journey.ts` | Milestones, dates, and topics for your cybersecurity learning roadmap |

### Adding Real Certificate Images
1. Save your certificate image files into:
   ```text
   public/images/certificates/
   ```
   (e.g., `certificate-01.jpg`, `certificate-02.jpg`, etc.)
2. In `src/data/certificates.ts`, set the `image` property to match:
   ```ts
   image: '/images/certificates/certificate-01.jpg'
   ```
3. Enter your real issuing organization, date, and learning reflection in `src/data/certificates.ts`.

### Replacing the Profile Photo
1. Save your photo as `profile.jpg` in:
   ```text
   public/images/profile.jpg
   ```
2. The website will automatically display it within the glowing cybernetic lab frame!

---

## 🚢 Deployment

### Deploying to Vercel or Netlify
1. Push this repository to GitHub.
2. Link the repository to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
3. Set build command: `npm run build` and output directory: `dist`.
4. Deploy with one click!

### Deploying to GitHub Pages
You can host either the built Vite app (using the `gh-pages` npm package) or simply serve `preview.html` as `index.html` on GitHub Pages.
