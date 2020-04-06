# DESAFIO FILMES

> Desafio Lista de Filmes

## Página inicial dos Filmes
![](/src/img_readme/home_filmes.png)

## Página de detalhe dos Filmes
![](/src/img_readme/detalhe.png)

## Página dos filmes listados para assitir depois
![](/src/img_readme/assistir_depois.png)

## Tecnologias utilizadas

- Vue.js
- Vuex
- Vue Router
- axios 

## Funcionamento

Foi utilizado a API [omdbapi](http://www.omdbapi.com/) para obter a listas dos filmes bem como
todas as informações pertinentes aos filmes.

A chamada ajax foi realizada com vuex, por ser uma boa prática de chamada a APIs.

Nesse desafio foi implementado três páginas, a primeira contém a lista de filmes relacionados ao Super-Man por meio de uma requisição **get** a _api_ ; a segunda é realizada novamente uma requisição **get** passando compo parâmetro o filme escolhido, ou seja o seu _id_ e a terceira é armazenado num array os filmes que serão assitidos depois.



