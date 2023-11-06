// Captura os quatro elementos criados
const titulo = document.querySelector('#titulo');
const listaNaoOrdenada = document.querySelector('ul');
const link = document.querySelector('a');
const listaOrdenada = document.querySelector('#lista-ordenada');

// Usa a propriedade .innerText para adicionar conteúdo textual aos elementos h1 e a
titulo.innerText = 'Projeto com dois arquivos';
link.innerText = 'Proze Educação';

// Usa a propriedade .innerHTML para adicionar três itens simples na lista não ordenada
listaNaoOrdenada.innerHTML = `
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
`;

// Usa a propriedade .innerHTML para adicionar três itens com links para outros sites na lista ordenada
listaOrdenada.innerHTML = `
  <li><a href="https://www.bing.com">Bing</a></li>
  <li><a href="https://www.wikipedia.org">Wikipedia</a></li>
  <li><a href="https://www.youtube.com">YouTube</a></li>
`;
