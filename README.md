# Clarear

Landing page em português do Brasil para apresentar a proposta acadêmica de acessibilidade educacional **Clarear**.

O projeto foi criado com **React + Vite** e não possui backend. A página é um protótipo visual/apresentação da ideia.

## Pré-requisitos

Antes de rodar o projeto, tenha instalado:

- Node.js `20.19` ou superior
- npm

Para conferir as versões:

```bash
node --version
npm --version
```

## Como instalar

Na pasta do projeto, instale as dependências:

```bash
npm install
```

## Como rodar em desenvolvimento

Execute:

```bash
npm run dev
```

Depois, abra no navegador o endereço mostrado no terminal. Normalmente será:

```text
http://localhost:5173/
```

## Como gerar a versão de produção

Para criar os arquivos otimizados:

```bash
npm run build
```

Os arquivos finais serão gerados na pasta `dist/`.

## Como visualizar o build localmente

Depois de rodar `npm run build`, execute:

```bash
npm run preview
```

Abra no navegador o endereço informado pelo terminal.

## Estrutura principal

- `src/App.jsx`: conteúdo e componentes da landing page.
- `src/styles.css`: estilos globais, responsividade e mockup visual.
- `src/main.jsx`: ponto de entrada da aplicação React.
- `index.html`: HTML base usado pelo Vite.
- `vite.config.js`: configuração do Vite.

