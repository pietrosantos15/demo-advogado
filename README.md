# Nogueira Prado Advogados: site de demonstração para advogado

Site estático (HTML, CSS e JavaScript puro, sem build) para mostrar a clientes como ficaria a página do escritório deles. Nomes, áreas e textos são fictícios.

## Ver no ar
No GitHub: **Settings > Pages > Deploy from a branch > `main` / `/ (root)`**. O link fica em `https://SEU-USUARIO.github.io/demo-advogado/`.

## Personalizar para um cliente sem editar código
Acrescente parâmetros ao link:

```
https://SEU-USUARIO.github.io/demo-advogado/?wa=5515991234567&nome=Silva%20Advogados
```

- `wa`: número com código do país e DDD, só dígitos. Troca todos os botões, o formulário e o telefone exibido.
- `nome`: troca o nome do escritório no menu lateral, no rodapé e na aba do navegador.

## Entregar de verdade ao cliente
Antes de publicar para o cliente, troque:

- [ ] Número do WhatsApp: busque `5500900000000` e `(00) 90000-0000` no `index.html`.
- [ ] Nome, endereço, horários e link do Google Maps.
- [ ] Áreas de atuação e os casos listados em cada uma.
- [ ] Advogados e o **número da OAB de cada um** (o texto usa `OAB/SP 000.000`).
- [ ] Remova a frase "Site de demonstração" do rodapé.

## Cuidados com a publicidade da advocacia
A publicidade de advogados é regulada pelo Provimento 205/2021 do Conselho Federal da OAB e pelo Código de Ética. Por isso este modelo:

- não traz depoimentos de clientes nem promessa de resultado;
- usa tom informativo e sóbrio, sem preço de "promoção" nem captação agressiva;
- avisa no formulário para não enviar documentos nem dados sensíveis.

Confirme com o cliente e com a seccional da OAB dele antes de publicar. Esta página é um modelo, não um parecer.

## Arquivos
`index.html` (conteúdo) · `style.css` (visual) · `script.js` (menu que acompanha a rolagem, formulário, WhatsApp e parâmetros do link)
