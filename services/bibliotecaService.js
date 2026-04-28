const bibliotecaService = {
    listar: () => {
        return bibliotecaRepository.listar();
    },

    adicionar: (livro) => {
        if (!livro.titulo) {
            alert("Título é obrigatório!");
            return;
        }
        return bibliotecaRepository.salvar(livro);
    },

    remover: (titulo) => {
        bibliotecaRepository.remover(titulo);
        return;
    }
};