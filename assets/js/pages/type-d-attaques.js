document.getElementById("year").textContent = new Date().getFullYear();

// Theme (same cycle: light -> dark -> system)
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

// ---------- DATA ----------
// data injectée par assets/js/data/attaques-data.js
const DATA = Array.isArray(window.ATTAQUES_DATA) ? window.ATTAQUES_DATA : [];
if (!DATA.length) {
  console.warn("[attaques] ATTAQUES_DATA vide ou introuvable");
}

// ---------- RENDER ----------
const els = {
  content: document.getElementById("content"),
  toc: document.getElementById("toc"),
  q: document.getElementById("q"),
  toggles: document.getElementById("toggles"),
};
let scope = "all";

// ⚠️ Ajoute ça au-dessus de buildToggles()
const TAG_LABELS = {
  social: "Ingénierie sociale",
  malware: "Logiciels malveillants",
  network: "Réseaux",
  web: "Web",
  vulns: "Vulnérabilités",
  auth: "Authentification",
  critical: "Infrastructures critiques",
};

// (optionnel) si un jour tu veux un libellé custom dans DATA, tu peux mettre g.short et le prioriser.

// Build toggles from categories
(function buildToggles() {
  const btnAll = document.createElement("button");
  btnAll.className = "toggle active";
  btnAll.dataset.scope = "all";
  btnAll.textContent = "Tous";
  els.toggles.appendChild(btnAll);

  DATA.forEach((g) => {
    const b = document.createElement("button");
    b.className = "toggle";
    b.dataset.scope = g.id;
    b.textContent = TAG_LABELS[g.id] || g.short || g.title; // <- ici la magie
    els.toggles.appendChild(b);
  });

  els.toggles.querySelectorAll(".toggle").forEach((b) => {
    b.addEventListener("click", () => {
      els.toggles
        .querySelectorAll(".toggle")
        .forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      scope = b.dataset.scope;
      render();
    });
  });
})();

function render() {
  els.content.innerHTML = "";
  els.toc.innerHTML = "";
  const q = els.q.value.trim().toLowerCase();

  const groups = DATA.map((g) => {
    const items = g.items.filter((it) => {
      const hay = (
        it.name +
        " " +
        (it.aliases || []).join(" ") +
        " " +
        g.title
      ).toLowerCase();
      const inScope = scope === "all" || g.id === scope;
      return inScope && hay.includes(q);
    });
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
    sec.innerHTML = `<h2>${g.title}</h2><div></div>`;
    const list = sec.lastElementChild;
    g.items.forEach((it) => list.appendChild(attackBlock(g.id, it)));
    els.content.appendChild(sec);
  });
}

function attackBlock(groupId, it) {
  const id = `${groupId}-${it.name.toLowerCase().replace(/[^a-z0-9]+/gi, "-")}`;
  const d = document.createElement("details");
  d.className = "attack";
  d.id = id;

  // HEADER (clicking the title/summary toggles)
  const summary = document.createElement("summary");
  summary.innerHTML = `
  <h3>${it.name}${
    it.aliases ? ` <span class="aliases">(${it.aliases.join(", ")})</span>` : ""
  }</h3>
`;
  d.appendChild(summary);

  // BODY
  const body = document.createElement("div");
  body.className = "attack-body";

  if (it.def) {
    body.appendChild(sectionTitle("Définition"));
    body.appendChild(paragraph(it.def));
  }
  if (it.how && it.how.length) {
    body.appendChild(sectionTitle("Comment ça fonctionne ?"));
    body.appendChild(renderHow(it.how));
  }

  if (it.exampleText) {
    body.appendChild(sectionTitle("Exemple"));
    body.appendChild(paragraph(it.exampleText));
  }
  if (it.media && it.media.length) {
    it.media.forEach((m) => {
      const fig = document.createElement("figure");
      fig.className = "media";
      if (m.type === "image") {
        fig.innerHTML =
          `<img src="${m.src}" alt="${m.alt || ""}">` +
          (m.caption ? `<figcaption>${m.caption}</figcaption>` : "");
      } else if (m.type === "video") {
        fig.innerHTML =
          `<div class="video-wrap"><iframe src="${m.src}" allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>` +
          (m.caption ? `<figcaption>${m.caption}</figcaption>` : "");
      }
      body.appendChild(fig);
    });
  }
  if (it.sources && it.sources.length) {
    body.appendChild(sectionTitle("Sources"));
    const ul = document.createElement("ul");
    ul.style.margin = "8px 0 0 18px";
    it.sources.forEach(([t, u]) => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${u}" target="_blank" rel="noopener noreferrer">${t}</a>`;
      ul.appendChild(li);
    });
    body.appendChild(ul);
  }
  d.appendChild(body);

  // Open when navigated via hash
  if (location.hash === "#" + id) d.open = true;

  return d;
}

