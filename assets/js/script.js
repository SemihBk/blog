/* /src/js/script.js */

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

/* ===== Thème (clair/sombre/système) ===== */
(function theme() {
  const btn = document.getElementById("themeBtn");
  if (!btn) return;
  const label = document.getElementById("themeLabel");
  const sun = btn.querySelector(".icon-sun");
  const moon = btn.querySelector(".icon-moon");
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  function apply(theme) {
    const eff = theme === "system" ? (media.matches ? "dark" : "light") : theme;
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(eff);
    if (sun && moon) {
      sun.style.display = eff === "dark" ? "none" : "inline-block";
      moon.style.display = eff === "dark" ? "inline-block" : "none";
    }
    if (label) {
      label.textContent =
        theme === "system" ? "Système" : eff === "dark" ? "Sombre" : "Clair";
    }
  }

  let theme = localStorage.getItem("theme") || "system";
  apply(theme);

  media.addEventListener("change", () => theme === "system" && apply("system"));
  btn.addEventListener("click", () => {
    theme = theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    localStorage.setItem("theme", theme);
    apply(theme);
  });
})();

/* ===== Barre de progression lecture ===== */
(function progress() {
  const bar = document.getElementById("progress");
  if (!bar) return;
  function update() {
    const h = document.documentElement;
    const s = h.scrollTop / (h.scrollHeight - h.clientHeight);
    bar.style.width = Math.max(0, Math.min(1, s)) * 100 + "%";
  }
  document.addEventListener("scroll", update, { passive: true });
  update();
})();

/* ===== Temps de lecture (~200 wpm) ===== */
(function reading() {
  const art = document.getElementById("article");
  const target = document.getElementById("reading");
  if (!art || !target) return;
  const words = art.innerText.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  target.textContent = minutes + " min";
})();

/* ===== Sommaire (TOC h3/h4) ===== */
(function toc() {
  const art = document.getElementById("article");
  const nav = document.getElementById("toc");
  if (!art || !nav) return;

  const hs = art.querySelectorAll("h3, h4");
  const seen = new Set();
  nav.innerHTML = "";

  hs.forEach((h) => {
    let base =
      h.textContent
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // accents
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-") || "section";

    let id = base,
      i = 2;
    while (seen.has(id) || document.getElementById(id)) id = base + "-" + i++;
    seen.add(id);
    h.id = id;

    const a = document.createElement("a");
    a.href = "#" + id;
    a.textContent = h.textContent;
    if (h.tagName === "H4") a.classList.add("depth-2");
    nav.appendChild(a);
  });
})();
