# 🚀 Guia Completo de Deploy no Vercel

## Passo 1: Criar Conta no Vercel

1. Acesse: **https://vercel.com/signup**
2. Cadastre-se usando:
   - GitHub (recomendado)
   - GitLab
   - Bitbucket
   - Ou email

## Passo 2: Método de Deploy (Escolha um)

### 📦 Opção A: Deploy via Interface Web (MAIS FÁCIL)

1. **Acesse o Dashboard:**
   - https://vercel.com/new

2. **Adicionar Novo Projeto:**
   - Clique em "Add New..." → "Project"

3. **Upload Manual:**
   - Como você ainda não tem um repositório Git, escolha "Upload"
   - Arraste a pasta `politica-privacidade` para a área de upload
   - Ou clique para selecionar a pasta

4. **Configurações:**
   - **Project Name:** `d-dieta-privacy` (ou outro nome)
   - **Framework Preset:** `Other`
   - **Root Directory:** `.` (ponto - diretório atual)
   - **Build Command:** (deixe vazio)
   - **Output Directory:** `.` (ponto)
   - **Install Command:** (deixe vazio)

5. **Deploy:**
   - Clique em "Deploy"
   - Aguarde 30-60 segundos

6. **Obter URL:**
   - Após deploy, você verá: `https://d-dieta-privacy.vercel.app` (ou similar)
   - Clique em "Visit" para testar
   - **COPIE ESSE URL** - você precisará dele!

---

### 💻 Opção B: Deploy via CLI (Para usuários avançados)

1. **Instalar Node.js** (se não tiver):
   - Download: https://nodejs.org/
   - Instale a versão LTS

2. **Instalar Vercel CLI:**
   ```powershell
   npm install -g vercel
   ```

3. **Navegar até a pasta:**
   ```powershell
   cd C:\Users\delim\Desktop\emagrecedor2.0\politica-privacidade
   ```

4. **Fazer login:**
   ```powershell
   vercel login
   ```
   - Siga as instruções na tela
   - Confirme o email

5. **Deploy:**
   ```powershell
   vercel
   ```
   - Confirme o nome do projeto
   - Aguarde o deploy
   - Copie o URL fornecido

6. **Deploy em Produção:**
   ```powershell
   vercel --prod
   ```

---

### 🐙 Opção C: Deploy via GitHub (Melhor para atualizações)

1. **Criar Repositório no GitHub:**
   - Acesse: https://github.com/new
   - Nome: `d-dieta-privacy`
   - Visibilidade: Public
   - Crie o repositório

2. **Upload dos Arquivos:**
   - Clique em "uploading an existing file"
   - Arraste todos os arquivos da pasta `politica-privacidade`
   - Commit: "Initial commit - Privacy Policy & Terms"

3. **Conectar ao Vercel:**
   - Acesse: https://vercel.com/new
   - Clique em "Import Git Repository"
   - Selecione seu repositório `d-dieta-privacy`
   - Configure:
     - Framework Preset: `Other`
     - Root Directory: `.`
   - Clique em "Deploy"

4. **Atualizações Automáticas:**
   - Toda vez que você atualizar o GitHub, o Vercel fará deploy automaticamente!

---

## Passo 3: Testar o Site

Após o deploy, teste:

### ✅ Checklist de Testes:

1. **Página Principal (Privacidade):**
   - [ ] `https://seu-site.vercel.app/` carrega corretamente
   - [ ] Todas as seções aparecem
   - [ ] Links do menu funcionam
   - [ ] Scroll suave funciona
   - [ ] Planos (R$ 0 e R$ 3,99) aparecem corretamente

2. **Página de Termos:**
   - [ ] `https://seu-site.vercel.app/termos.html` carrega
   - [ ] Conteúdo completo aparece
   - [ ] Links funcionam

3. **Responsividade:**
   - [ ] Abra no celular (Chrome mobile)
   - [ ] Layout se ajusta corretamente
   - [ ] Menu funciona no mobile
   - [ ] Formulário funciona

