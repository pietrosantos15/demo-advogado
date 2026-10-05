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
  document.title = NOME + " | Atendimento jurídico";
}
document.querySelectorAll("a[data-wa]").forEach(a => (a.href = waUrl(a.dataset.wa)));
if (params.get("wa")) document.querySelectorAll("[data-phone]").forEach(el => (el.textContent = fmtPhone(WA)));

/* Menu lateral: destaca a seção que está na tela */
const links = [...document.querySelectorAll("#nav a")];
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
