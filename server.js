/**
 * Hummix Sales OS — Express server
 * Serves the static SPA from /public.
 * Ready for future REST endpoints (auth, deals API, CRM webhooks).
 */

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// ── Security headers ─────────────────────────────────────────────────────────
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  next();
});

// ── Static files ─────────────────────────────────────────────────────────────
app.use(
  express.static(path.join(__dirname, "public"), {
    maxAge: "1d",
    etag: true,
  })
);

// ── SPA fallback (all unknown routes → index.html) ────────────────────────────
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Hummix Sales OS running → http://localhost:${PORT}`);
});
