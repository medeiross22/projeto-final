# Rotas Planejadas da API - MdClothing

| Método | Rota | Objetivo | Tela que usa | Autenticação | Body necessário |
|---|---|---|---|---|---|
| POST | /api/auth/registrar | Cadastrar usuário | cadastro.html | Não | nome, email, senha, estilo_preferido (opcional) |
| POST | /api/auth/login | Fazer login e obter token JWT | login.html | Não | email, senha |
| GET | /api/usuarios/perfil | Obter dados do usuário logado | home.html | Sim (Bearer token) | — |
| GET | /api/produtos | Listar todos os produtos (aceita filtro ?estilo=) | home.html, produtos.html | Não | — |
| GET | /api/produtos/:id | Obter detalhes de um produto específico | produtos.html | Não | — |

## Observações

- A rota `/api/usuarios/perfil` é protegida pelo middleware `autenticarToken`.
- As rotas de produtos são públicas e não exigem autenticação.
- A página `sobre.html` é estática e não consome nenhuma rota da API.
- Não foram planejadas rotas de criação, edição ou exclusão de produtos porque, nesta fase, os produtos são pré‑cadastrados e apenas visualizados.