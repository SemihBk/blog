/* assets/js/nav.js */

/* Menu mobile */
(function () {
  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("mobileMenu");
  const backdrop = document.getElementById("menuBackdrop");
  if (!btn || !menu || !backdrop) return;

  const open = () => {
    menu.hidden = false;
    backdrop.hidden = false;
    btn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    menu.hidden = true;
    backdrop.hidden = true;
    btn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  btn.addEventListener("click", () => (menu.hidden ? open() : close()));
  backdrop.addEventListener("click", close);
  document.addEventListener(
    "keydown",
    (e) => e.key === "Escape" && !menu.hidden && close()
  );
})();

/* Lien actif */
(function () {
  const here = location.pathname.replace(/\/index\.html?$/, "/");
  document.querySelectorAll(".nav-links a, #mobileMenu a").forEach((a) => {
    const href = new URL(a.getAttribute("href"), location.origin).pathname;
    if (href === here) a.classList.add("active");
  });
})();
