# ⚙️ Guia de Customização - D-Dieta Privacy

## 🎨 Personalizações Importantes

Antes de fazer o deploy, você **DEVE** personalizar alguns campos com suas informações reais.

---

## 📝 1. Informações da Empresa

### Arquivo: `index.html` e `termos.html`

**✅ JÁ CONFIGURADO:**
- **Desenvolvedor:** Alan Delima (delima)
- **CPF:** 362.120.058-42
- **Tipo:** Desenvolvedor Independente

Se precisar alterar, procure e substitua:

```html
<!-- ATUAL: -->
Alan Delima
CPF: 362.120.058-42
Desenvolvedor Independente

<!-- PODE TROCAR POR: -->
Sua Empresa Ltda
CNPJ: 00.000.000/0001-00
São Paulo - SP
```

**Locais para trocar:**
- Seção "Contato" em `index.html` (linha ~950)
- Seção "Contato" em `termos.html` (linha ~620)
- Seção "Lei Aplicável" em `termos.html` (linha ~580)

---

## 📧 2. Emails de Contato

Por padrão, estão configurados emails de exemplo:
- `contato@d-dieta.com.br`
- `privacidade@d-dieta.com.br`
- `dpo@d-dieta.com.br`
- `suporte@d-dieta.com.br`

### Se você tiver um domínio próprio:
Substitua todos os emails pelo seu domínio.

### Se NÃO tiver domínio ainda:
Use um email real (Gmail, Outlook, etc.) temporariamente:
```html
<!-- Exemplo: -->
<a href="mailto:seuemail@gmail.com">seuemail@gmail.com</a>
```

**Onde trocar:**
- `index.html`: Seção "Contato" (4 cards de contato)
- `termos.html`: Seção "Contato" (4 cards de contato)
- `README.md`: Linha de suporte
- `DEPLOY.md`: Linha de dúvidas

---

## 🎨 3. Cores do Site

### Arquivo: `styles.css` (linhas 4-15)

Cores padrão (verde saúde):
```css
:root {
    --primary-color: #10b981;      /* Verde principal */
    --primary-dark: #059669;       /* Verde escuro */
    --primary-light: #d1fae5;      /* Verde claro */
}
```

### Mudar para azul:
```css
:root {
    --primary-color: #3b82f6;      /* Azul principal */
    --primary-dark: #2563eb;       /* Azul escuro */
    --primary-light: #dbeafe;      /* Azul claro */
}
```

### Mudar para roxo:
```css
:root {
    --primary-color: #8b5cf6;      /* Roxo principal */
    --primary-dark: #7c3aed;       /* Roxo escuro */
    --primary-light: #ede9fe;      /* Roxo claro */
}
```

### Mudar para laranja:
```css
:root {
    --primary-color: #f59e0b;      /* Laranja principal */
    --primary-dark: #d97706;       /* Laranja escuro */
    --primary-light: #fef3c7;      /* Laranja claro */
}
```

---

## 💰 4. Preços do Plano Premium

### Alterar valor da assinatura:

