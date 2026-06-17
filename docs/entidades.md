# Entidades do Sistema - MdClothing

## Entidades identificadas

| Entidade | Por que ela existe? | Tela relacionada |
|---|---|---|
| usuarios | O sistema tem cadastro e login de usuários | cadastro.html, login.html |
| produtos | O sistema exibe produtos de vestuário | home.html, produtos.html |

## Campos de cada entidade

### Entidade: usuarios

| Campo | Tipo sugerido | Obrigatório? | Observação |
|---|---|---|---|
| id | INT | sim | PK, AUTO_INCREMENT |
| nome | VARCHAR(100) | sim | Nome do usuário |
| email | VARCHAR(150) | sim | Usado no login, deve ser único |
| senha | VARCHAR(255) | sim | Salvar com bcrypt |
| estilo_preferido | VARCHAR(50) | não | Estilo favorito do usuário (ex: casual, esportivo) |
| criado_em | DATETIME | sim | Data de criação da conta |

### Entidade: produtos

| Campo | Tipo sugerido | Obrigatório? | Observação |
|---|---|---|---|
| id | INT | sim | PK, AUTO_INCREMENT |
| nome | VARCHAR(100) | sim | Nome do produto |
| descricao | TEXT | não | Detalhes do produto |
| preco | DECIMAL(10,2) | sim | Preço em reais |
| estilo | VARCHAR(50) | sim | Estilo do produto (ex: streetwear, casual) |
| imagem | VARCHAR(255) | não | Caminho ou URL da imagem do produto |
| criado_em | DATETIME | sim | Data de cadastro |

## Relacionamentos

| Relacionamento | Tipo | Explicação |
|---|---|---|
| — | — | Nesta versão do sistema, os produtos são pré‑cadastrados e visíveis a todos os visitantes. Não há vínculo entre usuários e produtos (não existe campo de chave estrangeira entre as tabelas). |