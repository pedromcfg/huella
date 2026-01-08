# Configuração do EmailJS para o Formulário de Contacto

## Passo 1: Criar Conta no EmailJS

1. Aceda a https://www.emailjs.com/
2. Crie uma conta gratuita (200 emails/mês)
3. Faça login na sua conta

## Passo 2: Configurar um Serviço de Email

1. No dashboard, vá a **Email Services**
2. Clique em **Add New Service**
3. Escolha o seu provedor de email (Gmail, Outlook, etc.)
4. Siga as instruções para conectar a sua conta de email
5. **Anote o Service ID** que será gerado (ex: `service_xxxxx`)

## Passo 3: Criar um Template de Email

1. Vá a **Email Templates**
2. Clique em **Create New Template**
3. Configure o template com os seguintes campos:

**Subject (Assunto):**
```
Nova mensagem de contacto - {{subject}}
```

**Content (Conteúdo):**
```
Nova mensagem recebida através do formulário de contacto do site Huella.

Nome: {{from_name}}
Email: {{from_email}}
Assunto: {{subject}}

Mensagem:
{{message}}

---
Esta mensagem foi enviada automaticamente através do formulário de contacto.
```

4. **Anote o Template ID** que será gerado (ex: `template_xxxxx`)

## Passo 4: Obter a Public Key

1. Vá a **Account** > **General**
2. Copie a **Public Key** (ex: `xxxxxxxxxxxxx`)

## Passo 5: Configurar no Código

1. Abra o ficheiro `index.html`
2. Encontre a linha com `emailjs.init('YOUR_PUBLIC_KEY');`
3. Substitua `YOUR_PUBLIC_KEY` pela sua Public Key

4. Abra o ficheiro `public/js/pages.js`
5. Encontre a linha com `emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)`
6. Substitua:
   - `YOUR_SERVICE_ID` pelo Service ID do passo 2
   - `YOUR_TEMPLATE_ID` pelo Template ID do passo 3

## Exemplo Final

No `index.html`:
```javascript
emailjs.init('abc123xyz789'); // Sua Public Key
```

No `public/js/pages.js`:
```javascript
emailjs.send('service_abc123', 'template_xyz789', formData)
```

## Teste

1. Abra o site no GitHub Pages
2. Vá à página de Contactos
3. Preencha e envie o formulário
4. Verifique se recebe o email em `huellacookies@gmail.com`

## Notas Importantes

- O plano gratuito permite 200 emails/mês
- Os emails são enviados em tempo real
- Não é necessário servidor backend
- Funciona perfeitamente com GitHub Pages
- Os dados do formulário são enviados diretamente para o EmailJS (não passam pelo GitHub)

## Segurança

- A Public Key é segura para usar no frontend
- O EmailJS valida os emails automaticamente
- Pode configurar limites de rate no dashboard do EmailJS

