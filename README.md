# Hummix Sales OS

Internal sales pipeline & analytics tool for the [Hummix](https://hummix.co) low-code AI platform.

Track software-license opportunities (CX, Document BPM, AI Agents) from first demo to signed contract — with role-aware dashboards, a kanban/table pipeline, deep analytics, and exportable reports. Bilingual EN/TH, dark + light themes, responsive.

---

## Features

- **Dashboard** — role-aware KPIs, bookings forecast, pipeline funnel, rep leaderboard, deals needing attention
- **Pipeline** — table & kanban board, filterable by owner / product / stage
- **Analysis** — win-probability bubble chart, deal velocity, revenue model breakdown, bookings momentum
- **Reports** — printable executive summary, CSV export, product & industry breakdowns
- **Roles** — Management (full team view) vs Salesperson (personal quota & pipeline)
- **Themes** — dark (default) + light
- **i18n** — English / Thai

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Frontend | Vanilla JS SPA (self-contained, no framework) |
| Server | Node.js + Express |
| Hosting | Render.com (Web Service, Singapore region) |
| Fonts | Kanit · IBM Plex Sans Thai · DM Serif Display (Google Fonts) |
| Charts | Hand-rolled inline SVG (no chart library) |

---

## Local development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (hot-reload via --watch)
npm run dev

# 3. Open
open http://localhost:3000
```

Any email + password combination works (demo mode). Pick **Management** or **Salesperson** role on login.

---

## Deploy to Render.com

1. Push this repo to GitHub.
2. In [Render Dashboard](https://dashboard.render.com) → **New → Web Service**.
3. Connect your GitHub repo and select it.
4. Render auto-detects `render.yaml` — click **Create Web Service**.
5. Done. Render deploys automatically on every `git push` to `main`.

Alternatively, use the `render.yaml` at the root for [Infrastructure-as-Code](https://render.com/docs/infrastructure-as-code) deploys.

---

## Project structure

```
hummix-sales-os/
├── public/
│   └── index.html        ← Full SPA (self-contained, all assets inlined)
├── server.js             ← Express server + SPA fallback
├── package.json
├── render.yaml           ← Render.com deployment config
├── .gitignore
└── README.md
```

---

## Wiring a real backend

All app data lives in `this.deals` and `this.reps` inside `public/index.html`.
To replace with live data:

1. Add API routes in `server.js` (e.g. `app.get('/api/deals', ...)`)
2. Connect your CRM / database
3. In `index.html`, replace the static arrays with `fetch('/api/deals')` calls inside `constructor()`
4. Keep the derived fields (`tcv = arr * term + services`, `weighted = tcv * prob`) computed client-side — no other changes needed

See `DATA-MODEL.md` (in the original handoff package) for the full schema and metric formulas.

---

## License

Internal use only — Hummix Company Limited © 2026
