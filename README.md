# 🚀 Projeto Talker Manager

Este repositório foi desenvolvido para consolidar os aprendizados sobre o desenvolvimento de APIs utilizando o ecossistema do **Node.js** com **Express**. O objetivo principal foi construir uma aplicação de cadastro de palestrantes (_talkers_) com operações completas de CRUD, manipulação de arquivos locais e integração com bancos de dados.

---

## 🧠 O que eu aprendi neste projeto

### 1. Desenvolvimento de APIs HTTP com Express
* Configuração e estruturação de um servidor backend com Node.js e o framework Express.
* Criação de rotas utilizando os principais verbos HTTP:
    * `GET`: Para listagem completa, buscas filtradas e consultas por ID.
    * `POST`: Para criação de registros e realização de login de usuários.
    * `PUT` / `PATCH`: Para atualizações completas e parciais de dados.
    * `DELETE`: Para remoção de registros do sistema.
* Manipulação de códigos de status de respostas HTTP (`200 OK`, `201 Created`, `204 No Content`, `400 Bad Request`, `401 Unauthorized`, `404 Not Found`).

### 2. Validações e Uso de Middlewares
* Criação de **Middlewares de Validação** customizados para interceptar requisições e garantir a integridade dos dados enviados no corpo (`req.body`) e nos cabeçalhos (`req.headers`).
* Implementação de regras de negócio estritas como:
    * Formatos válidos de e-mail e tamanhos de senha.
    * Tipagem e intervalos numéricos específicos (ex: idade inteira $\ge 18$, notas de avaliação de 1 a 5).
    * Máscaras e padrões de data (`dd/mm/aaaa`).
* Gerenciamento de autenticação via Header com tokens de verificação de tipo e tamanho (16 caracteres).

### 3. Persistência de Dados em Arquivos Locais (`fs/promises`)
* Leitura e escrita assíncrona de arquivos JSON utilizando o módulo nativo do Node.js `fs` (File System) com promessas.
* Lógica para ler dados existentes, injetar/atualizar informações em memória e salvar as modificações de volta no disco de forma consistente.

### 4. Integração com Banco de Dados MySQL
* Utilização da biblioteca `mysql2` para criar pools de conexão de dados assíncronas.
* Escrita de queries SQL para consultar tabelas relacionais (`SELECT`).
* **Data Mapping / Adaptação de Dados:** Lógica para transformar o formato de retorno do banco de dados (tabela plana com *snake_case*) no formato JSON estruturado esperado pela API (*camelCase* e objetos aninhados), sem quebrar o contrato do cliente.

### 5. Docker e Ambiente de Desenvolvimento profissional
* Utilização de contêineres multi-serviços com `docker-compose` para isolar a aplicação Node.js e a instância do banco MySQL.
* Ferramentas de qualidade de código como Linters (`eslint`) e execução de testes automatizados unitários/de integração no pipeline de desenvolvimento.

---

## 🛠️ Tecnologias Utilizadas

* **Runtime:** Node.js (v16)
* **Framework:** Express
* **Banco de Dados:** MySQL
* **Drivers:** `mysql2`
* **Gerenciamento de Ambientes:** Docker & Docker Compose
* **Validações e Ferramentas:** Módulo `fs`, ESLint

---

## 🚀 Como Rodar a Aplicação

### Com Docker (Recomendado)

1. Clone o repositório e navegue até a pasta do projeto.
2. Inicialize os containers em segundo plano:
    ```bash
    docker-compose up -d
    docker exec -it talker_manager bash
    npm run dev
    npm test
    npm run lint
    ```
