// Classe base para eventos
abstract class Evento {
    constructor(protected nome: string, protected descricao: string) {}

    getNome(): string {
        return this.nome;
    }

    abstract exibirDetalhes(): void;
}

// Subclasse Espetáculo
class Espetaculo extends Evento {
    private artistas: string;

    constructor(nome: string, descricao: string, artistas: string) {
        super(nome, descricao);
        this.artistas = artistas;
    }

    exibirDetalhes(): void {
        console.log(`Espetáculo: ${this.nome}, Artistas: ${this.artistas}, Descrição: ${this.descricao}`);
    }
}

// Subclasse Aula
class Aula extends Evento {
    private tema: string;
    private professor: string;

    constructor(nome: string, descricao: string, tema: string, professor: string) {
        super(nome, descricao);
        this.tema = tema;
        this.professor = professor;
    }

    exibirDetalhes(): void {
        console.log(`Aula: ${this.nome}, Tema: ${this.tema}, Professor: ${this.professor}, Descrição: ${this.descricao}`);
    }
}
