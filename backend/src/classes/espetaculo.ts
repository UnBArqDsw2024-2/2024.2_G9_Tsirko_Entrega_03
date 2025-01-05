import { Evento } from './evento';
import { EventoIngressoVisitor } from './eventoVisitor';

export class Espetaculo extends Evento {
    private artistas: string;

    constructor(nome: string, descricao: string, artistas: string) {
        super(nome, descricao);
        this.artistas = artistas;
    }

    accept(visitor: EventoIngressoVisitor): void {
        visitor.visitEspetaculo(this);
    }

    exibirDetalhes(): void {
        console.log(`Espetáculo: ${this.nome}, Artistas: ${this.artistas}, Descrição: ${this.descricao}`);
    }
}
