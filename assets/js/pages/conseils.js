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

// LISTE — colle/édite tes conseils exacts ici (texte + option lien "pourquoi")
// Data injectée par assets/js/data/conseils-data.js
const LIST = Array.isArray(window.CONSEILS) ? window.CONSEILS : [];
if (!LIST.length) {
  console.warn("[conseils] CONSEILS vide ou introuvable (chemin/ordre ?)");
}

///
const list = document.getElementById("tips");
LIST.forEach((t, i) => {
  const li = document.createElement("li");
  const main = document.createElement("span");
  main.textContent = t.text + (t.text.endsWith(".") ? "" : ".");
  li.appendChild(main);
  if (t.why) {
    const a = document.createElement(t.url ? "a" : "span");
    if (t.url) {
      a.href = t.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    a.className = "why";
    a.textContent = "(" + t.why + ")";
    li.appendChild(a);
  }
  list.appendChild(li);
});

// Copier toute la liste
document.getElementById("copyAll").addEventListener("click", () => {
  const txt = Array.from(document.querySelectorAll("#tips li"))
    .map((li, idx) =>
      `${idx + 1}. ${li.childNodes[0].textContent} ${
        li.querySelector(".why") ? li.querySelector(".why").textContent : ""
      }`.trim()
    )
    .join("\n");
  navigator.clipboard.writeText(txt).then(() => {
    const btn = document.getElementById("copyAll");
    btn.textContent = "Copié !";
    setTimeout(
      () =>
        (btn.innerHTML = `Copier la liste\n          <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\"/><path d=\"M16 4v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h8\"/></svg>`),
      1000
    );
  });
});
