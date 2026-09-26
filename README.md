# CRUD de Produtos (adaptado do CRUD de Usuários)

## O que mudou em relação ao projeto de referência

- Entidade `User` → `Produto`, com campos: `nome`, `descricao`, `preco`, `quantidadeEstoque`, `disponivel`.
- Rota base `/usuarios` → `/produtos`.
- Frontend (`app.js`, `index.html`) reescrito para os campos e rota novos.
- **`.env` trocado por um exemplo local** (`mongodb://127.0.0.1:27017/crud_produtos`). As credenciais reais de Atlas que vieram no zip original foram removidas daqui — troque-as no seu cluster se ainda não trocou.

## Como rodar de verdade (passo a passo)

### 1. Backend

Pré-requisito: MongoDB rodando localmente (`mongod`) OU uma URI do Atlas sua.

```bash
cd backend
npm install
# edite .env se quiser usar Atlas em vez de Mongo local
npm run dev
```

Teste rápido:
```bash
curl http://localhost:3000/
curl http://localhost:3000/produtos
```

### 2. Frontend

Em outro terminal:
```bash
cd front
npx serve .
```
Abra o endereço informado (não abra o `index.html` direto com duplo clique — o service worker/PWA precisa de um servidor HTTP).

### 3. Testando o CRUD via curl (sem depender da UI)

```bash
# criar
curl -X POST http://localhost:3000/produtos \
  -H "Content-Type: application/json" \
  -d '{"nome":"Teclado mecânico","descricao":"Switch marrom","preco":249.90,"quantidadeEstoque":10}'

# listar
curl http://localhost:3000/produtos

# buscar por id (troque <ID>)
curl http://localhost:3000/produtos/<ID>

# atualizar
curl -X PUT http://localhost:3000/produtos/<ID> \
  -H "Content-Type: application/json" \
  -d '{"preco":199.90}'

# excluir
curl -X DELETE http://localhost:3000/produtos/<ID>
```

## Rotas da API

| Método | Rota | Ação |
|---|---|---|
| GET | /produtos | Lista produtos |
| GET | /produtos/:id | Busca um produto |
| POST | /produtos | Cria um produto |
| PUT | /produtos/:id | Atualiza um produto |
| DELETE | /produtos/:id | Exclui um produto |

## Nota sobre validação neste ambiente

Neste ambiente de geração eu não tenho acesso de rede para instalar/baixar um MongoDB nem para alcançar o Atlas, então não consegui executar o fluxo fim-a-fim com banco real aqui. O que foi validado:
- `npm install` do backend concluído sem erros;
- todos os arquivos `.js` passaram em `node --check` (sem erro de sintaxe);
- o servidor sobe e tenta conectar ao Mongo corretamente, falhando apenas por ausência de um Mongo acessível neste sandbox (comportamento esperado e correto do código).

Rode os passos acima na sua máquina para o teste completo com banco de dados real.
