# 🚀 Como Partilhar o Projeto Huella Cookies

## 📋 Opções Disponíveis

### **1. 🌐 Deploy Online (MAIS FÁCIL)**

#### **Vercel (Recomendado)**
1. Aceda a [vercel.com](https://vercel.com)
2. Faça login com GitHub
3. Clique em "New Project"
4. Importe este repositório
5. **Deploy automático!** ✨
6. Partilhe o link gerado

#### **Netlify**
1. Aceda a [netlify.com](https://netlify.com)
2. Faça login com GitHub
3. Clique em "New site from Git"
4. Selecione este repositório
5. **Deploy automático!** ✨

#### **Heroku**
1. Aceda a [heroku.com](https://heroku.com)
2. Crie conta gratuita
3. Clique em "New" > "Create new app"
4. Conecte com GitHub
5. **Deploy automático!** ✨

---

### **2. 💻 Executar Localmente (Para Testes)**

#### **Windows:**
1. Duplo clique em `deploy.bat`
2. Aguarde a instalação
3. Aceda a http://localhost:3000

#### **Mac/Linux:**
1. Abra terminal na pasta do projeto
2. Execute: `chmod +x deploy.sh && ./deploy.sh`
3. Aceda a http://localhost:3000

#### **Manual:**
```bash
npm install
npm start
```

---

### **3. 📦 Partilhar Arquivos**

#### **Opção A: ZIP**
1. Comprima toda a pasta do projeto
2. Envie por email/WeTransfer
3. A pessoa extrai e executa `deploy.bat` (Windows) ou `deploy.sh` (Mac/Linux)

#### **Opção B: GitHub**
1. Crie repositório no GitHub
2. Faça upload dos arquivos
3. Partilhe o link do repositório
4. A pessoa pode clonar e executar

---

### **4. 🎯 Links Úteis**

- **Vercel**: https://vercel.com
- **Netlify**: https://netlify.com
- **Heroku**: https://heroku.com
- **GitHub**: https://github.com

---

## ✅ Checklist para Deploy

- [ ] Todos os arquivos estão na pasta
- [ ] `package.json` configurado
- [ ] `server.js` funcional
- [ ] Imagens na pasta `public/img/`
- [ ] CSS e JS na pasta `public/`

---

## 🆘 Resolução de Problemas

### **Erro: "npm não encontrado"**
- Instale Node.js: https://nodejs.org

### **Erro: "Porta 3000 em uso"**
- Mude a porta no `server.js` (linha com `app.listen`)

### **Erro: "Módulos não encontrados"**
- Execute `npm install` na pasta do projeto

---

**💡 Dica:** Para partilhar rapidamente, use o **Vercel** - é gratuito e muito fácil!
