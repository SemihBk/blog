/* assets/js/web.js */
/* Helpers globaux */
const $ = (id) => document.getElementById(id);
const set = (id, v) => {
  const el = $(id);
  if (el) el.innerHTML = v;
};
const txt = (id, v) => {
  const el = $(id);
  if (el) el.textContent = v;
};

/* ===== Identité navigateur / UA ===== */
(function ua() {
  txt("ua", navigator.userAgent || "—");

  if (navigator.userAgentData?.getHighEntropyValues) {
    navigator.userAgentData
      .getHighEntropyValues([
        "brands",
        "platform",
        "platformVersion",
        "architecture",
        "model",
        "bitness",
        "uaFullVersion",
      ])
      .then((d) => {
        const brands = (d.brands || [])
          .map((b) => `${b.brand} ${b.version}`)
          .join(", ");
        txt(
          "uach",
          `Platform: ${d.platform} ${d.platformVersion} | ${brands} | ${
            d.uaFullVersion || ""
          }`.trim()
        );
        txt("platform", d.platform || navigator.platform || "—");
      })
      .catch(() => {
        txt("uach", "—");
        txt("platform", navigator.platform || "—");
      });
  } else {
    txt("uach", "Non supporté");
    txt("platform", navigator.platform || "—");
  }

  txt("langs", (navigator.languages || [navigator.language]).join(", "));
  try {
    txt("tz", Intl.DateTimeFormat().resolvedOptions().timeZone || "—");
  } catch {
    txt("tz", "—");
  }
  function clock() {
    const now = new Date(),
      offMin = -now.getTimezoneOffset();
    const pad = (n) => String(Math.abs(n)).padStart(2, "0");
    const sign = offMin >= 0 ? "+" : "-";
    const utc = `${sign}${pad(Math.trunc(offMin / 60))}:${pad(offMin % 60)}`;
    txt("localtime", `${now.toLocaleString()} (UTC${utc})`);
  }
  clock();
  setInterval(clock, 1000);
})();

/* ===== Affichage (écran/viewport/DPR/couleurs/préfs/Hz) ===== */
(function display() {
  const fmt = (w, h) => `${w}×${h}`;
  function paint() {
    const cssW = screen.width,
      cssH = screen.height,
      dpr = window.devicePixelRatio || 1;
    const physW = Math.round(cssW * dpr),
      physH = Math.round(cssH * dpr);
    txt("screenCss", fmt(cssW, cssH));
    txt("screenPhys", fmt(physW, physH));
    txt("viewport", fmt(innerWidth, innerHeight));
    txt("dpr", String(dpr));
  }
  paint();
  addEventListener("resize", paint);
  let lastKey = "";
  setInterval(() => {
    const k = [
      screen.width,
      screen.height,
      innerWidth,
      innerHeight,
      devicePixelRatio,
    ].join("x");
    if (k !== lastKey) {
      lastKey = k;
      paint();
    }
  }, 500);
  txt("colors", `${screen.colorDepth}-bit`);

  const mqDark = matchMedia?.("(prefers-color-scheme: dark)");
  const mqLight = matchMedia?.("(prefers-color-scheme: light)");
  const mqMotion = matchMedia?.("(prefers-reduced-motion: reduce)");
  function pref() {
    const arr = [];
    if (mqDark?.matches) arr.push("Mode sombre");
    if (mqLight?.matches) arr.push("Mode clair");
    if (mqMotion?.matches) arr.push("Réduction d’animations");
    txt("prefers", arr.length ? arr.join(", ") : "—");
  }
  pref();
  [mqDark, mqLight, mqMotion].forEach((mq) =>
    mq?.addEventListener?.("change", pref)
  );

  // Estimation Hz via rAF
  (function estimateHz() {
    const out = $("hz");
    if (!out) return;
    function median(a) {
      const s = [...a].sort((x, y) => x - y),
        m = Math.floor(s.length / 2);
      return s.length ? (s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2) : 0;
    }
    function measure(ms = 1500) {
      return new Promise((res) => {
        const stamps = [];
        let id;
        function tick(ts) {
          stamps.push(ts);
          id = requestAnimationFrame(tick);
        }
        id = requestAnimationFrame(tick);
        setTimeout(() => {
          cancelAnimationFrame(id);
          res(stamps);
        }, ms);
      });
    }
    async function run() {
      if (document.visibilityState !== "visible") {
        txt("hz", "—");
        return;
      }
      txt("hz", "mesure…");
      const s = await measure();
      const dif = [];
      for (let i = 1; i < s.length; i++) dif.push(s[i] - s[i - 1]);
      const med = median(dif) || 16.7;
      const hz = Math.round(1000 / med);
      txt("hz", `~${hz} Hz`);
    }
    run();
    ["resize", "orientationchange", "visibilitychange"].forEach((e) =>
      addEventListener(e, run)
    );
  })();
})();

