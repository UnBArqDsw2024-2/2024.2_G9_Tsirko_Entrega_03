import { Evento } from './evento';
import { EventoIngressoVisitor } from './EventoIngressoVisitor';

export class Espetaculo extends Evento {
    private artistas: string;

    constructor(nome: string, descricao: string, artistas: string) {
        super(nome, descricao);
        this.artistas = artistas;
    }

    accept(visitor: EventoIngressoVisitor): void {
        visitor.visitarEspetaculo(this);
    }

    exibirDetalhes(): void {
        console.log(`Espetáculo: ${this.nome}, Artistas: ${this.artistas}, Descrição: ${this.descricao}`);
    }
}
