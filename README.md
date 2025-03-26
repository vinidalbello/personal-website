# Portfólio Pessoal - Vinicius Dal Bello

Site de portfólio pessoal desenvolvido com Next.js e Tailwind CSS, com integração ao GitHub para exibir projetos e atividades recentes.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor
- **TypeScript**: Tipagem estática para melhor desenvolvimento
- **Tailwind CSS**: Framework CSS para design responsivo
- **API Routes**: Para criação de endpoints de API no Next.js

## Arquitetura da Integração GitHub

A integração com a API do GitHub foi implementada seguindo uma arquitetura de camadas:

### 1. Camada de Tipos (Types)
- Definição clara de interfaces para dados do GitHub
- Tipagem estática com TypeScript para garantir integridade dos dados
- Separação entre tipos da API e tipos de apresentação

### 2. Camada de Serviços (Services)
- Funções para buscar dados da API do GitHub
- Transformação e formatação de dados
- Tratamento de erros e estados de fallback

### 3. Camada de API (API Routes)
- Endpoints serverless usando API Routes do Next.js
- Centralização de lógica de negócios no servidor
- Cache e optimização de requisições

### 4. Camada de Apresentação (Components)
- Componentes React com hooks para gerenciamento de estado
- Exibição condicional baseada nos estados de carregamento
- Fallback para dados mockados quando necessário

## Diagrama Simplificado

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  Componente │    │ API Routes  │    │  Serviços   │    │  API GitHub │
│   React     │───▶│   Next.js   │───▶│  TypeScript │───▶│             │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
       ▲                  │                  ▲
       │                  │                  │
       └──────────────────┴──────────────────┘
               Dados & Estado

```

## Benefícios desta Arquitetura

1. **Separação de Responsabilidades**: Cada camada tem um propósito específico
2. **Manutenibilidade**: Código organizado facilita atualizações futuras
3. **Reusabilidade**: Serviços e tipos podem ser reutilizados em diferentes partes da aplicação
4. **Isolamento**: Mudanças em uma camada não afetam necessariamente outras camadas
5. **Experiência do Usuário**: Estado de loading e fallback garantem uma experiência fluida

## Como Funciona

1. Os componentes React fazem requisições aos endpoints da API interna
2. Os endpoints da API consomem os serviços de integração
3. Os serviços fazem requisições à API do GitHub e transformam os dados
4. Os dados formatados são retornados para exibição nos componentes

## Execução Local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```