/* ===== Système ===== */
(function system() {
  txt("cores", navigator.hardwareConcurrency ?? "—");
  txt("ram", navigator.deviceMemory ? `${navigator.deviceMemory} Go` : "—");
  set(
    "cookies",
    navigator.cookieEnabled
      ? '<span class="badge ok">activés</span>'
      : '<span class="badge bad">désactivés</span>'
  );
  txt(
    "dnt",
    navigator.doNotTrack === "1" || window.doNotTrack === "1"
      ? "activé"
      : "désactivé"
  );
  function vis() {
    txt("visibility", document.visibilityState === "visible" ? "oui" : "non");
  }
  document.addEventListener("visibilitychange", vis);
  vis();

  if (performance.memory?.jsHeapSizeLimit) {
    const gb = (performance.memory.jsHeapSizeLimit / 1024 ** 3).toFixed(2);
    txt("heap", `${gb} Go`);
  } else {
    txt("heap", "—");
  }
})();

/* ===== Réseau ===== */
(function net() {
  function online() {
    set(
      "online",
      navigator.onLine
        ? '<span class="badge ok">en ligne</span>'
        : '<span class="badge bad">hors ligne</span>'
    );
  }
  addEventListener("online", online);
  addEventListener("offline", online);
  online();

  const conn =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;
  function qual() {
    if (!conn) {
      txt("net", "—");
      return;
    }
    const p = [];
    if (conn.effectiveType) p.push(`type: ${conn.effectiveType}`);
    if (conn.downlink) p.push(`débit: ~${conn.downlink} Mbps`);
    if (conn.rtt) p.push(`RTT: ~${conn.rtt} ms`);
    txt("net", p.join(" | ") || "—");
  }
  qual();
  conn?.addEventListener?.("change", qual);

  txt("referrer", document.referrer || "—");

  $("btn-ip")?.addEventListener("click", async () => {
    txt("ip", "…");
    try {
      const r = await fetch("https://api.ipify.org?format=json");
      const j = await r.json();
      txt("ip", j.ip || "—");
    } catch {
      txt("ip", "échec");
    }
  });

  $("btn-geo")?.addEventListener("click", () => {
    txt("geo", "demande en cours…");
    if (!navigator.geolocation) {
      txt("geo", "Non supporté");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude, accuracy } = pos.coords;
        txt(
          "geo",
          `lat ${latitude.toFixed(5)}, lon ${longitude.toFixed(
            5
          )} (±${Math.round(accuracy)} m)`
        );
      },
      (err) => {
        txt("geo", `refusé / erreur (${err.code})`);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  });
})();

/* ===== Permissions + Presse‑papiers ===== */
(function perms() {
  function badge(state) {
    const map = {
      granted: "autorisé",
      denied: "refusé",
      prompt: "à la demande",
      unknown: "inconnu",
    };
    const cls =
      state === "granted" ? "ok" : state === "denied" ? "bad" : "warn";
    return state
      ? `<span class="badge ${cls}">${map[state] || state}</span>`
      : "—";
  }
  async function q(name, id) {
    try {
      if (!navigator.permissions?.query) {
        set(id, "—");
        return;
      }
      const st = await navigator.permissions.query({ name });
      set(id, badge(st.state));
      st.onchange = () => set(id, badge(st.state));
    } catch {
      set(id, badge("unknown"));
    }
  }
  [
    "geolocation",
    "notifications",
    "camera",
    "microphone",
    "clipboard-read",
    "clipboard-write",
  ].forEach((n) => q(n, `perm-${n}`));

  // Lecture du presse‑papiers (sur clic)
  $("btn-clipboard-read")?.addEventListener("click", async () => {
    const out = $("clipboardContent");
    if (!out) return;
    out.textContent = "lecture…";
    const sanitize = (s) => s.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, "");
    const trunc = (s, n = 500) => (s.length > n ? s.slice(0, n) + "…" : s);
    try {
      if (navigator.clipboard?.read) {
        const items = await navigator.clipboard.read();
        if (!items?.length) {
          out.textContent = "presse‑papiers vide";
          return;
        }
        for (const it of items) {
          if (it.types.includes("text/plain")) {
            const blob = await it.getType("text/plain");
            const text = await blob.text();
            out.textContent = trunc(sanitize(text));
            return;
          }
        }
        for (const it of items) {
          const type = it.types.find((t) => /^image\//.test(t));
          if (type) {
            const blob = await it.getType(type);
            const url = URL.createObjectURL(blob);
            out.innerHTML = "";
            const img = new Image();
            img.src = url;
            img.alt = "Image du presse‑papiers";
            img.style.maxWidth = "260px";
            img.style.borderRadius = "8px";
            img.onload = () => setTimeout(() => URL.revokeObjectURL(url), 0);
            out.appendChild(img);
            return;
          }
        }
        out.textContent = "type non pris en charge";
      } else if (navigator.clipboard?.readText) {
        const text = await navigator.clipboard.readText();
        out.textContent = text ? trunc(sanitize(text)) : "presse‑papiers vide";
      } else {
        out.textContent = "API presse‑papiers non dispo";
      }
    } catch (e) {
      out.textContent = "refusé / indisponible";
      console.error("Clipboard error", e);
    }
  });
})();

