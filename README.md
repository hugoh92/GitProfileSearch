
#Descrição

Esta aplicação Angular busca perfis de desenvolvedores na API pública do GitHub e exibe seus dados em uma página de perfil. 
A página de perfil exibe as informações do usuário, incluindo nome, nome de usuário, bio, seguidores, seguindo, empresa, localização, email, site e conta do Twitter, se disponíveis. 
Além disso, os repositórios do usuário são exibidos em uma lista ordenada pelo número de estrelas, com links para os repositórios e informações detalhadas sobre cada repositório, 
incluindo descrição, linguagem, data de criação e dias desde a última atualização.

# GitPerfilBusca

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.4.
Foi escolhido o framework Angular na versão 11.1.4, na qual já estou bem familiarizado, juntamente com o Angular Material, que é Uma biblioteca de componentes de 
interface do usuário do Material Design para Angular, além disso foi utilizado o GitHub API, a API pública do GitHub para buscar dados de perfil e repositórios de desenvolvedores.
A aplicação está hospedada no link https://git-search-profile.netlify.app/.

#Execução

1. Node.js e npm instalados.
2. Angular CLI instalado (npm install -g @angular/cli).
3. Clone este repositório para o seu computador: git clone https://github.com/seu-usuario/nome-do-repositorio.git
4. Acesse o diretório do projeto: cd nome-do-repositorio
5. Instale as dependências do projeto: npm install
6. Para rodar a aplicação localmente: ng serve. Acesse a aplicação no seu navegador em http://localhost:4200/.
7. Para criar uma versão otimizada para produção: ng build --prod

#Estrutura do Projeto

src/: A parte principal onde você escreve seu código.
app/: Contém os componentes e serviços do aplicativo.
api.service.ts: Faz chamadas à API do GitHub.
home/: Página inicial.
perfil/: Página de perfil.
app.component.ts: Estrutura do aplicativo.
assets/: Armazena imagens e outros arquivos.
index.html: Página principal do aplicativo.
angular.json: Configurações do projeto.
tsconfig.json: Configurações de compilação TypeScript.
package.json: Informações do projeto e dependências.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
