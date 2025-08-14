document.getElementById("year").textContent = new Date().getFullYear();

// THEME
(function theme() {
  const btn = document.getElementById("themeBtn");
  const label = document.getElementById("themeLabel");
  const sun = btn.querySelector(".icon-sun");
  const moon = btn.querySelector(".icon-moon");
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  function apply(theme) {
    const eff = theme === "system" ? (media.matches ? "dark" : "light") : theme;
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(eff);
    sun.style.display = eff === "dark" ? "none" : "inline-block";
    moon.style.display = eff === "dark" ? "inline-block" : "none";
    label.textContent =
      theme === "system" ? "Système" : eff === "dark" ? "Sombre" : "Clair";
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

// Data injectée par assets/js/data/lexique-data.js
const TERMS = Array.isArray(window.LEXIQUE_TERMS) ? window.LEXIQUE_TERMS : [];
if (!TERMS.length) {
  console.warn("[lexique] LEXIQUE_TERMS vide ou introuvable (chemin/ordre ?)");
}

// Helpers
const A2Z = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const els = {
  content: document.getElementById("content"),
  toc: document.getElementById("toc"),
  q: document.getElementById("q"),
  alphabet: document.getElementById("alphabet"),
};
let activeLetter = null;

// Build alphabet buttons
function buildAlphabet() {
  els.alphabet.innerHTML = "";
  const all = document.createElement("button");
  all.textContent = "Tous";
  all.className = "alpha" + (activeLetter === null ? " active" : "");
  all.onclick = () => {
    activeLetter = null;
    buildAlphabet();
    render();
  };
  els.alphabet.appendChild(all);
  A2Z.forEach((L) => {
    const b = document.createElement("button");
    b.textContent = L;
    b.className = "alpha" + (activeLetter === L ? " active" : "");
    b.onclick = () => {
      activeLetter = activeLetter === L ? null : L;
      buildAlphabet();
      render();
    };
    els.alphabet.appendChild(b);
  });
}

function normalize(s) {
  return s
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}

function render() {
  els.content.innerHTML = "";
  els.toc.innerHTML = "";
  const q = normalize(els.q.value.trim());

  // Filter
  const filtered = TERMS.filter((t) => {
    const hay = normalize(
      [
        t.term,
        ...(t.aliases || []),
        t.def || "",
        (t.tags || []).join(" "),
      ].join(" ")
    );
    const sameLetter =
      !activeLetter || normalize(t.term).startsWith(activeLetter.toLowerCase());
    return hay.includes(q) && sameLetter;
  }).sort((a, b) => a.term.localeCompare(b.term));

  // Group by first letter
  const groups = Object.groupBy
    ? Object.groupBy(filtered, (t) => t.term[0].toUpperCase())
    : filtered.reduce((acc, t) => {
        const k = t.term[0].toUpperCase();
        (acc[k] = acc[k] || []).push(t);
        return acc;
      }, {});
  const letters = Object.keys(groups).sort();

  // TOC
  letters.forEach((L) => {
    const a = document.createElement("a");
    a.href = "#" + L;
    a.innerHTML = `<span>${L}</span><small>${groups[L].length}</small>`;
    els.toc.appendChild(a);
  });

  // CONTENT
  letters.forEach((L) => {
    const sec = document.createElement("section");
    sec.className = "section";
    sec.id = L;
    sec.innerHTML = `<h2>${L}</h2>`;
    const list = document.createElement("div");
    list.className = "list";
    groups[L].forEach((t) => list.appendChild(entryTemplate(t)));
    sec.appendChild(list);
    els.content.appendChild(sec);
  });
}

function entryTemplate(t) {
  const id = t.term.toLowerCase().replace(/[^a-z0-9]+/gi, "-");
  const div = document.createElement("article");
  div.className = "entry";
  div.id = id;

  const alias =
    t.aliases && t.aliases.length
      ? ` · <span class="muted">(${t.aliases.join(", ")})</span>`
      : "";

  const tags =
    t.tags && t.tags.length
      ? `<span class="muted">— ${t.tags.map((x) => "#" + x).join(" ")}</span>`
      : "";

  div.innerHTML = `
    <div class="term">
      <a href="#${id}" style="font-weight:700">${t.term}</a>${alias} ${tags}
    </div>
    <div class="def">${t.def || ""}</div>
  `;
  return div;
}

// INIT
buildAlphabet();
render();
document.getElementById("q").addEventListener("input", render);