/* ===== WebGL / GPU ===== */
(function gpu() {
  try {
    const c = document.createElement("canvas");
    const gl = c.getContext("webgl") || c.getContext("experimental-webgl");
    if (!gl) {
      txt("webgl", "non disponible");
      return;
    }
    set("webgl", '<span class="badge ok">activé</span>');
    txt("glVersion", gl.getParameter(gl.VERSION));
    txt("glsl", gl.getParameter(gl.SHADING_LANGUAGE_VERSION));
    const dbg = gl.getExtension("WEBGL_debug_renderer_info");
    if (dbg) {
      txt("gpuVendor", gl.getParameter(dbg.UNMASKED_VENDOR_WEBGL));
      txt("gpuName", gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL));
    } else {
      txt("gpuVendor", gl.getParameter(gl.VENDOR));
      txt("gpuName", "— (extension masquée)");
    }
  } catch (e) {
    txt("webgl", "erreur");
    console.error(e);
  }
})();

/* ===== Stockage ===== */
(function storageInfo() {
  const fmt = (b) =>
    b >= 1024 ** 3
      ? (b / 1024 ** 3).toFixed(2) + " Gio"
      : (b / 1024 ** 2).toFixed(0) + " Mio";
  (async () => {
    try {
      if (!navigator.storage?.estimate) {
        txt("stor-quota", "—");
        txt("stor-used", "—");
        txt("stor-free", "—");
        txt("stor-persisted", "—");
        return;
      }
      const { quota = 0, usage = 0 } = await navigator.storage.estimate();
      txt("stor-quota", fmt(quota));
      txt("stor-used", fmt(usage));
      txt("stor-free", fmt(Math.max(0, quota - usage)));
      if (navigator.storage.persisted) {
        const p = await navigator.storage.persisted();
        set(
          "stor-persisted",
          p
            ? '<span class="badge ok">activé</span>'
            : '<span class="badge warn">désactivé</span>'
        );
      }
    } catch (e) {
      txt("stor-quota", "erreur");
      txt("stor-used", "erreur");
      txt("stor-free", "erreur");
      console.error(e);
    }
  })();
  $("btn-persist")?.addEventListener("click", async () => {
    try {
      const ok = await navigator.storage.persist();
      set(
        "stor-persisted",
        ok
          ? '<span class="badge ok">activé</span>'
          : '<span class="badge bad">refusé</span>'
      );
    } catch (e) {
      txt("stor-persisted", "erreur");
      console.error(e);
    }
  });
})();

/* ===== Canvas Fingerprint ===== */
(function canvasFP() {
  const out = $("fp-hash"),
    prev = $("fp-preview");
  if (!out || !prev) return;
  try {
    const c = document.createElement("canvas");
    c.width = 300;
    c.height = 120;
    const ctx = c.getContext("2d");
    ctx.textBaseline = "top";
    ctx.fillStyle = "#f1f3f5";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#222";
    ctx.font = '16.8px "Inter","Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
    ctx.fillText("Canvas FP • æøå — 𝛑Ωж 日本語", 8, 8);
    ctx.strokeStyle = "#09f";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    for (let i = 0; i < 50; i++) {
      const x = 6 * i,
        y = 60 + Math.sin(i / 2) * 12;
      i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
    }
    ctx.stroke();
    const g = ctx.createLinearGradient(0, 0, 300, 0);
    g.addColorStop(0, "#000");
    g.addColorStop(1, "#0f0");
    ctx.fillStyle = g;
    ctx.shadowColor = "rgba(0,0,0,.25)";
    ctx.shadowBlur = 2;
    ctx.fillRect(8, 80, 284, 22);
    function fnv1a(s) {
      let h = 0x811c9dc5;
      for (let i = 0; i < s.length; i++) {
        h ^= s.charCodeAt(i);
        h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
      }
      return ("00000000" + h.toString(16)).slice(-8);
    }
    const data = c.toDataURL();
    const hash = fnv1a(data);
    txt("fp-hash", hash);
    prev.innerHTML = "";
    c.style.maxWidth = "260px";
    c.style.borderRadius = "8px";
    prev.appendChild(c);
  } catch (e) {
    txt("fp-hash", "non disponible");
    console.error(e);
  }
})();

