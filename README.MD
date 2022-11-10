## OBJETIVO

Desenvolver um microsserviço de autenticação em JWT e gerenciá-la durante o uso na plataforma.

## USABILIDADE

- Exemplo simples:

1. Aplicação cliente solicita um login no sistema;
2. A API retorna um token JWT de autenticação e autentica o cliente.

- Exemplo mais real:

1. A aplicação cliente solicita uma lista das transações da empresa e envia seu token JWT;
2. O microsserviço que armazena esses dados envia o token para o microsserviço de autenticação para conferir a validade;
3. Se o token for válido, o microsserviço das transações recebe a resposta e envia a lista das transações solicitadas pelo cliente.

## FUNÇÕES DA API

- Operações básicas CRUD;
- Operação de obter Token;
- Operação para validar um Token recebido do cliente.
