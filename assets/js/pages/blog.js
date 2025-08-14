// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// THEME (same logic as landing)
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

// BLOG DATA

const posts = window.BLOG_POSTS;

// Collect tags
const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();

const els = {
  q: document.getElementById("q"),
  tagList: document.getElementById("tagList"),
  listArticles: document.getElementById("list-articles"),
  grpArticles: document.getElementById("grp-articles"),
  count: document.getElementById("results-count"),
};

// Render tags
let activeTag = null;
function renderTags() {
  els.tagList.innerHTML = "";
  const reset = document.createElement("button");
  reset.className = "tag" + (activeTag === null ? " active" : "");
  reset.textContent = "Tous";
  reset.onclick = () => {
    activeTag = null;
    renderTags();
    render();
  };
  els.tagList.appendChild(reset);
  for (const t of allTags) {
    const b = document.createElement("button");
    b.className = "tag" + (activeTag === t ? " active" : "");
    b.textContent = t;
    b.onclick = () => {
      activeTag = activeTag === t ? null : t;
      renderTags();
      render();
    };
    els.tagList.appendChild(b);
  }
}

function itemTemplate(p) {
  const el = document.createElement("article");
  el.className = "post";
  el.innerHTML = `
      <div class="thumb"><img src="${p.thumb}" alt="" loading="lazy"></div>
      <div>
        <a class="post-title" href="${p.url}">${p.title}</a>
        <div class="post-meta">${formatDate(p.date)} · ${p.tags
    .map((t) => `#${t}`)
    .join(" ")}</div>
        <p class="post-excerpt">${p.excerpt}</p>
      </div>`;
  return el;
}

function formatDate(iso) {
  const d = new Date(iso);
  const f = new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return f.format(d);
}

function render() {
  const q = els.q.value.trim().toLowerCase();
  const match = (p) => {
    const inText = (p.title + " " + p.tags.join(" ")).toLowerCase().includes(q);
    const tagOk = !activeTag || p.tags.includes(activeTag);
    return inText && tagOk;
  };

  const filtered = posts
    .filter(match)
    .sort((a, b) => b.date.localeCompare(a.date));
  const arts = filtered.filter((p) => p.type === "article");

  els.listArticles.innerHTML = "";

  arts.forEach((p) => els.listArticles.appendChild(itemTemplate(p)));

  els.grpArticles.style.display = arts.length ? "block" : "none";

  els.count.textContent = `${filtered.length} article${
    filtered.length > 1 ? "s" : ""
  } trouvé${filtered.length > 1 ? "s" : ""}`;
}

renderTags();
render();

els.q.addEventListener("input", render);
