# Proposta

Implementar uma aplicação client-side, que consulte a API do GitHub e mostre os repositórios de um determinado usuário. Esta aplicação deve funcionar nos navegadores mais recentes do mercado.

## API

https://developer.github.com/v3/

## Endpoints

Detalhes de um usuário: https://api.github.com/users/{username}

Repositórios de um usuário: https://api.github.com/users/{username}/repos

## Navegação

- Deve existir uma página com campo de pesquisa por @ de um usuário do GitHub.
- Ao buscar um usuário pelo login do github, direcionar para pagina de resultado de busca.
- Se o usuário for encontrado apresentar uma pagina de detalhes do usuário, com seus repositórios e informações; caso contrario exibir mensagem amigável de erro.

## Requisitos

- Eu, como usuário, desejo buscar por um usuário do GitHub;
- Eu, como usuário, desejo ver os detalhes desse usuário que foi buscado (número de seguidores, número de seguidos, imagem do avatar, e-mail e bio);
- Eu, como usuário, desejo ver a listagem dos repositórios desse usuário que foi buscado, ordenados pelo número decrescente de estrelas;
 
## Definição de pronto

- Não é obrigatório o uso de um framework ou lib, mas recomendamos React, Angular ou Vue.
- É obrigatório o uso de rotas.

## Submissão
Enviar o link do repositório por e-mail.
*Opcional* A aplicação deve estar hospedada (GitHub Pages, Now, Netlify, Firebase, etc) As URLs devem ser enviadas por email.

## Prazo
O prazo de entrega é de uma semana

## Critérios de Avaliação
O desafio será avaliado através de cinco critérios.

### Entrega

* O código possui algum controle de dependências?
* O resultado final está completo para ser executado?
* O resultado final atende ao que se propõe fazer?
* O resultado final atende totalmente aos requisitos propostos?
* O resultado final é visualmente elegante?

### Boas Práticas

* O código está de acordo com o guia de estilo da linguagem?
* O código está bem estruturado?
* O código está fluente na linguagem?
* O código faz o uso correto de _Design Patterns_?

### Documentação

* O código foi entregue com um arquivo de README claro de como se guiar?
* O código possui comentários pertinentes?
* O código está em algum controle de versão?
* Os commits são pequenos e consistentes?
* As mensagens de commit são claras?

### Código Limpo

* *opcional* O código possibilita expansão para novas funcionalidades?
* O código é _Don't Repeat Yourself_?
* O código é fácil de compreender?

### Controle de Qualidade

* *opcional* O código possui configuração de lint?
* *opcional* O código possui testes unitários?
* *opcional* O código possui testes de integração?
