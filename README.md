# Jovi Vision — Sprint 4

Projeto acadêmico da equipe Smartech para as disciplinas
Front-end Design e Web Development.

Evolução do projeto da Sprint 3, mantendo a proposta Jovi Vision
e adicionando nova interface, navegação com rotas, login demonstrativo
e integração com API.

## Links

- Site: https://sprint04-jovi.vercel.app/
- Repositório: https://github.com/artur2774/Sprint04-Jovi

## Tecnologias e dependências

- React: construção da interface com componentes e props.
- Vite: ambiente de desenvolvimento e build.
- Tailwind CSS: estilização e responsividade.
- React Router: rotas públicas e privadas.
- MockAPI: armazenamento remoto das avaliações.
- ESLint: análise estática do código.
- Vercel: publicação da aplicação.

As dependências e suas versões estão no package.json.
O package-lock.json registra as versões resolvidas.

## Requisitos para execução

- Node.js 22.12 ou superior.
- npm.
- Acesso à internet para instalar dependências e consumir a API.

## Instalação e execução

```bash
git clone https://github.com/artur2774/Sprint04-Jovi.git
cd Sprint04-Jovi
npm ci
npm run dev
```

Abra o endereço informado no terminal pelo Vite.

Também é possível extrair o ZIP da entrega, abrir a pasta que contém
o package.json e executar npm ci e npm run dev.

## Comandos disponíveis

```bash
npm run dev      # Inicia o ambiente de desenvolvimento
npm run build    # Gera a versão de produção em dist
npm run preview  # Permite visualizar o build localmente
npm run lint     # Executa a análise estática
```

Execute npm run build antes de npm run preview.

## Funcionalidades

- Apresentação da proposta Jovi Vision.
- Seções de problemas, funcionalidades e aplicações.
- Navegação responsiva com menu para celular.
- Cadastro e consulta de avaliações pela API.
- Cálculo da nota média e do total de avaliações.
- Mensagens de carregamento, sucesso e erro.
- Login demonstrativo e painel com rota protegida.
- Encerramento da sessão.
- Protótipo interativo inspirado nas telas de câmera e no pitch Jovi.
- Fluxo demonstrativo em cinco etapas: câmera, detecção de contexto,
  sugestão de pasta, processamento e resultado.
- Edição da pasta sugerida.
- Visualização de documento e resumo de exemplo.
- Compartilhamento do texto pelo navegador, com alternativa de cópia.
- Grade de enquadramento e reinício da demonstração.

O protótipo utiliza conteúdo fixo para simular captura, reconhecimento
de contexto, OCR, correção de perspectiva, organização, PDF e resumo.
Ele não acessa a câmera, não gera um arquivo PDF real e não executa IA
nem integrações com Gemini, Google Drive ou Google Fotos.

O compartilhamento ou a cópia do texto de exemplo utiliza recursos
reais do navegador. O cadastro e a consulta das avaliações utilizam
a API do MockAPI.

## Rotas

| Rota | Acesso | Conteúdo |
|---|---|---|
| / | Público | Apresentação e avaliações |
| /login | Público | Login demonstrativo |
| /painel | Privado na interface | Painel de avaliações |

Usuários sem sessão são redirecionados de /painel para /login.

## Acesso de teste

- E-mail: demo@jovi.com
- Senha: Jovi123!

O login é uma simulação acadêmica executada no navegador.
A sessão é mantida no sessionStorage.

A proteção das rotas controla a navegação da interface.
Ela não representa autenticação de backend nem restringe
o acesso direto à API pública.

## Integração com API

Endpoint:

https://6ae77f7556b2ee1e544070c5.mockapi.io/api/v1/evaluations

Operações utilizadas:

- GET: consulta as avaliações ao carregar a aplicação.
- POST: cadastra uma avaliação com nota, comentário e data.

Campos de cada registro:

| Campo | Descrição |
|---|---|
| id | Identificador gerado pela API |
| score | Nota de 1 a 5 |
| comment | Comentário de até 500 caracteres |
| date | Data do cadastro |

A integração está no hook personalizado src/hooks/useEvaluations.js,
utilizando fetch, useState e useEffect.

Os dados consultados alimentam a seção de avaliações e o painel.
A média e o total são calculados no front-end.

O serviço é externo e público. Utilize apenas dados de demonstração.
Não é necessário executar um backend local, criar uma conta MockAPI
ou configurar uma chave para testar o endpoint existente.

Caso o endpoint seja substituído, atualize a constante API no hook.

As avaliações antigas do localStorage não são migradas automaticamente.

## Organização principal

```text
src/
├── assets/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Problems.jsx
│   ├── Features.jsx
│   ├── EvaluationSection.jsx
│   ├── Uses.jsx
│   ├── Footer.jsx
│   ├── CameraPreview.jsx
│   └── SectionTitle.jsx
├── hooks/
│   └── useEvaluations.js
├── pages/
│   ├── Login.jsx
│   └── Dashboard.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Evolução em relação à Sprint 3

- Estilização com Tailwind CSS.
- Atualização visual dos componentes.
- Componente de título reutilizável com props.
- Menu adaptado para telas menores.
- Rotas com React Router.
- Login demonstrativo e painel privado na interface.
- Hook personalizado para gerenciamento das avaliações.
- Substituição da persistência local por consumo de API.
- Tratamento de carregamento e falhas nas requisições.
- Publicação na Vercel.

## Publicação

O projeto utiliza Vite, comando de build npm run build e diretório
de saída dist.

O arquivo vercel.json configura o retorno de index.html para as rotas
da aplicação, permitindo acesso direto a /login e /painel.

## Integrantes — Smartech

- Artur de Novazzi Maia — RM 572624
- Arthur Pinheiro Germano — RM 574042
- Bruno Araújo Castro — RM 572723
- João Pedro de Souza — RM 571437
- Arthur Nepomuceno Dias Gomes — RM 572626