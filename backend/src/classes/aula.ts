import { Evento } from './evento';
import { EventoIngressoVisitor } from './eventoIngressoVisitor';
export class Aula extends Evento {
    private tema: string;
    private professor: string;

    constructor(nome: string, descricao: string, tema: string, professor: string) {
        super(nome, descricao);
        this.tema = tema;
        this.professor = professor;
    }

    accept(visitor: EventoIngressoVisitor): void {
        visitor.visitarAula(this);
    }

    exibirDetalhes(): void {
        console.log(`Aula: ${this.nome}, Tema: ${this.tema}, Professor: ${this.professor}, Descrição: ${this.descricao}`);
    }
}
