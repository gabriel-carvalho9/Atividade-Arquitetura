const bibliotecaController = {
    listarLivros: () => {
        const livros = bibliotecaService.listar();
        const lista = document.getElementById("listaLivros");

        lista.innerHTML = "";

        livros.forEach(livro => {
            const item = document.createElement("li");
            item.textContent = `${livro.titulo} - ${livro.autor} - ${livro.genero}`;
            lista.appendChild(item);
        });
    },

    adicionarLivro: () => {
        const titulo = prompt("Título do livro:");
        const autor = prompt("Autor:");
        const genero = prompt("Gênero:");

        bibliotecaService.adicionar({titulo, autor, genero});
    },

    removerLivro: () => {
        const titulo = prompt("Título do livro a ser removido:");
        bibliotecaService.remover(titulo);
        bibliotecaController.listarLivros();
    }
};