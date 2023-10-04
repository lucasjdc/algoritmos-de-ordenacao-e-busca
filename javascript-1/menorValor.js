const livros = require('./listaLivros');

function menorValor(arrayProdutos, posicaoInicial) {
	let maisBarato = posicaoInicial;

	for (let atual = 0; atual < arrayProdutos.length; atual++){
		if (arrayProdutos[atual].preco < arrayProdutos[maisBarato].preco) {
			maisBarato = atual;
		}
	}
	return  maisBarato;
}

module.exports = menorValor;
