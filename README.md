# 🎬 MovieDB

Uma aplicação web moderna para explorar filmes, construída com React, TypeScript e Vite. Permite buscar filmes, ver detalhes e favoritar.

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Linguagem tipada baseada em JavaScript
- **Vite** - Framework React
- **React Router 7** - Roteamento para SPA
- **Tailwind CSS 4** - Framework CSS utilitário
- **Lucide React** - Biblioteca de ícones
- **Jest** - Framework de testes
- **React Testing Library** - Utilitários para testar componentes React
- **Fech API** - Para requisições HTTP

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js**
- **npm**
- **Git**

## 🔧 Configuração e Instalação

### 1. Clone o repositório

```bash
git clone git@github.com:eriquisanti/movie-db.git
cd moviedb
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```bash
# .env
VITE_TMDB_API_TOKEN=seu_token_da_tmdb_aqui
VITE_TMDB_API_URL=https://api.themoviedb.org/3
VITE_TMDB_IMAGE_URL=https://image.tmdb.org/t/p/original
```

ou copie o contúdo do arquivo `.env.example`

**Para obter o token da TMDB:**

1. Acesse [The Movie Database (TMDB)](https://www.themoviedb.org/)
2. Crie uma conta gratuita
3. Vá para Configurações → API
4. Solicite uma chave de API ou [Chave de API (TMDB)](https://www.themoviedb.org/settings/api)
5. Use o **Bearer Token** no arquivo `.env`

## 🌐 API Integration

A aplicação consome a [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api) através de:

- **Proxy configurado** no Vite para desenvolvimento
- **Autenticação** via Bearer Token
- **Endpoints utilizados:**
  - `/movie/popular` - Filmes populares
  - `/search/movie` - Busca de filmes
  - `/movie/{id}` - Detalhes do filme

### 4. Execute o projeto em modo de desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia o servidor de desenvolvimento

# Build e Deploy
npm run build        # Gera build de produção
npm run preview      # Visualiza o build de produção localmente

# Testes
npm run test         # Executa todos os testes
npm run test:watch   # Executa testes em modo watch
npm run test:coverage # Executa testes com relatório de cobertura

# Code Quality
npm run lint         # Executa o linter (ESLint)
```

## 🗂️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── button/
│   ├── card/
│   ├── header/
│   ├── movie-card/
│   └── ...
├── pages/              # Páginas da aplicação
│   ├── home/
│   ├── search/
│   ├── movie/
│   ├── favorites/
│   └── not-found/
├── hooks/              # Custom hooks
│   ├── use-get.ts
│   ├── use-infinite-movies.ts
│   └── use-infinite-scroll.ts
├── providers/          # Context providers
│   ├── favorites-provider.tsx
│   └── search-provider.tsx
├── lib/                # Utilitários e API
│   ├── api.ts
│   └── utils.ts
├── config/             # Configurações
│   ├── app-config.ts
│   └── menu-links.ts
├── types/              # Definições de tipos TypeScript
├── assets/             # Arquivos estáticos
└── __mocks__/          # Mocks para testes
```

## 🧪 Testes

O projeto inclui testes unitários abrangentes:

```bash
# Executar todos os testes
npm run test

# Executar testes com cobertura
npm run test:coverage

# Executar testes em modo watch (desenvolvimento)
npm run test:watch
```

## 🎯 Funcionalidades

### ✅ Implementadas

- **🏠 Página Inicial** - Lista de filmes populares
- **🔍 Busca** - Pesquisa de filmes por título
- **📱 Paginação Infinita** - Carregamento automático de mais filmes
- **❤️ Favoritos** - Sistema para favoritar/desfavoritar filmes
- **🎭 Detalhes do Filme** - Página com informações basicas do filme
- **📱 Design Responsivo** - Funciona em desktop, tablet e mobile
- **🌐 Navegação** - Roteamento com React Router
