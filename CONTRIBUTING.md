# 🤝 Guia de Contribuição

Obrigado por se interessar em contribuir para o **Fórmula Tech Lead**! 🎉

Este documento fornece diretrizes e instruções para que você possa contribuir de forma eficaz ao projeto.

---

## 📋 Código de Conduta

Este projeto adota um [Código de Conduta](CODE_OF_CONDUCT.md) que esperamos que todos os contribuidores sigam. Por favor, leia-o antes de contribuir.

---

## 🚀 Como Contribuir

### 1️⃣ Reportar Bugs

Se você encontrar um bug, por favor abra uma [Issue](https://github.com/brunocaetanobrito/formulatechlead/issues) com:

- **Descrição clara** do problema
- **Passos para reproduzir** o bug
- **Comportamento esperado** vs **comportamento atual**
- **Screenshots ou logs** (se aplicável)
- **Sistema operacional e browser** utilizados

**Exemplo:**
```
Título: Botão "Solicitar Diagnóstico" não responde no Safari

Descrição:
Ao clicar no botão "Solicitar Diagnóstico" no header, 
nada acontece no Safari versão 15.3.

Passos:
1. Abra o site no Safari 15.3
2. Clique no botão "Solicitar Diagnóstico"
3. Nada acontece (esperado: redirecionar para Instagram)

Browser: Safari 15.3
SO: macOS 12.3
```

---

### 2️⃣ Sugerir Melhorias

Sugestões são bem-vindas! Abra uma Issue com a tag `enhancement` incluindo:

- **Problema que resolve** ou **valor que agrega**
- **Descrição detalhada** da funcionalidade
- **Exemplos ou mockups** (se aplicável)
- **Possíveis implementações** (se tiver ideias)

---

### 3️⃣ Submeter Pull Requests

#### **Antes de começar:**

1. **Faça um Fork** do repositório
2. **Clone localmente**: `git clone https://github.com/seu-username/formulatechlead.git`
3. **Navegue para o diretório**: `cd formulatechlead`
4. **Instale dependências**: `npm install --legacy-peer-deps`

#### **Desenvolvimento:**

```bash
# Crie uma branch descritiva
git checkout -b feature/melhor-componente-hero
# ou
git checkout -b fix/bug-scroll-mobile

# Inicie o servidor de desenvolvimento
npm run dev

# Faça suas mudanças...

# Teste antes de fazer commit
npm run build  # Certifique-se que o build passa

# Commit com mensagens claras
git commit -m "feat: adiciona nova funcionalidade X"
git commit -m "fix: corrige bug no componente Y"
git commit -m "docs: atualiza README com instruções"
```

#### **Convenção de Commits:**

Use mensagens de commit descritivas se possível:

- `feat:` — Nova funcionalidade
- `fix:` — Corrige um bug
- `docs:` — Mudanças na documentação
- `style:` — Formatação, sem mudanças lógicas
- `refactor:` — Refatoração de código
- `test:` — Adição ou atualização de testes
- `chore:` — Atualizações de build, dependências, etc.

**Exemplos:**
```bash
git commit -m "feat: adiciona ScrollToTopButton com animação"
git commit -m "fix: corrige vazamento de memória no useEffect"
git commit -m "docs: melhora instruções de instalação"
git commit -m "refactor: simplifica lógica do ProductsDetail"
```

#### **Abrindo o Pull Request:**

1. **Faça push** para sua fork: `git push origin feature/seu-feature`
2. **Abra um PR** no repositório principal
3. **Preencha o template** do PR com:
   - Descrição clara do que foi mudado
   - Por quê a mudança é necessária
   - Como testar as mudanças
   - Screenshots (se UI/UX)
   - Referência a Issues relacionadas (#123)

**Exemplo de PR:**
```markdown
## Descrição
Adiciona um novo componente para mostrar estatísticas de carreira.

## Tipo de Mudança
- [x] Feature nova
- [ ] Bug fix
- [ ] Breaking change

## Como Testar
1. Instale dependências: `npm install`
2. Inicie dev server: `npm run dev`
3. Navegue até a página Home
4. Veja o novo componente de estatísticas renderizando

## Screenshots
[Adicione screenshots aqui]

## Referência
Closes #42
```

---

## 📐 Padrões de Código

### React/JSX

- Use **functional components** e hooks
- Nome de componentes em **PascalCase**: `MyComponent.jsx`
- Props bem tipadas (use comentários JSDoc se sem TypeScript)
- Destructure props quando fizer sentido

```jsx
// ✅ Bom
const ProductCard = ({ title, description, onClick }) => {
  return (
    <div onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// ❌ Evitar
const productCard = (props) => {
  return (
    <div onClick={props.onClick}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};
```

### CSS/Tailwind

- Use Tailwind CSS para estilização
- Evite CSS customizado quando possível
- Use classes semânticas e explicitas
- Mobile-first approach

```jsx
// ✅ Bom
<button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors md:px-6">
  Click me
</button>

// ❌ Evitar
<button style={{ padding: '10px 20px', backgroundColor: 'blue' }}>
  Click me
</button>
```

### Nomes de Variáveis

- Use nomes **descritivos** e em **inglês**
- camelCase para variáveis: `userProfile`, `isLoading`
- UPPER_CASE para constantes: `DEFAULT_TIMEOUT`, `API_URL`

```jsx
// ✅ Bom
const [isMenuOpen, setIsMenuOpen] = useState(false);
const handleNavigationClick = (sectionId) => { ... };

// ❌ Evitar
const [m, setM] = useState(false);
const handleClick = (id) => { ... };
```

---

## 🧪 Testes

Enquanto o projeto cresce, encorajamos adicionar testes. Se contribuir com testes:

- Use Jest como test runner
- Escreva testes para componentes críticos
- Mantenha cobertura acima de 70%

```bash
# Rodar testes (quando disponível)
npm test

# Com cobertura
npm test -- --coverage
```

---

## 📦 Dependências

Antes de adicionar uma nova dependência:

1. **Verifique se já existe** algo similar
2. **Considere o tamanho do bundle**
3. **Prefira bibliotecas bem mantidas**
4. **Comunique na Issue** antes de usar nova lib

Se precisar adicionar:
```bash
npm install nome-do-pacote
git add package.json package-lock.json
git commit -m "chore: adiciona nova dependência X"
```

---

## 🔍 Checklist Antes de Submeter PR

- [ ] Código segue os padrões do projeto
- [ ] Commit messages são descritivas
- [ ] Sem console.log() ou código comentado
- [ ] Build passa sem erros: `npm run build`
- [ ] Testei no mobile e desktop
- [ ] README atualizado (se necessário)
- [ ] Nenhuma dependência não utilizada
- [ ] Sem breaking changes (ou bem documentado)

---

## 🎯 Áreas que Precisam de Ajuda

Procuramos por contribuições em:

- ✨ **UI/UX Improvements** — Design enhancements
- 🐛 **Bug Fixes** — Correções de issues
- 📚 **Documentação** — Melhorias no README, comentários
- 🌍 **Internacionalização** — Suporte para múltiplos idiomas
- ♿ **Acessibilidade** — Melhorias a11y
- 📱 **Mobile** — Otimizações responsivas

---

## ❓ Dúvidas ou Problemas?

- 📧 **Email**: contato@formulatechlead.com.br
- 💬 **Discussões**: Crie uma Discussion no GitHub
- 🔗 **LinkedIn**: [@brunocaetanobrito](https://www.linkedin.com/in/brunocaetanobrito/)

---

## 📜 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a [Licença MIT](LICENSE).

---

## 🙏 Obrigado!

Toda contribuição, não importa o tamanho, ajuda a melhorar o **Fórmula Tech Lead** para a comunidade de desenvolvedores. Obrigado por ser parte disso! ❤️

Happy coding! 🚀
