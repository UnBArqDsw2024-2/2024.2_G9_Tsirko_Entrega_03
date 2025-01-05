import { Evento } from './Evento';

export class Espetaculo extends Evento {
    private artistas: string;

    constructor(nome: string, descricao: string, artistas: string) {
        super(nome, descricao);
        this.artistas = artistas;
    }

    exibirDetalhes(): void {
        console.log(`Espetáculo: ${this.nome}, Artistas: ${this.artistas}, Descrição: ${this.descricao}`);
    }
}
