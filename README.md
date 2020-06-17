<p align="center">
    <img src="https://camo.githubusercontent.com/d25397e9df01fe7882dcc1cbc96bdf052ffd7d0c/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d676f737461636b2f6865616465722d6465736166696f732e706e67" alt="NLW" />
</p>
<p align="center">
    <a href="https://github.com/fajzanetti">
        <img src="https://img.shields.io/badge/GitHub-fajzanetti-34CB79?logo=GitHub"/>
    </a>
    <a href="https://www.linkedin.com/in/felipezanetti/">
        <img src="https://img.shields.io/badge/Linkedin-felipezanetti-34CB79?logo=linkedin"/>
    </a>
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/fajzanetti/conceitos-reactjs?color=34CB79" />
    <img alt="GitHub language top" src="https://img.shields.io/github/languages/top/fajzanetti/conceitos-reactjs?color=34CB79" />
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/fajzanetti/conceitos-reactjs?color=34CB79" />
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/fajzanetti/conceitos-reactjs?color=34CB79" />
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/fajzanetti/conceitos-reactjs?color=34CB79" />
    <img alt="Nota Rocketseat" src="https://img.shields.io/badge/Nota-10-34CB79" />
    <img alt="Data de entrega" src="https://img.shields.io/badge/Data%20de%20entrega-17%2F06%2F2020-34CB79" />
</p>
<p align="center">
  <a href="#-Sobre-o-desafio">🚀 Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Projeto">🚧 Projeto</a>
</p>

# 🚀 Sobre o desafio

Nesse desafio, você deve criar uma aplicação para treinar o que você aprendeu até agora no ReactJS!

Agora você deve continuar desenvolvendo a aplicação que irá armazenar repositórios do seu portfólio, que você já desenvolveu o backend no último desafio utilizando o Node.js.

# 🚧 Projeto 
<div align="center">
    <p align="left">Utilizando o próprio browser para ter uma resposta visual:</br></br>
    🟣 Inicialmente é feita uma requisição GET á API, como não ha dados na API a lista fica vazia.</br>
    🟣 É realizada apenas uma vez a requisição GET, com isso os dados são salvos local com o uso do hook useState.</p>
    <img alt="Get Repos" title="Get Repos" src=".github/1.PNG" />
    <p align="left">🟢 Após adicionar o objeto á API com método POST, é renderizado o título do primeiro objeto.</br>🟢 E para a renderização não é feita uma nova requisição GET á API.</p>
    <img alt="Get Repos" title="Get Repos" src=".github/2.PNG" />
    <p align="left">🟢 Novamente é adicionado outro objeto a API com método POST e renderizado o título dos dois objeto. </br>🟢 E novamente não é feita uma nova requisição GET para lsitar os dados.</p>
    <img alt="Get Repos" title="Get Repos" src=".github/3.PNG" />
    <p align="left">🔴 Aqui foi clicado no botão remover do primeiro objeto realizando o método DELETE, também não houve uma renderização pois os dados estão salvos local com o uso do hook useState.</p>
    <img alt="Get Repos" title="Get Repos" src=".github/4.PNG" />
</div>

---

Desenvolvido com 💚 por [Felipe Zanetti!](https://www.linkedin.com/in/felipezanetti/)