/* ===== Fenêtre / intégration / présence ===== */
(function win() {
  function update() {
    const fs =
      !!document.fullscreenElement ||
      matchMedia?.("(display-mode: fullscreen)").matches;
    set(
      "fullscreen",
      fs
        ? '<span class="badge ok">oui</span>'
        : '<span class="badge warn">non</span>'
    );
    const inIframe = (function () {
      try {
        return self !== top;
      } catch {
        return true;
      }
    })();
    txt("in-iframe", inIframe ? "oui" : "non");
    txt("outer", `${outerWidth || "?"}×${outerHeight || "?"}`);
    const orient =
      screen.orientation?.type ||
      (window.orientation === 0 ? "portrait" : "paysage");
    txt("orientation", orient || "—");
    const dm =
      (matchMedia?.("(display-mode: standalone)").matches && "standalone") ||
      (matchMedia?.("(display-mode: minimal-ui)").matches && "minimal-ui") ||
      "browser";
    txt("display-mode", dm);
  }
  update();
  ["resize", "orientationchange"].forEach((e) => addEventListener(e, update));
  document.addEventListener("fullscreenchange", update);

  // Présence multi‑onglets
  if (!("BroadcastChannel" in window)) {
    txt("tab-count", "—");
    return;
  }
  const id = Math.random().toString(36).slice(2);
  const bc = new BroadcastChannel("presence-demo");
  const others = new Set();
  function render() {
    txt("tab-count", others.size ? `${others.size} autre(s)` : "aucun");
  }
  bc.onmessage = (ev) => {
    const { type, from } = ev.data || {};
    if (!from || from === id) return;
    if (type === "hello" || type === "ack") {
      others.add(from);
      render();
      if (type === "hello") bc.postMessage({ type: "ack", from: id });
    }
    if (type === "bye") {
      others.delete(from);
      render();
    }
  };
  bc.postMessage({ type: "hello", from: id });
  addEventListener("beforeunload", () =>
    bc.postMessage({ type: "bye", from: id })
  );
  setInterval(() => bc.postMessage({ type: "hello", from: id }), 5000);
  render();
})();

/* ===== Performance ===== */
(function perf() {
  const fmt = (ms) => `${Math.round(ms)} ms`;
  function navT() {
    const nav = performance.getEntriesByType("navigation")[0];
    if (nav) {
      txt("dom-ready", fmt(nav.domContentLoadedEventEnd));
      txt("page-load", fmt(nav.loadEventEnd));
    } else if (performance.timing) {
      const t = performance.timing;
      txt("dom-ready", fmt(t.domContentLoadedEventEnd - t.navigationStart));
      txt("page-load", fmt(t.loadEventEnd - t.navigationStart));
    }
  }
  navT();
  try {
    const po = new PerformanceObserver((list) => {
      for (const e of list.getEntries()) {
        const v = Math.max(e.renderTime || 0, e.loadTime || 0);
        if (v) txt("lcp", fmt(v));
      }
    });
    po.observe({ type: "largest-contentful-paint", buffered: true });
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") po.disconnect();
    });
  } catch {
    txt("lcp", "—");
  }
  function heap() {
    if (performance.memory) {
      txt(
        "heapUsed",
        (performance.memory.usedJSHeapSize / 1024 ** 2).toFixed(1) + " Mo"
      );
      const lim =
        (performance.memory.jsHeapSizeLimit / 1024 ** 3).toFixed(2) + " Go";
      txt("heapLimit", lim);
      const el = $("heap");
      if (el) el.textContent = lim;
    } else {
      txt("heapUsed", "—");
      txt("heapLimit", "—");
    }
  }
  heap();
  setInterval(heap, 1500);
})();
