# Web Scrapping Estudies
---
Esse projeto foi realizado o backend e o frontend, junto com deploy.

Nele é possível pesquisar produtos pela api do MercadoLivre e com Web Scraping no buscapé para pesquisar produtos e salvar os dados dos produtos pesquisados no banco não relacional MongoDB no servidor Atlas.

# Tecnologias Usadas

###Frontend:

Para o Frontend foi utilizado React-TypeScript e BootStrap para realizar a estilização e axios para get e posts no backend, e o deploy foi realizado no Heroku, e foi configurado o Eslint para padronização e melhor leitura do código.

###Backend

Para o Backend foi utilizado de Node TypeScript, Express para realizar o confeccionamento da API REST, Puppeteer para realizar o scraping no Buscapé, MongoDB para salvar os dados da pesquisa e o ESLint para padronização e melhor leitura do código, foi utilizada a arquitetura MSC (Models, Services, Controllers).

# Rodar o Projeto

* git clone git@github.com:rafaelromanoz/web-scrapping-studies.git

####Frontend
* cd frontend
* npm i 
* npm start

####Backend
* cd frontend
* npm i 
* npm run dev

#Deploy

O deploy do frontend e da do Backend API foi realizado via Heroku o banco de dados foi criado um cluster no provedor Atlas.

Pode ser acessado via: 

*https://challenge-rafael-front.herokuapp.com/
