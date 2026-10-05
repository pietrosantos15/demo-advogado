# Almeida Duarte Advogados: site de demonstração para escritório de advocacia

Site estático (HTML, CSS e JavaScript puro, sem build) para mostrar a clientes como ficaria a página institucional do escritório deles. Marca, nomes, áreas, números e textos são fictícios.

## Direção visual
Inspirado na linguagem institucional das grandes bancas brasileiras (azul-escuro profundo, acento quente, serifa editorial, layout sóbrio e muito espaço em branco). Não reproduz nome, logotipo, texto nem imagens de nenhum escritório real. O monograma "AD" é original, em SVG inline.

- Paleta: azul-marinho `#0B1B33`, ocre `#C8963E`, cinza-quente `#F1EEE8`, branco-papel `#FBFAF7`, acento tijolo `#9C3A2B`.
- Fontes (Google Fonts): Cormorant Garamond (títulos) e Manrope (interface). Sem imagens externas.
- Estrutura: topo com busca, hero, números (exemplo), Escritório, Áreas de atuação (acordeão), Profissionais, Publicações, Contato (formulário que continua no WhatsApp) e rodapé institucional.

## Ver no ar
No GitHub: **Settings > Pages > Deploy from a branch > `main` / `/ (root)`**. O link fica em `https://SEU-USUARIO.github.io/demo-advogado/`.

## Personalizar para um cliente sem editar código
```
https://SEU-USUARIO.github.io/demo-advogado/?wa=5515991234567&nome=Silva%20Advogados
```

- `wa`: número com código do país e DDD, só dígitos. Troca os botões, o formulário e o telefone exibido.
- `nome`: troca o nome do escritório no topo, no rodapé e na aba do navegador (o monograma "AD" continua no SVG; ajuste as iniciais no `index.html`).

## Entregar de verdade ao cliente
- [ ] Número do WhatsApp: busque `5500900000000` e `(00) 90000-0000` no `index.html`.
- [ ] Nome, monograma (iniciais no SVG), endereços das unidades, horários e CEPs.
- [ ] Números da seção de destaque (são exemplo): atualizar com dados reais ou remover a seção.
- [ ] Áreas de atuação e temas listados em cada uma.
- [ ] Profissionais: nome real e **número da OAB de cada advogado** (o texto usa `OAB/SP 000.000`), além do registro da sociedade no rodapé.
- [ ] Publicações: substituir os três títulos de exemplo por textos próprios, revisados pelo advogado responsável (e criar as páginas dos artigos).
- [ ] Remova a frase "Site de demonstração" do rodapé.

## Cuidados com a publicidade da advocacia
A publicidade é regulada pelo Provimento 205/2021 do Conselho Federal da OAB e pelo Código de Ética e Disciplina. Por isso este modelo:

- não traz depoimentos, casos de sucesso, rankings, prêmios nem promessa de resultado;
- usa tom informativo e sóbrio, sem preço promocional nem captação agressiva;
- avisa no formulário para não enviar documentos nem dados sensíveis;
- mantém o conteúdo como informativo, sem substituir consulta individual.

Confirme com o cliente e com a seccional da OAB dele antes de publicar. Esta página é um modelo, não um parecer.

## Arquivos
`index.html` (conteúdo) · `style.css` (visual) · `script.js` (parâmetros do link, navegação com destaque da seção, menu, acordeão, busca, formulário e WhatsApp)
