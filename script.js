/* Personalização por link: ?wa=5511999998888&nome=Nome%20do%20Escritório */
const params = new URLSearchParams(location.search);
const WA = (params.get("wa") || "5500900000000").replace(/\D/g, "");
const NOME = params.get("nome");
const waUrl = msg => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
const fmtPhone = n => {
  const d = n.replace(/^55/, "");
  return d.length === 11 ? `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
       : d.length === 10 ? `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}` : n;
};

if (NOME) {
  document.querySelectorAll("[data-brand]").forEach(el => (el.textContent = NOME));
  document.title = NOME + " | Escritório de advocacia";
}
document.querySelectorAll("a[data-wa]").forEach(a => (a.href = waUrl(a.dataset.wa)));
if (params.get("wa")) document.querySelectorAll("[data-phone]").forEach(el => (el.textContent = fmtPhone(WA)));

/* Navegação: destaca a seção visível */
const nav = document.getElementById("nav");
const links = [...nav.querySelectorAll("a")];
const alvo = id => links.find(a => a.getAttribute("href") === "#" + id);
const obs = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    links.forEach(a => a.removeAttribute("aria-current"));
    const l = alvo(en.target.id);
    if (l) l.setAttribute("aria-current", "true");
  });
}, { rootMargin: "-20% 0px -65% 0px" });
document.querySelectorAll("main section[id]").forEach(s => obs.observe(s));

/* Menu em telas pequenas */
const mbtn = document.getElementById("menu-btn");
const setMenu = open => {
  nav.classList.toggle("open", open);
  mbtn.setAttribute("aria-expanded", open);
  mbtn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
};
mbtn.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
links.forEach(a => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

/* Áreas de atuação: acordeão */
document.querySelectorAll(".acc button").forEach(b => {
  b.addEventListener("click", () => {
    const abrir = b.getAttribute("aria-expanded") !== "true";
    b.setAttribute("aria-expanded", abrir);
    document.getElementById(b.getAttribute("aria-controls")).classList.toggle("open", abrir);
  });
});

/* Busca no site */
const dlg = document.getElementById("busca"), q = document.getElementById("busca-q"), res = document.getElementById("busca-res");
const norm = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const indice = [...document.querySelectorAll("[data-search]")].map(el => {
  const sec = el.closest("section[id]");
  const titulo = (el.querySelector("h3 span, h3") || el).textContent.trim();
  const secao = sec.querySelector("h2").textContent.trim();
  return { el, sec, titulo, secao, texto: norm(titulo + " " + el.dataset.search) };
});
function buscar() {
  const t = norm(q.value.trim());
  res.innerHTML = "";
  if (!t) return;
  const achou = indice.filter(i => t.split(/\s+/).every(p => i.texto.includes(p))).slice(0, 8);
  if (!achou.length) { res.innerHTML = '<li class="vazio">Nenhum resultado. Tente outro termo.</li>'; return; }
  achou.forEach(i => {
    const li = document.createElement("li"), a = document.createElement("a"), s = document.createElement("small");
    a.href = "#" + i.sec.id; s.textContent = i.secao;
    a.append(s, document.createTextNode(i.titulo));
    a.addEventListener("click", () => dlg.close());
    li.append(a); res.append(li);
  });
}
document.getElementById("abrir-busca").addEventListener("click", () => { dlg.showModal(); q.focus(); });
q.addEventListener("input", buscar);
dlg.addEventListener("close", () => { q.value = ""; res.innerHTML = ""; });
dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
document.querySelector("#busca .icon-btn").addEventListener("click", () => dlg.close());
document.getElementById("busca-form").addEventListener("submit", e => e.preventDefault());

/* Formulário: monta a mensagem e abre o WhatsApp */
const form = document.getElementById("form"), err = document.getElementById("err");
form.addEventListener("submit", e => {
  e.preventDefault();
  const nome = form.nome.value.trim(), resumo = form.resumo.value.trim();
  err.hidden = !!nome;
  if (!nome) return form.nome.focus();
  let msg = `Olá! Sou ${nome} e preciso de orientação em ${form.area.value.toLowerCase()}.`;
  if (resumo) msg += `\nResumo: ${resumo}`;
  msg += `\nMelhor período para retorno: ${form.periodo.value}.`;
  window.open(waUrl(msg), "_blank", "noopener");
});
