// Banco de Dados dos produtos
const ProdutosMoedas = [
    {
        id: 1,
        nome: "Moeda de Ouro 18K",
        preco: 4400.00,
        descricao: "Moeda encontrada durante a Era Vitoriana, na Inglaterra. Pesa mais de 100g de ouro puro."
    },
    {
        id: 2,
        nome: "Moeda de Prata 900",
        preco: 2200.00,
        descricao: "Moeda encontrada durante Século das Luzes, na França. Pesa mais de 150g de prata refinada."
    }
];

ProdutosMoedas.forEach(produto => {
    const produtoElement = document.createElement("div");
    produtoElement.classList.add("cartao-produto");

    produtoElement.innerHTML = `
    <h4>${produto.nome}</h4>
    <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
    <p>Descrição: ${produto.descricao}</p>
    <button>Comprar</button>
    `
    document.getElementById("vitrine").appendChild(produtoElement);
});