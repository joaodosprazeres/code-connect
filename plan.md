# Plano: Página de Login (apps/web)

## Contexto

`apps/web` é hoje só o starter Vite React-TS (`src/App.tsx` demo). Precisamos da **página de login** do CodeConnect (design Figma node `155-3785`), construída com **Atomic Design**. A página de **cadastro** virá depois: mesmo layout base, banner diferente e campos diferentes — então a arquitetura já deve isolar o *shell* reutilizável do conteúdo específico de cada tela.

Pré-requisitos de infra (CLAUDE.md exige, nada instalado ainda):
- **Tailwind CSS** — instalar e integrar no Vite.
- **Vitest + React Testing Library** — teste por componente é obrigatório.

**Design source:** tokens exatos (cores hex, fontes, spacing, textos, imagem do banner) serão extraídos do **Figma MCP** no nó `155-3785` via `get_variable_defs` / `get_code` / `get_image` no momento da implementação. Até o MCP estar disponível na sessão, os valores abaixo são estruturais; os tokens visuais entram do Figma.

## Arquitetura de reuso (login + cadastro)

Chave da reutilização = separar **layout** de **conteúdo**:

```
AuthLayout (template)  ← shell 2 colunas, compartilhado
  ├─ slot: banner   → AuthBanner (organism) — imagem/texto trocáveis via props
  └─ slot: form     → LoginForm | (futuro) SignUpForm (organisms)

LoginPage (page) = AuthLayout + <AuthBanner variant login> + <LoginForm/>
SignUpPage (futuro) = AuthLayout + <AuthBanner variant signup> + <SignUpForm/>
```

`AuthLayout` recebe `banner` e `children` (ou `form`) como props/slots — não conhece login nem cadastro. Assim a página de cadastro reaproveita 100% do layout trocando só os dois slots.

## Estrutura de arquivos (Atomic Design)

Criar sob `apps/web/src/components/`:

```
atoms/
  Button/        Button.tsx  Button.test.tsx  index.ts
  Input/         Input.tsx   Input.test.tsx   index.ts
  Label/         Label.tsx   Label.test.tsx   index.ts
  TextLink/      TextLink.tsx TextLink.test.tsx index.ts   (âncora estilizada: "esqueci senha", "cadastre-se")
  Logo/          Logo.tsx    Logo.test.tsx    index.ts
molecules/
  FormField/     FormField.tsx FormField.test.tsx index.ts (Label + Input + mensagem de erro)
organisms/
  AuthBanner/    AuthBanner.tsx AuthBanner.test.tsx index.ts (imagem + heading + subtexto, via props)
  LoginForm/     LoginForm.tsx  LoginForm.test.tsx  index.ts (email, senha, submit, links)
templates/
  AuthLayout/    AuthLayout.tsx AuthLayout.test.tsx index.ts (grid 2 colunas: banner | conteúdo)
pages/
  LoginPage/     LoginPage.tsx  LoginPage.test.tsx  index.ts
```

Componentes-chave e responsabilidades:
- **Button** — variantes (`primary` etc.), `type`, `disabled`, encaminha props nativas de `<button>`.
- **Input** — controlado/uncontrolled, `type`, encaminha props nativas de `<input>` + `ref`.
- **FormField** — compõe `Label` + `Input` + slot de erro; recebe `label`, `error`, `id`. É o bloco reutilizado por qualquer form (login e cadastro).
- **AuthBanner** — 100% orientado a props (`title`, `description`, `image`), zero texto hardcoded → cadastro passa outro conteúdo.
- **LoginForm** — monta 2 `FormField` (email, senha) + `Button` submit + `TextLink`s; `onSubmit` via prop; estado local dos campos.
- **AuthLayout** — duas colunas responsivas (banner escondido/empilhado no mobile); slots `banner` e `children`.
- **LoginPage** — orquestra: passa `AuthBanner` de login + `LoginForm` pro `AuthLayout`.

## Scaffold de infra

1. **Tailwind** (`apps/web`):
   - `pnpm --filter web add -D tailwindcss @tailwindcss/vite`
   - `vite.config.ts`: adicionar plugin `tailwindcss()`.
   - `src/index.css`: `@import "tailwindcss";` + `@theme` com tokens do Figma (cores/fontes). Remover CSS do starter.
2. **Vitest + RTL** (`apps/web`):
   - `pnpm --filter web add -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom`
   - `vite.config.ts`: bloco `test` (`environment: 'jsdom'`, `globals: true`, `setupFiles`).
   - `src/test/setup.ts`: `import '@testing-library/jest-dom'`.
   - `package.json` (web): script `"test": "vitest"`.
   - `tsconfig.app.json`: adicionar `"vitest/globals"` e `"@testing-library/jest-dom"` em `types` (cuidado: build usa `tsc -b`, então `*.test.tsx` não pode quebrar o build — excluir specs do `tsconfig.app.json` include ou garantir tipos).
   - Raiz `package.json`: adicionar `"test:web": "pnpm --filter web test"`.
3. **Montagem**: `App.tsx` renderiza `<LoginPage/>` (substitui demo do starter); limpar `App.css`/assets não usados do starter.

## Convenções

- Um teste por componente cobrindo render principal + interação/variante primária (ex.: `Button` dispara `onClick`; `LoginForm` chama `onSubmit` com valores; `AuthBanner` renderiza título/descrição recebidos).
- Estilização só com classes Tailwind; tokens de cor/fonte vêm de `@theme` (do Figma), não valores mágicos espalhados.
- Cada componente exporta via `index.ts` (import limpo por pasta).
- `oxlint` deve passar (`pnpm lint:web`).

## Verificação (end-to-end)

1. `pnpm --filter web test` — todos os specs passam.
2. `pnpm build:web` — `tsc -b && vite build` sem erro de tipo (valida integração TS + Tailwind).
3. `pnpm lint:web` — oxlint limpo.
4. `pnpm dev:web` — abrir no browser, conferir layout de login contra o Figma `155-3785` (2 colunas, banner à esquerda, form à direita; responsivo no mobile).

## Aberto até o Figma MCP responder

Extrair do nó `155-3785`: paleta (hex), família/pesos de fonte, textos exatos (título/CTA/links), imagem do banner, medidas/spacing. Preenchem `@theme` e os componentes de apresentação. Nenhuma mudança na arquitetura acima — só valores.
