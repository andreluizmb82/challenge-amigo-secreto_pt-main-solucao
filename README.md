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

Apos considerar o código concluído, resolvi criar um rodapé. Isso me levou a reconhecer e admitir uma realidade. Um software nunca esta realmente concluído, ele apenas chega a um ponto em que o consideramos utilizável e bom o suficiente, ao atender os requisitos de negócio pre definidos.

A primeira refatoração tinha os seguintes objetivos:
- [x] O código foi refatorado com o objetivo de melhorar a organização, modularização e legibilidade. 
- [x] Ela também visou dividir e organizar as funções para que cada uma tenham uma única responsabilidade.
- [x] Aproveitei para adicionar um comentário no código, atribuindo uma camada de clareza adicional. 

Segunda refatoração tinha os seguintes objetivos:
- [x] Criar um rodapé fixo.
- [x] Adicionar de perfil do GitHub, LinkedIn, X - (Twitter) e Instagram.
- [x] Adicionar links para o repositório do projeto.
- [x] Adicionar link para a solução personalizada.
- [x] Comentar o código css aplicado nesta refatoração.
- [x] Atualizar o README.md.
- [x] Adição de mensagem de erro se tentar sortear sem ter adicionar nome ao menos dois nomes à lista de amigos.

## Repositórios Relacionados

O código-fonte do projeto que contem a solução personalizada do desafio esta disponível no seguinte repositório:

[https://github.com/andreluizmb82/challenge-amigo-secreto_pt-main-solucao-personalizada](https://github.com/andreluizmb82/challenge-amigo-secreto_pt-main-solucao-personalizada)

O repositório principal do projeto que contem as duas soluções e a configuração do meu ambiente de desenvolvimento está disponível no seguinte repositório:

[https://github.com/andreluizmb82/challenge-amigo-secreto_pt-main](https://github.com/andreluizmb82/challenge-amigo-secreto_pt-main)

## Site

O projeto está hospedado no GitHub Pages:
[https://andreluizmb82.github.io/challenge-amigo-secreto_pt-main-solucao/](https://andreluizmb82.github.io/challenge-amigo-secreto_pt-main-solucao/)

## Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE](https://github.com/andreluizmb82/challenge-amigo-secreto_pt-main/blob/main/LICENSE) para mais informações.

## Perfis

[![Github de projetos](https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white 'Github que contem projetos com aplicabilidade real.')](https://github.com/andrebg28)
[![Github didático](https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white 'Github que contem repositorios de assuntos que estou aprendendo em cursos, ou desafios didático que proponho para mim mesmo.')](https://github.com/andreluizmb82)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white 'Meu LinkedIn')](https://www.linkedin.com/in/andre-luiz-moura-borges-33b3aa332/)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white 'Meu X - (Twitter)')](https://x.com/AndreLuizMb82)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white 'Meu Instagram')](https://www.instagram.com/andreluizmb82/)
