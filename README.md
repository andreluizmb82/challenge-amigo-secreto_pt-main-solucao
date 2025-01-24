# Amigo Secreto

[![Repo](https://img.shields.io/badge/Repo-GitHub-blue?style=flat-square&logo=github)](https://github.com/andreluizmb82/challenge-amigo-secreto_pt-main)

## Introdução

Este diretório contem uma versão do projeto que é uma solução para o desafio "Amigo Secreto" proposto no programa de formação ONE (Oracle Next Education) - G8, uma iniciativa da Oracle em parceria com a Alura. O projeto tem como principal objetivo aplicar os conhecimentos adquiridos nos cursos de:

- Lógica de programação: mergulhe em programação com JavaScript
- Lógica de programação: explore funções e listas
- ChatGPT: otimizando a qualidade dos resultados
- Git e GitHub: compartilhando e colaborando em projetos

O projeto permite simular um sorteio de amigo secreto de forma simples e intuitiva, ideal para fins didáticos e demonstração de habilidades de desenvolvimento web.

## Funcionalidades

O projeto possui as seguintes funcionalidades:

-   Adição de nomes de amigos a uma lista que é renderizada no HTML.
-   Sorteio aleatório de um amigo secreto entre os nomes adicionados.
-   Exibição do nome do amigo sorteado e limpeza da lista após o sorteio.
-   Impedimento de inserção de campos vazios e nomes repetidos.
-   Possibilidade de repetir o processo de sorteio.

## Como Utilizar

Para executar o projeto localmente, abra o arquivo `index.html` em seu navegador.

## Edição

Basta abrir o projeto na IDE de sua escolha, e editar os arquivos diretamente.

## Organização do Diretório

A estrutura de diretórios do projeto está organizada da seguinte forma:

```
├── /
│   ├── index.html
│   └── app.js
│   └── .gitignore
│   ├── assets/
│   │   ├── css/
│   │   │   ├── reset.css
│   │   │   └── index.css
│   │   └── img/
│   │   │   ├── amigo-secreto.png
│   │   │   └── play_circle_outline.png
```

-   `/`: Contém os arquivos HTML e JavaScript da solução do desafio.
-   `/assets/css/`: Contém os arquivos de estilo CSS, incluindo um reset CSS e o estilo principal.
-   `/assets/img/`: Contém as imagens utilizadas no projeto.
-   `/.gitignore`: Arquivo com as regras de arquivos e diretórios a serem ignorados pelo Git.

## Tecnologias

As seguintes tecnologias e ferramentas foram utilizadas no desenvolvimento do projeto:

-   HTML5
-   CSS3
-   JavaScript (ES6+)
-   [Git](https://git-scm.com/) (para versionamento)
-   [GitHub](https://github.com/) (para hospedagem do repositório)

## Motivação

Este projeto foi desenvolvido como um desafio prático proposto pelo programa ONE, com o objetivo de consolidar os conhecimentos adquiridos nos cursos oferecidos e demonstrar habilidades de desenvolvimento web.

## Desenvolvimento

O desenvolvimento foi realizado de forma intuitiva e com foco na aplicação imediata dos conceitos aprendidos. Apesar de não seguir uma metodologia específica, a experiência como programador autodidata facilitou a resolução dos desafios propostos.

O arquivo index.css foi levemente modificado para separar uma parte de seu código no arquivo reset.css. 

E para deixar o projeto mais responsivo, foi adicionado o seguinte código no arquivo index.css:
```css
@media (orientation: portrait) {
  .header-banner {
    flex-direction: column;
  }
}
```

## Refatoração

O código atual será refatorado com o objetivo de melhorar a organização, modularização e legibilidade. A refatoração também visa dividir e organizar as funções para que cada uma tenham uma única responsabilidade.

## Repositório

O código-fonte do projeto está disponível no GitHub:

[https://github.com/andreluizmb82/challenge-amigo-secreto_pt-main-solucao](https://github.com/andreluizmb82/challenge-amigo-secreto_pt-main-solucao)

## Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE](https://github.com/andreluizmb82/challenge-amigo-secreto_pt-main/blob/main/LICENSE) para mais informações.

## Contato

Seu Andre Luiz Moura Borges/[Linkedin](https://www.linkedin.com/in/andre-luiz-moura-borges-33b3aa332/)