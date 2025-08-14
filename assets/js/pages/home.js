document.getElementById("year").textContent = new Date().getFullYear();
// THEME HANDLING (light / dark / system via cycling)
(function initTheme() {
  const btn = document.getElementById("themeBtn");
  const label = document.getElementById("themeLabel");
  const iconSun = btn.querySelector(".icon-sun");
  const iconMoon = btn.querySelector(".icon-moon");
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  function apply(theme) {
    const root = document.documentElement;
    const systemDark = media.matches;
    const effective =
      theme === "system" ? (systemDark ? "dark" : "light") : theme;
    root.classList.remove("light", "dark");
    root.classList.add(effective);
    iconSun.style.display = effective === "dark" ? "none" : "inline-block";
    iconMoon.style.display = effective === "dark" ? "inline-block" : "none";
    label.textContent =
      theme === "system"
        ? "Système"
        : effective === "dark"
        ? "Sombre"
        : "Clair";
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

// HAMBURGER MENU
(function mobileNav() {
  const btn = document.getElementById("menuBtn");
  const sheet = document.getElementById("mobileMenu");
  const backdrop = document.getElementById("menuBackdrop");

  const open = () => {
    sheet.hidden = false;
    backdrop.hidden = false;
    btn.setAttribute("aria-expanded", "true");
  };
  const close = () => {
    sheet.hidden = true;
    backdrop.hidden = true;
    btn.setAttribute("aria-expanded", "false");
  };

  btn.addEventListener("click", () => (sheet.hidden ? open() : close()));
  backdrop.addEventListener("click", close);
  document.addEventListener("keydown", (e) => e.key === "Escape" && close());
  sheet.addEventListener("click", (e) => {
    if (e.target.tagName === "A") close(); // close after navigating
  });

  // defensive: if user resizes to desktop, ensure sheet closes
  const mq = window.matchMedia("(min-width:780px)");
  mq.addEventListener("change", () => {
    if (mq.matches) close();
  });
})();

// POSTS
// -------- LATEST POSTS (homepage) --------
(function renderLatest() {
  const latestEl = document.getElementById("home-latest");
  if (!latestEl) return;

  const posts = (window.BLOG_POSTS || [])
    .filter((p) => p.type === "article")
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  if (!posts.length) {
    latestEl.innerHTML = `<div class="muted">Aucun article pour l’instant.</div>`;
    console.warn("[home] BLOG_POSTS vide ou introuvable.");
    return;
  }

  const fmt = new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  latestEl.innerHTML = posts
    .map(
      (p) => `
    <article class="card">
      <div class="thumb">
        <img src="${p.thumb}" alt="" loading="lazy"
             onerror="this.style.display='none';this.parentElement.style.background='var(--card)';">
      </div>
      <a class="post-title" href="${p.url}">${p.title}</a>
      <p class="muted">${p.excerpt ?? ""}</p>
      <div class="muted" style="margin-top:8px;font-size:12px">
        ${fmt.format(new Date(p.date))}
      </div>
    </article>
  `
    )
    .join("");
})();

// RANDOM MOTD

const blocks = [
  `<div class="cmd">$ echo Y3VyaW9zaXRlID4gcGVyZmVjdGlvbg== | base64 -d</div>
 <div class="out">curiosite > perfection</div>`,

  `<div class="cmd">$ grep -R "flag{" -n ~/ideas</div>
 <div class="out">42: flag{stay_curious_keep_learning}</div>`,

  `<div class="cmd">$ cat mindset.txt</div>
 <div class="out">Think like an attacker, act like a defender, rester humain.</div>`,

  `<div class="cmd">$ nmap -p 22,80,443 blog.singularity</div>
 <div class="out">22/tcp open  ssh<br>80/tcp open  http<br>443/tcp open  https<br># curiosity open</div>`,

  `<div class="cmd">$ printf '5365637572697465' | xxd -r -p</div>
 <div class="out">Securite</div>`,

  `<div class="cmd">$ echo "Pbasrerapr vf abg n enpr" | rot13</div>
 <div class="out">Confidence is not a race</div>`,

  `<div class="cmd">$ dig +short curiosite.singularity TXT</div>
 <div class="out">"hack_the_planet"</div>`,

  `<div class="cmd">$ sqlite3 notes.db "select tag,count(*) from posts order by 2 desc limit 3;"</div>
 <div class="out">reverse|12<br>ia|9<br>ctf|7</div>`,

  `<div class="cmd">$ iptables -A INPUT -p pessimism -j DROP</div>
 <div class="out">rule added: ne laisse pas entrer le doute</div>`,

  `<div class="cmd">$ morse -d "... --- ..."</div>
 <div class="out">SOS → "Need coffee"</div>`,

  `<div class="cmd">$ whoami</div>
 <div class="out">curieux</div>
 <div class="cmd">$ hostname</div>
 <div class="out">singularity</div>`,

  `<div class="cmd">$ curl -s https://api.hacktricks.local/motdujour | jq '.'</div>
 <div class="out">{ "mot": "résilience", "hint": "backup + pratique" }</div>`,

  `<div class="cmd">$ head -n1 ~/quotes.txt</div>
 <div class="out">"La sécurité, c’est un chemin, pas une destination."</div>`,

  `<div class="cmd">$ while true; do echo "learn; share; sleep 0;"; done | head -3</div>
 <div class="out">learn<br>share<br>sleep 0</div>`,

  `<div class="cmd">$ cat /etc/motd</div>
 <div class="out">Bienvenue. Ici, on casse pour comprendre, on répare pour apprendre.</div>`,

  `<div class="cmd">$ sshpass -p 'flag{curiosity_wins}' ssh user@ctf.local</div>
 <div class="out">Last login: Sun Aug 11 20:25:42</div>`,

  `<div class="cmd">$ find / -type f -name "ideas*" 2>/dev/null</div>
 <div class="out">/home/curieux/ideas.txt</div>`,

  `<div class="cmd">$ nc challenge.ctf.local 31337</div>
 <div class="out">Welcome challenger. Input password:</div>`,

  `<div class="cmd">$ git log --oneline | tail -3</div>
 <div class="out">fix: peur -> curiosité<br>feat: écrire pour comprendre<br>chore: café</div>`,
  `<div class="cmd">$ fortune | cowsay</div>
 <div class="out">"Hack the planet!" 🐄</div>`,

  `<div class="cmd">$ strings /dev/random | grep "inspiration" -m 1</div>
 <div class="out">keep_breaking_keep_learning</div>`,

  `<div class="cmd">$ nc cyber.space 1337</div>
 <div class="out">Welcome, traveler. Curiosity granted.</div>`,

  `<div class="cmd">$ base32 --decode <<< JBSWY3DPEBLW64TMMQ======</div>
 <div class="out">stay curious</div>`,

  `<div class="cmd">$ ps aux | grep "motivation"</div>
 <div class="out">root        1337  0.0  running  /usr/bin/passion</div>`,

  `<div class="cmd">$ sudo apt install curiosity</div>
 <div class="out">Reading package lists... Done</div>`,

  `<div class="cmd">$ man curiosity</div>
 <div class="out">Curiosity(1): The ultimate hacking skill.</div>`,

  `<div class="cmd">$ for x in hacking sharing exploring; do echo $x; done</div>
 <div class="out">hacking<br>sharing<br>exploring</div>`,

  `<div class="cmd">$ echo 'Never stop exploring.' > /etc/motd</div>
 <div class="out">Message updated.</div>`,

  `<div class="cmd">$ ping -c 1 inspiration.local</div>
 <div class="out">64 bytes from self: icmp_seq=1 ttl=64 time=0.001 ms</div>`,

  `<div class="cmd">$ traceroute imagination</div>
 <div class="out">hackerland → curiosity → discovery → inspiration</div>`,

  `<div class="cmd">$ grep -i "key" ~/knowledge.txt</div>
 <div class="out">key = curiosity</div>`,

  `<div class="cmd">$ whoami</div>
 <div class="out">explorer</div>`,

  `<div class="cmd">$ hostname</div>
 <div class="out">singularity</div>`,

  `<div class="cmd">$ cat /var/log/adventures.log</div>
 <div class="out">[OK] Learning<br>[OK] Breaking<br>[OK] Fixing</div>`,

  `<div class="cmd">$ tail -n 3 ~/dreams.txt</div>
 <div class="out"># Build something amazing<br># Break something to learn<br># Share the knowledge</div>`,

  `<div class="cmd">$ dd if=/dev/curiosity of=/dev/knowledge bs=1M</div>
 <div class="out">Copied 1337 MB</div>`,

  `<div class="cmd">$ nc -lvp 4242</div>
 <div class="out">Connection from wonderland accepted</div>`,

  `<div class="cmd">$ dig +short universe TXT</div>
 <div class="out">"42 is just the beginning"</div>`,

  `<div class="cmd">$ curl -s https://wttr.in/hackerland?format=3</div>
 <div class="out">Hackerland: 🌌 +∞ curiosity</div>`,

  `<div class="cmd">$ echo "SGFjayBsaWZl" | base64 -d</div>
 <div class="out">Hack life</div>`,

  `<div class="cmd">$ chmod +x /usr/bin/dream</div>
 <div class="out">Permissions set to execute ideas</div>`,

  `<div class="cmd">$ perl -e 'print "curiosity\n" x 3'</div>
 <div class="out">curiosity<br>curiosity<br>curiosity</div>`,

  `<div class="cmd">$ git commit -m "feat: learned something new"</div>
 <div class="out">[main 1337abc] feat: learned something new</div>`,

  `<div class="cmd">$ nc knowledge.world 9000</div>
 <div class="out">Welcome to the rabbit hole.</div>`,

  `<div class="cmd">$ ssh curious@infinite.loop</div>
 <div class="out">Last login: now</div>`,

  `<div class="cmd">$ python3 -c "print('🔍 Curiosity unlocked')"</div>
 <div class="out">🔍 Curiosity unlocked</div>`,

  `<div class="cmd">$ sed -n '42p' /usr/share/quotes.txt</div>
 <div class="out">"Seek knowledge, not certainty."</div>`,

  `<div class="cmd">$ nc -zv imagination 1-1024</div>
 <div class="out">Port 42 open — Welcome dreamer</div>`,

  `<div class="cmd">$ ./explore --world --passion</div>
 <div class="out">Exploring... 100%</div>`,

  `<div class="cmd">$ alias life='while true; do learn; done'</div>
 <div class="out">life alias set</div>`,

  `<div class="cmd">$ sshpass -p 'flag{knowledge_is_power}' ssh user@mind.local</div>
 <div class="out">Connected to wisdom</div>`,

  `<div class="cmd">$ telnet creativity 2323</div>
 <div class="out">Connected — type 'help' for inspiration</div>`,

  `<div class="cmd">$ ping -c 3 freedom</div>
 <div class="out">64 bytes from dream: alive</div>`,

  `<div class="cmd">$ strings /dev/mem | grep hope</div>
 <div class="out">hope_found</div>`,

  `<div class="cmd">$ ls ~/skills | sort</div>
 <div class="out">breaking<br>building<br>sharing</div>`,

  `<div class="cmd">$ nc random.ideas 8080</div>
 <div class="out">Idea stream started</div>`,

  `<div class="cmd">$ cat /etc/why.txt</div>
 <div class="out">Because it’s fun.</div>`,

  `<div class="cmd">$ more /var/log/failures.log</div>
 <div class="out"># each fail is a step forward</div>`,

  `<div class="cmd">$ uname -a</div>
 <div class="out">HackerOS passion curiosity 1337</div>`,

  `<div class="cmd">$ watch -n 1 fortune</div>
 <div class="out">Every second is a new adventure</div>`,
];

// Mélange le tableau (Fisher–Yates)
for (let i = blocks.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [blocks[i], blocks[j]] = [blocks[j], blocks[i]];
}

// Prend les 3 ou 4 premiers
const count = Math.floor(Math.random() * 2) + 3; // aléatoire entre 3 et 4
document.getElementById("motd").innerHTML = blocks.slice(0, count).join("");
