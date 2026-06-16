# Análise do Front-end

## Nome do projeto

MdClothing

## Integrantes

- Henrique Prestes

## Telas existentes

| Tela | Arquivo ou rota | O que aparece nela? | O que o usuário pode fazer? |
|---|---|---|---|
| Página inicial | home.html | Design simples e botões | Ir para tela de de sobre nós e produtos |
| Página de sobre nós | sobre.html | Design simples e explicações | Ler sobre o ideal do app |
| Página produtos | produtos.html | produtos disponiveis e valor |  visualizar produtos disponiveis |
| Página inicial | cadastro.html | design da tela de cadastro | possibilitar o futuro cadastro e ir para login |
| Página inicial | login.html | design da tela de login | possibilitar o futuro login e ir para home |

## Formulários existentes

| Tela | Campos do formulário | O que deve acontecer ao enviar? |
|---|---|---|
| Login | email, senha | Validar usuário e gerar token |
 Cadastro | Email, senha | Criar dados para os usuaários
 

## Listas, cards ou tabelas existentes

| Tela | Dados exibidos | Esses dados virão do banco? |
|---|---|---|
| Home | Estrutura do sistema | Não |
| Cadastro | Cadastro do sistema | Sim |
| Login | Login do sistema | Sim |
| Produtos | Exibição dos produtos | Sim |
| Sobre nós | Informações gerais | Não |

## Botões importantes

| Tela | Botão | Ação esperada |
|---|---|---|
| Login | Entrar | Fazer POST /api/login |
 Cadastro | Criar | Fazer POST/api/cadastro|
