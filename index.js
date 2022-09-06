const produtosCarrinho = [
  {
    id: 1,
    name: "Monitor Xiaomi 34'' Curved",
    price: 4000.0,
  },
  {
    id: 2,
    name: "Câmera Xiaomi com receptor interno",
    price: 900.0,
  },
  {
    id: 3,
    name: "Aspirador de pó mi vaccum mop p",
    price: 2700.0,
  },
  {
    id: 4,
    name: "Tomada usb-c 20w",
    price: 50.0,
  },
];

// criando elementos(tags)
const tagBody = document.body;
const tagMain = document.createElement("main");
const tagH1 = document.createElement("h1");
const tagUl = document.createElement("ul");
const tagButton = document.createElement("button");
const tagDivTop = document.createElement("div");
const spanTop1 = document.createElement("span");
const spanTop2 = document.createElement("span");
const tagDivBot = document.createElement("div");
const spanBot1 = document.createElement("span");
const spanBot2 = document.createElement("span");

// criando lista de itens
for (let i = 0; i < produtosCarrinho.length; i++) {
  const tagLi = document.createElement("li");
  const tagSpanItem = document.createElement("span");
  const tagSpanValor = document.createElement("span");
  let produtoAtual = produtosCarrinho[i];

  tagSpanItem.innerText = produtoAtual.name;
  tagSpanValor.innerText = produtoAtual.price;

  tagLi.appendChild(tagSpanItem);
  tagLi.appendChild(tagSpanValor);
  tagUl.appendChild(tagLi);
}
// criando função somar
function somar(listaCompras) {
  let resultado = 0;
  for (let i = 0; i < listaCompras.length; i++) {
    resultado += listaCompras[i].price;
  }
  return resultado;
}

//colocando tags dentro de sua respectiva ordem
tagBody.appendChild(tagMain);
// main
tagMain.appendChild(tagH1);
tagMain.appendChild(tagDivTop);
tagMain.appendChild(tagUl);
tagMain.appendChild(tagDivBot);
tagMain.appendChild(tagButton);
// div top
tagDivTop.appendChild(spanTop1);
tagDivTop.appendChild(spanTop2);
// div bot
tagDivBot.appendChild(spanBot1);
tagDivBot.appendChild(spanBot2);

// colocando informações nas tags
tagButton.innerText = "Finalizar Compra";
tagH1.innerText = "Virtual Market";
spanTop1.innerText = "Item";
spanTop2.innerText = "Valor";
spanBot1.innerText = "Total";
spanBot2.innerText = somar(produtosCarrinho);
// colocando classe nas tags
tagMain.classList.add("container");
tagH1.classList.add("titulo");
tagUl.classList.add("lista");
tagDivTop.classList.add("div_top");
spanTop1.classList.add("item");
spanTop2.classList.add("preco");
tagButton.classList.add("button");
tagBody.classList.add("container_geral");
console.log(tagBody);