function sectionTitle(text) {
  const h = document.createElement("div");
  h.className = "section-title";
  h.textContent = text;
  return h;
}
function paragraph(text) {
  const p = document.createElement("p");
  p.className = "para";
  p.textContent = text;
  return p;
}

function strongUntilColon(text) {
  const frag = document.createDocumentFragment();
  const idx = text.indexOf(":");
  if (idx > -1) {
    const strong = document.createElement("strong");
    strong.textContent = text.slice(0, idx + 1); // inclut le ":"
    frag.appendChild(strong);
    const rest = text.slice(idx + 1).trimStart();
    if (rest) frag.appendChild(document.createTextNode(" " + rest));
  } else {
    frag.appendChild(document.createTextNode(text));
  }
  return frag;
}

function renderHow(howArray) {
  const frag = document.createDocumentFragment();

  // util pour construire un <li> avec gestion des sous-puces qui s'étalent
  function makeLiFromArrow(block) {
    const li = document.createElement("li");
    const cleaned = block.replace(/^(\s*→\s*)/, "");
    const lines = cleaned.split("\n");

    const headParts = [];
    const bullets = [];
    let inBullets = false;
    let currentBullet = null;

    lines.forEach((raw) => {
      const t = raw.trim();
      if (!t) return;

      if (/^- /.test(t)) {
        inBullets = true;
        if (currentBullet !== null) bullets.push(currentBullet.trim());
        currentBullet = t.replace(/^- /, "").trim();
      } else if (inBullets) {
        currentBullet = (currentBullet ? currentBullet + " " : "") + t;
      } else {
        headParts.push(t);
      }
    });
    if (currentBullet !== null) bullets.push(currentBullet.trim());

    const head = headParts.join(" ");
    li.appendChild(strongUntilColon(head)); // <— ici on met en gras avant le “ : ”

    if (bullets.length) {
      const ul = document.createElement("ul");
      bullets.forEach((b) => {
        const bli = document.createElement("li");
        bli.appendChild(strongUntilColon(b)); // <— idem pour les sous-puces
        ul.appendChild(bli);
      });
      li.appendChild(ul);
    }
    return li;
  }

  let ol = null;
  function flushOl() {
    if (ol) {
      frag.appendChild(ol);
      ol = null;
    }
  }

  howArray.forEach((chunk) => {
    const s = (chunk || "").trim();
    if (!s) return;

    if (s.startsWith("→")) {
      if (!ol) ol = document.createElement("ol");
      ol.appendChild(makeLiFromArrow(s));
    } else {
      // paragraphe “intro” ou intercalé
      flushOl();
      frag.appendChild(paragraph(chunk));
    }
  });

  flushOl();
  return frag;
}

function renderTextOrList(text) {
  const frag = document.createDocumentFragment();
  const lines = text.split("\n");

  const isListy = lines.some((l) => {
    const t = l.trim();
    return /^- /.test(t) || /^\d+\.\s/.test(t);
  });
  if (!isListy) {
    frag.appendChild(paragraph(text));
    return frag;
  }

  let currentList = null; // <ul> ou <ol> en cours
  let currentLi = null; // <li> courant pour concaténer les lignes
  let mode = null; // "ul" | "ol"

  function flush() {
    if (currentLi && currentList) currentList.appendChild(currentLi);
    currentLi = null;
  }
  function flushList() {
    flush();
    if (currentList) frag.appendChild(currentList);
    currentList = null;
    mode = null;
  }

  lines.forEach((raw) => {
    const t = raw.trim();
    if (!t) return;

    const mNum = t.match(/^(\d+)\.\s+(.*)$/);
    const mBul = t.match(/^- (.*)$/);

    if (mNum) {
      if (mode !== "ol") {
        flushList();
        currentList = document.createElement("ol");
        mode = "ol";
      } else {
        flush();
      }
      currentLi = document.createElement("li");
      currentLi.textContent = mNum[2];
    } else if (mBul) {
      if (mode !== "ul") {
        flushList();
        currentList = document.createElement("ul");
        mode = "ul";
      } else {
        flush();
      }
      currentLi = document.createElement("li");
      currentLi.textContent = mBul[1];
    } else {
      // ligne de continuation -> on l’ajoute au <li> courant
      if (currentLi) {
        currentLi.textContent = (currentLi.textContent + " " + t).trim();
      } else {
        // sécurité : si pas de <li> courant, on sort en paragraphe
        flushList();
        frag.appendChild(paragraph(t));
      }
    }
  });

  flushList();
  return frag;
}

// Events
document.getElementById("q").addEventListener("input", render);

// initial
render();
