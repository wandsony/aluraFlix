var listaFilmes = [
  "https://img.elo7.com.br/product/zoom/3E882CF/big-poster-filme-homem-aranha-sem-volta-para-casa-90x60-cm-2-presente-nerd.jpg",
  "https://img.elo7.com.br/product/zoom/2364681/big-poster-filme-homem-aranha-no-aranhaverso-90x60-cm-lo-010-poster.jpg",
  "https://img.elo7.com.br/product/zoom/26771A8/big-poster-filme-iron-man-2008-lo04-tamanho-90x60-cm-marvel.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}