4. **Performance:**
   - [ ] Página carrega em menos de 3 segundos
   - [ ] Sem erros no console (F12)
   - [ ] Imagens/ícones carregam

5. **Links:**
   - [ ] Botão "Voltar ao topo" funciona
   - [ ] Links de email funcionam (abrem cliente)
   - [ ] Navegação entre páginas funciona

---

## Passo 4: Adicionar no Google Play Console

1. **Acesse o Play Console:**
   - https://play.google.com/console

2. **Selecione seu App:**
   - Escolha "D-Dieta" na lista

3. **Vá em Política de Privacidade:**
   - Menu lateral: **Configuração** → **Privacidade e segurança** → **Política de privacidade**
   - Ou: **App content** → **Privacy Policy**

4. **Cole o URL:**
   ```
   https://seu-site.vercel.app/
   ```
   - Substitua `seu-site` pelo URL real do Vercel

5. **Salve:**
   - Clique em "Salvar"
   - Aguarde validação

---

## Passo 5: Domínio Personalizado (OPCIONAL)

Se você quiser um domínio próprio como `www.d-dieta.com.br`:

1. **Compre um domínio:**
   - Registro.br (domínios .br)
   - Namecheap, GoDaddy, etc.

2. **Configure no Vercel:**
   - Vá em: Project Settings → Domains
   - Adicione: `www.d-dieta.com.br`
   - Siga instruções para configurar DNS

3. **Aguarde propagação:**
   - Pode levar até 48 horas
   - Depois, acesse via seu domínio!

---

## 🔧 Solução de Problemas

### Problema 1: "404 Not Found"
**Solução:**
- Verifique se os arquivos estão na raiz da pasta
- Certifique-se de que `index.html` está presente
- Re-deploy: `vercel --prod`

### Problema 2: "Styles não carregam"
**Solução:**
- Abra F12 (DevTools) → Console
- Veja se há erros de CORS
- Verifique caminhos em `<link rel="stylesheet" href="styles.css">`
- Certifique-se de que `styles.css` foi enviado

### Problema 3: "JavaScript não funciona"
**Solução:**
- Abra F12 → Console
- Veja erros
- Verifique `<script src="script.js"></script>` no HTML
- Certifique-se de que `script.js` foi enviado

### Problema 4: "Play Console rejeita URL"
**Solução:**
- URL deve ser **HTTPS** (Vercel já fornece)
- URL deve ser **público** (sem autenticação)
- Página deve **mencionar o app** (já menciona "D-Dieta")
- Teste em navegação anônima

---

## 📊 Monitoramento (Opcional)

### Adicionar Google Analytics:

1. **Criar propriedade:**
   - https://analytics.google.com/
   - Crie nova propriedade "D-Dieta Privacy"

2. **Obter código de rastreamento:**
   - Copie o código `G-XXXXXXXXXX`

3. **Adicionar no HTML:**
   - Edite `index.html` e `termos.html`
   - Antes de `</head>`, adicione:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

4. **Re-deploy:**
   - Faça upload novamente no Vercel

---

## 🎉 Pronto!

Agora você tem:
- ✅ Site de privacidade hospedado no Vercel
- ✅ URL público para o Play Console
- ✅ Design profissional e responsivo
- ✅ Conformidade com LGPD
- ✅ Detalhamento dos planos (Grátis com ads vs Premium R$ 3,99)

### Próximos Passos:

1. ✅ Copie o URL do Vercel
2. ✅ Cole no Google Play Console
3. ✅ Continue com o processo de publicação do app
4. ✅ Siga o `GUIA_FIREBASE_E_PLAY_STORE.md` para os próximos passos

---

**Dúvidas?** Entre em contato:
- Email: suporte@d-dieta.com.br
- Documentação Vercel: https://vercel.com/docs

**Boa sorte com o lançamento do D-Dieta! 🥗💚**
