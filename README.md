# Instituto Asafe — landing page

Página única em React + Vite. O objetivo principal é levar a família a enviar uma mensagem de inscrição no WhatsApp.

## Rodar

```bash
npm install
npm run dev
```

Build de produção (gera a pasta `dist/`, pronta para Netlify, Vercel, Hostinger etc.):

```bash
npm run build
```

## Onde editar

- `src/data.js` — contatos, projetos, opções do formulário e formas de apoio
- `src/components/` — uma seção por arquivo
- `src/styles.css` — cores e fontes no topo (`:root`)
- `public/img/` — fotos e logos

## Fotos

As fotos atuais foram recortadas do panfleto e têm só 512 px de largura. Para trocar, use arquivos com pelo menos 1200 px no mesmo nome e atualize `largura` e `altura` em `src/data.js`.

Os logos, as asas e a coroa em SVG foram vetorizados a partir dos JPGs. Se existir o arquivo vetorial original, prefira usá-lo.
