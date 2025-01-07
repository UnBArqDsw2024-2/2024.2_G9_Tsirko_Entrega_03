import { EventoIngressoVisitor } from './eventoIngressoVisitor';

export interface ComponenteEvento {
    exibirDetalhes(): void;
    accept(visitor: EventoIngressoVisitor): void;
}

export class EventoComposite implements ComponenteEvento {
    getEventos() {
        throw new Error("Method not implemented.");
    }
    private eventos: ComponenteEvento[] = [];

    adicionarEvento(evento: ComponenteEvento): void {
        this.eventos.push(evento);
    }

    removerEvento(evento: ComponenteEvento): void {
        const index = this.eventos.indexOf(evento);
        if (index !== -1) this.eventos.splice(index, 1);
    }

    exibirDetalhes(): void {
        this.eventos.forEach(evento => evento.exibirDetalhes());
    }

    accept(visitor: EventoIngressoVisitor): void {
        visitor.visitarComposite(this);
        this.eventos.forEach(evento => evento.accept(visitor));
    }
}


/*
Implementação alternativa que segue uma abordagem para lidar 
com o Visitor em uma coleção de eventos eliminando a 
necessidade de verificações dinâmicas como instanceof:
*\

/*
import { Evento } from './evento';

export class EventoComposite extends Evento {
    private eventos: Evento[] = [];

    constructor(nome: string, descricao: string) {
        super(nome, descricao, new Date(), ""); 
    }

    addEvento(evento: Evento): void {
        this.eventos.push(evento);
    }

    getEventos(): Evento[] {
        return this.eventos;
    }

    accept(visitor: EventoVisitor): void {
        visitor.visitComposite(this);
    }

    exibirDetalhes(): void {
        console.log(`Composite: ${this.nome}`);
        this.eventos.forEach((evento) => evento.exibirDetalhes());
    }
}
*/
