# 🔒 Política de Segurança

## Relatando Vulnerabilidades

Se você descobrir uma vulnerabilidade de segurança no **Fórmula Tech Lead**, por favor **não abra uma Issue pública**. Em vez disso:

**Envie um email para:** 📧 `contato@formulatechlead.com.br`

**Inclua:**
- Descrição detalhada da vulnerabilidade
- Passos para reproduzir
- Possível impacto
- Sugestões de fix (se tiver)

---

## Timeline de Resposta

Nos comprometemos a:

1. **Reconhecer** seu relatório em 24 horas
2. **Investigar** a vulnerabilidade em até 3 dias
3. **Corrigir** e fazer release de patch em até 14 dias
4. **Creditar** você pela descoberta (se desejar)

---

## Práticas Seguras

Implementamos as seguintes práticas de segurança:

✅ **Dependências Atualizadas**
- Auditorias regulares com `npm audit`
- Atualizações de segurança prioritárias
- Dependências mínimas e bem revisadas

✅ **Variáveis de Ambiente**
- Nenhuma chave de API no código
- `.env.example` documentado
- `.gitignore` bem configurado

✅ **Código Seguro**
- Sem SQL injection (não há backend)
- Validação de entrada
- Proteção contra XSS
- Boas práticas de React

✅ **GitHub Security**
- Branch protection rules
- Require pull request reviews
- Status checks before merge
- Renovação de dependências automática

---

## Não Divulgue Antes

Por favor não divulgue publicamente até que:

1. Um patch esteja disponível, OU
2. 90 dias tenham passado desde o relatório, O QUE FOR PRIMEIRO

Esta é uma prática comum na indústria e ajuda a proteger os usuários.

---

## Obrigado

Obrigado por ajudar a manter o **Fórmula Tech Lead** seguro! 🙏

Sua consciência de segurança é muito apreciada pela comunidade.

---

**Segurança em primeiro lugar.** 🔐
