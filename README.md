# 🥗 D-Dieta - Política de Privacidade & Termos de Uso

Website de políticas e termos para o aplicativo Android **D-Dieta** - Fitness Recipe App.

## 📁 Estrutura do Projeto

```
politica-privacidade/
├── index.html      # Política de Privacidade
├── termos.html     # Termos de Uso
├── styles.css      # Estilos responsivos
├── script.js       # Funcionalidades interativas
└── README.md       # Este arquivo
```

## 🚀 Como Usar

### Deploy no Vercel (Recomendado)

1. **Criar conta no Vercel** (se ainda não tiver):
   - Acesse: https://vercel.com/signup
   - Cadastre-se gratuitamente com GitHub, GitLab ou email

2. **Instalar Vercel CLI** (opcional):
   ```bash
   npm install -g vercel
   ```

3. **Deploy via CLI**:
   ```bash
   cd politica-privacidade
   vercel
   ```

4. **Ou Deploy via Interface Web**:
   - Acesse: https://vercel.com/new
   - Clique em "Add New" → "Project"
   - Faça upload da pasta `politica-privacidade`
   - Configure:
     - Framework Preset: **Other**
     - Root Directory: **.**
     - Build Command: (deixe vazio)
     - Output Directory: **.**
   - Clique em "Deploy"

5. **Obter URL**:
   - Após deploy, você receberá um URL como: `https://d-dieta-privacy.vercel.app`
   - Use esse URL no Google Play Console

### Deploy Alternativo (GitHub Pages)

1. Crie um repositório no GitHub
2. Faça upload da pasta `politica-privacidade`
3. Vá em Settings → Pages
4. Selecione branch `main` e pasta `/ (root)`
5. Salve e aguarde o deploy

## 📄 Páginas Incluídas

### 1. Política de Privacidade (`index.html`)
- ✅ Informações sobre coleta de dados
- ✅ Como usamos os dados
- ✅ Compartilhamento com terceiros (Firebase, AdMob)
- ✅ Segurança e proteção
- ✅ Direitos LGPD
- ✅ **Comparação de Planos** (Grátis vs Premium R$ 3,99)
- ✅ Política de anúncios
- ✅ Formulário de contato

### 2. Termos de Uso (`termos.html`)
- ✅ Aceitação dos termos
- ✅ Descrição do serviço
- ✅ Cadastro e conta de usuário
- ✅ **Assinatura Premium** (R$ 3,99/mês)
- ✅ Uso permitido e proibido
- ✅ Propriedade intelectual
- ✅ Aviso médico
- ✅ Limitação de responsabilidade
- ✅ Cancelamento e reembolso
- ✅ Lei aplicável (Brasil - LGPD)

## 🎨 Recursos do Website

- 📱 **Design Responsivo** (mobile, tablet, desktop)
- 🎨 **Material Design** inspirado
- ♿ **Acessível** (WCAG AA)
- ⚡ **Performance otimizada**
- 🌈 **Tema moderno** (verde saúde/fitness)
- 🔗 **Navegação suave** (smooth scroll)
- 📊 **Barra de progresso** de leitura
- 🔝 **Botão "Voltar ao topo"**
- 📧 **Formulário de contato** funcional
- 🔍 **SEO otimizado**

## 🛠️ Customização

### Alterar Cores
Edite as variáveis CSS em `styles.css`:
```css
:root {
    --primary-color: #10b981;    /* Verde principal */
    --primary-dark: #059669;     /* Verde escuro */
    --primary-light: #d1fae5;    /* Verde claro */
    /* ... */
}
```

### Alterar Textos
- Política de Privacidade: edite `index.html`
- Termos de Uso: edite `termos.html`
- **IMPORTANTE:** Atualize:
  - `[Seu Nome ou Empresa]`
  - `[Sua Cidade]`
  - `[Seu endereço completo]`
  - Emails de contato

### Adicionar Analytics
No final de `index.html` e `termos.html`, antes de `</body>`:
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

## 📋 Checklist para Google Play Console

Após fazer o deploy, você precisa:

1. ✅ **Copiar URL** do site hospedado
   - Exemplo: `https://d-dieta-privacy.vercel.app`

2. ✅ **Testar links:**
   - Política de Privacidade: `https://seu-site.vercel.app/`
   - Termos de Uso: `https://seu-site.vercel.app/termos.html`

3. ✅ **Adicionar no Play Console:**
   - Vá em: **Configuração do aplicativo** → **Privacidade**
   - Cole o URL da Política de Privacidade
   - Salve

4. ✅ **Verificar requisitos:**
   - [ ] URL acessível publicamente
   - [ ] Não requer login
   - [ ] Carrega em < 3 segundos
   - [ ] Responsivo (mobile-friendly)
   - [ ] Menciona o nome do app (D-Dieta)
   - [ ] Explica coleta de dados
   - [ ] Detalha uso de anúncios (AdMob)
   - [ ] Lista dados compartilhados (Firebase, Google)

## 🔒 Requisitos LGPD Atendidos

- ✅ Transparência sobre coleta de dados
- ✅ Base legal para tratamento
- ✅ Identificação do controlador de dados
- ✅ Direitos dos titulares (acesso, correção, exclusão, etc.)
- ✅ Informações sobre compartilhamento
- ✅ Medidas de segurança
- ✅ Prazo de armazenamento
- ✅ Contato do DPO (Data Protection Officer)
- ✅ Transferência internacional (se aplicável)
- ✅ Cookies e rastreamento

## 📞 Suporte

Se tiver problemas com o deploy ou precisar de ajuda:

1. **Vercel:** https://vercel.com/support
2. **Email:** suporte@d-dieta.com.br
3. **GitHub Issues:** (se você criar um repositório)

## 📅 Atualizações

Última atualização: **05/02/2026**

Lembre-se de atualizar a data sempre que modificar as políticas!

## ⚖️ Licença

Este projeto é parte do aplicativo D-Dieta.  
Desenvolvido por: **Alan Delima** (delima) - CPF: 362.120.058-42  
© 2026 D-Dieta. Todos os direitos reservados.

---

**Desenvolvido com 💚 no Brasil** 🇧🇷