**Arquivo:** `index.html` (Seção #planos, linha ~480)
```html
<!-- ORIGINAL: -->
<div class="plan-price">R$ 3,99 <span>/ mês</span></div>

<!-- SE QUISER MUDAR PARA R$ 4,99: -->
<div class="plan-price">R$ 4,99 <span>/ mês</span></div>
```

**Arquivo:** `termos.html` (Seção #assinatura, linha ~150)
```html
<!-- ORIGINAL: -->
<li><strong>Custo:</strong> R$ 3,99/mês</li>

<!-- SE QUISER MUDAR: -->
<li><strong>Custo:</strong> R$ 4,99/mês</li>
```

**⚠️ IMPORTANTE:** Se mudar o preço, altere em:
- `index.html`: Seção de Planos (2 lugares)
- `termos.html`: Seção de Assinatura
- Google Play Console (ao configurar a assinatura)

---

## 🔗 5. Links de Redes Sociais

### Arquivo: `index.html` e `termos.html` (Footer)

```html
<!-- ORIGINAL (placeholders): -->
<a href="#" aria-label="Instagram">📷</a>
<a href="#" aria-label="Facebook">👍</a>
<a href="#" aria-label="Twitter">🐦</a>
<a href="#" aria-label="YouTube">📹</a>

<!-- SUBSTITUIR POR SEUS LINKS REAIS: -->
<a href="https://instagram.com/d_dieta" aria-label="Instagram">📷</a>
<a href="https://facebook.com/ddieta" aria-label="Facebook">👍</a>
<a href="https://twitter.com/ddieta" aria-label="Twitter">🐦</a>
<a href="https://youtube.com/@ddieta" aria-label="YouTube">📹</a>
```

**Se não tiver redes sociais ainda:**
- Remova as linhas dos links
- Ou deixe `href="#"` (desabilitados)

---

## 📅 6. Data de Atualização

### Sempre que modificar as políticas, atualize a data:

**Arquivo:** `index.html` e `termos.html`
```html
<!-- Procure por: -->
<div class="hero-badge">📄 Atualizado em 05/02/2026</div>

<!-- Mude para a data atual: -->
<div class="hero-badge">📄 Atualizado em 15/01/2025</div>
```

---

## 🏢 7. Informações da Empresa/Desenvolvedor

### Adicionar CNPJ (se tiver):

**Arquivo:** `index.html` (Seção Contato)

Adicione depois do endereço:
```html
<div class="contact-card">
    <div class="contact-icon">📄</div>
    <h4>CNPJ</h4>
    <p>00.000.000/0001-00</p>
</div>
```

### Se for Pessoa Física:

**✅ JÁ CONFIGURADO** como Pessoa Física:
```html
<p>Alan Delima</p>
<p>CPF: 362.120.058-42</p>
<p>Desenvolvedor Independente</p>
```

Se quiser trocar para Empresa:
```html
<p>Sua Empresa Ltda</p>
<p>CNPJ: 00.000.000/0001-00</p>
```

---

## 🌐 8. Idioma e Localização

### Mudar para outro idioma:

Se você quiser traduzir para inglês, espanhol, etc.:

1. Duplique `index.html` → `index-en.html`
2. Traduza todo o conteúdo
3. Adicione seletor de idioma no header:

```html
<div class="language-selector">
    <a href="index.html">🇧🇷 PT</a>
    <a href="index-en.html">🇺🇸 EN</a>
</div>
```

---

## 📊 9. Google Analytics (Opcional)

### Se quiser rastrear visitantes:

1. Crie conta no Google Analytics
2. Obtenha o código de rastreamento (GA4)
3. Adicione antes de `</head>` em **ambos os arquivos**:

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

Substitua `G-XXXXXXXXXX` pelo seu ID real.

---

## 🖼️ 10. Favicon (Ícone do Site)

### Adicionar ícone que aparece na aba do navegador:

1. Crie um ícone 32x32px (pode usar: https://favicon.io/)
2. Salve como `favicon.ico` na pasta `politica-privacidade`
3. Adicione no `<head>` de ambos os arquivos:

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
```

---

## 🔒 11. HTTPS (Segurança)

### Vercel já fornece HTTPS automaticamente! ✅

Seu site será:
- `https://seu-site.vercel.app` (com "s" de seguro)
- Certificado SSL gratuito
- Renovação automática

Não precisa fazer nada!

---

## 📱 12. Open Graph (Compartilhamento em Redes Sociais)

### Para que seu link fique bonito quando compartilhado:

Adicione no `<head>` de `index.html`:

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://seu-site.vercel.app/">
<meta property="og:title" content="D-Dieta - Política de Privacidade">
<meta property="og:description" content="Política de Privacidade do aplicativo D-Dieta. Conheça como protegemos seus dados.">
<meta property="og:image" content="https://seu-site.vercel.app/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://seu-site.vercel.app/">
<meta property="twitter:title" content="D-Dieta - Política de Privacidade">
<meta property="twitter:description" content="Política de Privacidade do aplicativo D-Dieta.">
<meta property="twitter:image" content="https://seu-site.vercel.app/og-image.jpg">
```

---

## ✅ Checklist Final Antes do Deploy

Antes de fazer upload no Vercel, verifique:

- [ ] **Nome da empresa/desenvolvedor** atualizado
- [ ] **Endereço completo** preenchido
- [ ] **Emails de contato** funcionais
- [ ] **Preços** corretos (R$ 3,99 ou outro valor)
- [ ] **Data de atualização** atual
- [ ] **Links de redes sociais** (ou removidos)
- [ ] **CNPJ/CPF** (se aplicável)
- [ ] **Cores** do seu gosto
- [ ] **Testou localmente** (abrindo `index.html` no navegador)
- [ ] **Todos os links** funcionam
- [ ] **Formulário de contato** configurado

---

## 🧪 Como Testar Localmente (Antes do Deploy)

### Método 1: Abrir direto no navegador
1. Vá na pasta `politica-privacidade`
2. Clique duas vezes em `index.html`
3. Abre no navegador padrão
4. Teste todos os links

### Método 2: Servidor local (recomendado)
1. Instale Python (se não tiver)
2. Abra terminal na pasta `politica-privacidade`
3. Execute:
   ```bash
   python -m http.server 8000
   ```
4. Abra: `http://localhost:8000`
5. Teste tudo

### Método 3: VS Code Live Server
1. Instale extensão "Live Server" no VS Code
2. Abra `index.html`
3. Clique direito → "Open with Live Server"
4. Testa automaticamente!

---

## 🚀 Pronto para Deploy?

Depois de todas as customizações:

1. ✅ Revise tudo uma última vez
2. ✅ Siga o `DEPLOY.md` para fazer upload no Vercel
3. ✅ Teste o site publicado
4. ✅ Adicione o URL no Google Play Console

---

**Boa sorte! 🥗💚**

Se precisar de ajuda, entre em contato via email configurado ou abra uma issue no GitHub.
