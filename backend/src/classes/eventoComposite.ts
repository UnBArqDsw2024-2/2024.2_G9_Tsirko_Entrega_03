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

// Sugestão de método temEventos que verifica se existem eventos disponíveis:

// temEventos(): boolean {
//    return this.eventos.length > 0;
//}

// Verifica se contém algum evento, retornando true se houver pelo menos um evento e false caso contrário.
