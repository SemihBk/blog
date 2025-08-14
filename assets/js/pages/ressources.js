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

// DATA (édite librement — j'ai prérempli avec des exemples proches de ta capture)
// Data injectée par assets/js/data/ressources-data.js
const DATA = Array.isArray(window.RESOURCES) ? window.RESOURCES : [];
if (!DATA.length) {
  console.warn("[ressources] RESOURCES vide ou introuvable (chemin/ordre ?)");
}

let scope = "all";

(function buildToggles() {
  const wrap = document.getElementById("toggles");

  // bouton "Tous"
  const btnAll = document.createElement("button");
  btnAll.className = "toggle active";
  btnAll.dataset.scope = "all";
  btnAll.textContent = "Tous";
  wrap.appendChild(btnAll);

  // 1 bouton par catégorie de DATA (titre affiché)
  DATA.forEach((g) => {
    const b = document.createElement("button");
    b.className = "toggle";
    b.dataset.scope = g.id; // clé stable
    b.textContent = g.title; // libellé visible
    wrap.appendChild(b);
  });

  // listeners
  wrap.querySelectorAll(".toggle").forEach((b) => {
    b.addEventListener("click", () => {
      wrap
        .querySelectorAll(".toggle")
        .forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      scope = b.dataset.scope;
      render();
    });
  });
})();

// RENDER
const els = {
  content: document.getElementById("content"),
  toc: document.getElementById("toc"),
  q: document.getElementById("q"),
};

function render() {
  els.content.innerHTML = "";
  els.toc.innerHTML = "";

  const q = els.q.value.trim().toLowerCase();

  const groups = DATA.map((g) => {
    const items = g.items
      .map(([name, url]) => ({
        name,
        url,
        domain: new URL(url).hostname,
      }))
      .filter(
        (it) =>
          (scope === "all" || g.id === scope) && // <-- g.id
          (it.name.toLowerCase().includes(q) ||
            it.domain.toLowerCase().includes(q) ||
            g.title.toLowerCase().includes(q)) // <-- chercher par catégorie
      );
    return { ...g, items };
  }).filter((g) => g.items.length);

  // TOC
  groups.forEach((g) => {
    const a = document.createElement("a");
    a.href = "#" + g.id;
    a.innerHTML = `<span>${g.title}</span><small>${g.items.length}</small>`;
    els.toc.appendChild(a);
  });

  // CONTENT
  groups.forEach((g) => {
    const sec = document.createElement("section");
    sec.className = "group";
    sec.id = g.id;
    sec.innerHTML = `<h2>${g.title}</h2><div class="list"></div>`;
    const list = sec.querySelector(".list");
    g.items.forEach((it) => list.appendChild(itemTemplate(it)));
    els.content.appendChild(sec);
  });
}

function itemTemplate(it) {
  const div = document.createElement("div");
  div.className = "item";
  div.innerHTML = `
    <div class="item-title">
      <img src="https://www.google.com/s2/favicons?sz=64&domain=${it.domain}" width="16" height="16" alt=""/>
      <a href="${it.url}" target="_blank" rel="noopener noreferrer"><span>${it.name}</span></a>
      <span class="badge">${it.domain}</span>
    </div>
    <div class="actions">
      <a class="btn" href="${it.url}" target="_blank" rel="noopener noreferrer">
        Ouvrir
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <path d="M15 3h6v6"/>
          <path d="M10 14 21 3"/>
        </svg>
      </a>
    </div>`;
  return div;
}

// SEARCH
document.getElementById("q").addEventListener("input", render);

// initial
render();
