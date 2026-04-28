let livros = [];

const bibliotecaRepository = {
    listar: () => livros,

    salvar: (livro) => {
        livros.push(livro);
        return livro;
    },

    remover: (titulo) => {
        livros = livros.filter(livro => livro.titulo !== titulo);
    }
};