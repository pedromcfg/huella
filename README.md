# 🍪 Huella Cookies - Website Estático

Website estático para a Huella Cookies, feito com HTML, CSS e JavaScript puro.

## 📁 Estrutura do Projeto

```
huella-cookies/
├── index.html              # Página principal (SPA)
├── public/                 # Ficheiros estáticos
│   ├── css/               # Estilos
│   ├── js/                # JavaScript
│   │   ├── router.js      # Sistema de roteamento
│   │   ├── pages.js       # Funções de renderização
│   │   └── main.js        # Funcionalidades principais
│   ├── img/               # Imagens
│   └── data/              # Dados JSON (opcional)
├── server.js              # Servidor simples (opcional)
└── package.json           # Dependências
```

## 🚀 Como Usar

### Opção 1: Abrir diretamente no navegador (Recomendado)
1. Abra o ficheiro `index.html` diretamente no navegador
2. O site funciona completamente offline, sem necessidade de servidor

### Opção 2: Usar servidor local (Opcional)
```bash
npm install
npm start
```
Depois abra `http://localhost:3000` no navegador

## ✨ Funcionalidades

- ✅ **SPA (Single Page Application)** - Navegação sem recarregar a página
- ✅ **Carrinho de Compras** - Funciona com LocalStorage
- ✅ **Checkout Completo** - Com 4 métodos de pagamento
- ✅ **Responsivo** - Funciona em todos os dispositivos
- ✅ **100% Estático** - Não precisa de servidor backend

## 📝 Notas

- Todos os dados estão inline no JavaScript (sem problemas de CORS)
- O carrinho persiste no LocalStorage do navegador
- As rotas usam hash (#) para navegação SPA
- Não são necessários ficheiros .ejs ou rotas do Express

## 🗑️ Ficheiros Removidos

Os seguintes ficheiros não são mais necessários (podem ser removidos):
- `views/*.ejs` - Templates EJS (substituídos por funções JavaScript)
- `routes/*.js` - Rotas Express (não necessárias para site estático)

## 📦 Deploy

Pode fazer deploy em qualquer plataforma de hosting estático:
- **Vercel** - Basta fazer upload da pasta
- **Netlify** - Drag & drop da pasta
- **GitHub Pages** - Push para repositório
- **Qualquer servidor web** - Apenas precisa servir ficheiros estáticos
