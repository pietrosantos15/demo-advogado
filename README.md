# Dra. Helena Marques, Advocacia: site de demonstração (Família e Sucessões)

Landing page estática (HTML, CSS e JS puros, sem build) para advogada autônoma de Direito de Família e Sucessões no interior de SP. Nome, OAB, endereço, telefone e fotos são fictícios.

## Referência e o que foi mudado
Estrutura baseada em https://rafaelarocha.adv.br/ (pedido do cliente): hero com tagline direta, serviços (divórcio em cartório, inventário extrajudicial, união estável), "por que a via extrajudicial", apresentação da advogada com foto, CTA final "Descomplique o que parece difícil", todos os botões para o WhatsApp com mensagem pronta. Também consultados: direitodefamilia.adv.br e inventarioedivorciosp.com.br.

A referência traz **depoimentos de clientes e números de casos/anos**. Aqui foram **trocados** por "Como funciona o atendimento" e "Perguntas frequentes", porque o Provimento 205/2021 da OAB proíbe publicidade com depoimentos, divulgação de resultados/quantidade de clientes e promessa de resultado. Também não há preços promocionais. Confirme com a seccional da OAB do cliente antes de publicar.

## Visual
- Paleta: verde-garrafa `#1F3D36`, areia `#F4EDE1`, creme `#FBF8F2`, terracota `#A24E2A`, verde WhatsApp `#1E7A4C`.
- Fontes (Google Fonts): Fraunces (títulos) e Figtree (texto).

## Imagens (Unsplash, hotlink; trocar por fotos reais do cliente)
- Hero: retrato de advogada de terno (photo-1662104935883-e9dd0619eaba).
- Divórcio: assinatura de documento (photo-1758518731462-d091b0b4ed0d).
- Inventário: mãos com pasta de documentos (photo-1659355894099-b2c2b2884322).
- União estável: mulher com notebook em atendimento (photo-1700616270842-4cde59b9f8df).
- Sobre: advogada de braços cruzados (photo-1637589267610-6c66fc2a086b).
Na entrega, coloque as fotos do cliente em `assets/` e troque o `src` no `index.html`.

## Personalizar por link
`?wa=5515991234567&nome=Dra.%20Maria%20Silva`: troca número (botões, formulário, telefone) e nome (topo, rodapé, aba). Iniciais do logotipo SVG e o texto "Dra. Helena" nas mensagens ficam no `index.html`/`script.js`.

## Checklist de entrega
- [ ] Número do WhatsApp (`5500900000000` e `(00) 90000-0000`), endereço e horários.
- [ ] OAB real (`OAB/SP 000.000`), nome, formação e bio verdadeiras.
- [ ] Revisar as respostas das perguntas frequentes com a advogada (regras de cartório mudam).
- [ ] Remover a barra e a frase "Site de demonstração".
