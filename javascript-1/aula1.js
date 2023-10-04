var livros = [
	{nome: "C", preco: 19.99},
	{nome: "PHP", preco: 15.25},
	{nome: "Java", preco: 30.75},
	{nome: "JavaScript", preco: 25.89},
	{nome: "C#", preco: 32.05}
	];
	
livros.sort(function(a, b) {
	return a.preco - b.preco	
});

console.log(livros);