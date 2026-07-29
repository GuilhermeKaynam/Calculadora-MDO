# MDO Vidraçaria - Calculadora de Orçamentos 🪟

Calculadora de orçamentos para vidraçaria, calcula o preço de vidros (por m², tipo, lapidação e retirada/instalação) e de boxes de banheiro (reto ou de canto), com opção de taxa de parcelamento.

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel&logoColor=white)](https://vercel.com)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](#licença)

## ✨ Highlights

- 🪟 **Calculadora de vidros** — mais de 15 tipos (incolor, fumê, verde, espelho, fantasia), com preço por m² para retirada ou instalação
- 🚿 **Calculadora de box** — box reto ou de canto, com cores incolor, fumê e verde
- ✂️ **Adicional de lapidação** — acréscimo automático de 20% para vidro lapidado
- 💳 **Taxa de parcelamento opcional** — acréscimo de 10% quando ativada
- 📜 **Histórico de cálculos** — mantém os orçamentos gerados na sessão
- 📱 **Interface responsiva** — construída com Tailwind CSS

## 🚀 Quick Start

```bash
git clone https://github.com/GuilhermeKaynam/Calculadora-MDO.git
cd Calculadora-MDO
npm install
npm run dev
```

Acesse `http://localhost:5173` — a aba **Calculadora** abre o orçamento de vidros e a aba **Box** o orçamento de boxes.

## 📦 Instalação detalhada

### Pré-requisitos
- [Node.js](https://nodejs.org/) 18+
- npm (instalado junto com o Node.js)

### Passo a passo
```bash
# 1. Clone o repositório
git clone https://github.com/GuilhermeKaynam/Calculadora-MDO.git

# 2. Entre na pasta do projeto
cd Calculadora-MDO

# 3. Instale as dependências
npm install

# 4. Rode o servidor de desenvolvimento
npm run dev
```

> Não há variáveis de ambiente ou backend — os preços ficam em tabelas locais (`src/data`) e o histórico de orçamentos é mantido apenas em memória durante a sessão.

## 💻 Uso / Exemplos

### 1. Orçamento de vidro
1. Acesse a aba **Calculadora**
2. Selecione o tipo de vidro (ex: `6 mm Incolor`)
3. Informe altura e largura em metros
4. Marque **Vidro Lapidado?** se aplicável (+20%)
5. Escolha **Retirada** ou **Instalação**
6. Marque **Taxa de Parcelamento** se necessário (+10%)
7. O valor total do orçamento é calculado automaticamente

### 2. Orçamento de box
1. Acesse a aba **Box**
2. Escolha **Box Reto** ou **Box de Canto**
3. Selecione a cor do vidro (Incolor, Fumê ou Verde)
4. Informe a(s) largura(s) em metros (dois campos no box de canto)
5. Marque a taxa de parcelamento se necessário
6. Consulte o histórico de cálculos gerado na sessão

## 🗂️ Estrutura do projeto

```
Calculadora-MDO/
├── src/
│   ├── components/
│   │   ├── GlassCalculator.tsx         # Container da calculadora de vidros
│   │   ├── CalculatorForm.tsx          # Formulário de vidros
│   │   ├── ResultDisplay.tsx           # Exibição do resultado do vidro
│   │   ├── CalculationHistory.tsx      # Histórico de orçamentos de vidro
│   │   ├── BoxCalculator.tsx           # Container da calculadora de box
│   │   ├── BoxCalculatorForm.tsx       # Formulário de box
│   │   ├── BoxResultDisplay.tsx        # Exibição do resultado do box
│   │   └── BoxCalculationHistory.tsx   # Histórico de orçamentos de box
│   ├── context/
│   │   ├── GlassContext.tsx            # Estado global da calculadora de vidros
│   │   └── BoxContext.tsx              # Estado global da calculadora de box
│   ├── data/
│   │   ├── glassData.ts                # Tabela de preços por tipo de vidro
│   │   └── boxData.ts                  # Tabela de preços por cor de box
│   ├── utils/                          # Funções de cálculo
│   ├── App.tsx                         # Rotas e navegação
│   └── main.tsx                        # Ponto de entrada da aplicação
├── index.html
├── package.json
├── tailwind.config.js
├── vercel.json                         # Configuração de deploy (Vercel)
├── vite.config.ts
└── tsconfig.json
```

## 🛠️ Desenvolvimento

### Stack
- **React 18** + **TypeScript**
- **Vite** — build tool e dev server
- **React Router DOM** — navegação entre calculadoras
- **Context API** — gerenciamento de estado (`GlassContext`, `BoxContext`)
- **Tailwind CSS** — estilização
- **Lucide React** — ícones
- **ESLint** — padronização de código

### Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run preview` | Pré-visualiza o build de produção |
| `npm run lint` | Executa o ESLint no projeto |

### Atualizando os preços
Os valores de referência ficam em `src/data/glassData.ts` (vidros) e `src/data/boxData.ts` (boxes). Basta editar os valores nesses arquivos para refletir uma nova tabela de preços — não é necessário alterar a lógica de cálculo.

## 🚢 Deploy

O projeto está configurado para deploy na [Vercel](https://vercel.com), com rewrite de todas as rotas para `index.html` (SPA) definido em `vercel.json`.

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Faça commit das mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Envie para o seu fork (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## ❓ FAQ

**Os orçamentos ficam salvos permanentemente?**
Não. O histórico de cálculos existe apenas durante a sessão (estado em memória via Context API) e é perdido ao recarregar a página.

**Como os preços dos vidros são calculados?**
Cada tipo de vidro tem um preço por m² para retirada e outro para instalação (tabela em `glassData.ts`). O total é multiplicado pela área (altura × largura), com acréscimos opcionais de lapidação (20%) e parcelamento (10%).

**Qual a diferença entre Box Reto e Box de Canto?**
O Box Reto usa uma única largura; o Box de Canto usa duas larguras (dois vãos), refletindo a instalação em cantos de banheiro.

**A aplicação tem backend ou banco de dados?**
Não — é uma aplicação front-end standalone, com os dados de preços definidos localmente no código.

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.

---

Desenvolvido por [GuilhermeKaynam](https://github.com/GuilhermeKaynam)
