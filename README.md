# Caderno

Site pessoal minimalista construído com [Astro](https://astro.build), inspirado visualmente em [michaelnotebook.com](https://michaelnotebook.com).

## Estrutura

O site tem três seções de conteúdo, cada uma com sua própria coleção:

- `src/content/essays/` — ensaios, em `/ensaios`.
- `src/content/notes/` — notas, em `/notes`.
- `src/content/poems/` — poesias, em `/poesias`.

Todas usam o mesmo frontmatter: `title`, `date`, `tags`, `description` opcional, `draft` opcional.

- `src/pages/index.astro` — homepage com os itens mais recentes de cada seção.
- `src/pages/{ensaios,notes,poesias}/index.astro` — listagem de cada seção.
- `src/pages/{ensaios,notes,poesias}/[slug].astro` — página individual de cada item.
- `src/pages/tags/[tag].astro` — página por tag, agregando as três seções.
- `src/layouts/` — layout base e layout de entrada (`EntryLayout`, usado pelas três seções).
- `src/utils/sections.ts` — mapeamento entre coleção, rota (`ensaios`/`notes`/`poesias`) e rótulos.
- `src/styles/global.css` — estilos globais (largura máx. 720px, tipografia serifada, fundo em tom papel/sépia, sem animações).

## Adicionar um item

Crie um arquivo `.md` na pasta da seção desejada (`src/content/essays/`, `src/content/notes/` ou `src/content/poems/`) com o frontmatter:

```md
---
title: Título
date: 2026-04-01
tags: [tag1, tag2]
description: Resumo opcional de uma linha.
---

Conteúdo em Markdown.
```

O slug da URL é o nome do arquivo (sem `.md`). Em poesias, quebras de linha simples (um `Enter`, sem linha em branco) são preservadas como versos — não precisa forçar `<br>` nem espaços no fim da linha.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy na Vercel

O projeto já está configurado (`vercel.json`, saída estática em `dist/`). Basta:

1. Subir o repositório para o GitHub/GitLab/Bitbucket.
2. Importar o projeto em [vercel.com/new](https://vercel.com/new) — a Vercel detecta o framework Astro automaticamente.
3. Deploy.

Ou via CLI:

```bash
npx vercel
```
