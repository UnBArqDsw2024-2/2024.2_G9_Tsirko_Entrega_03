interface ComponenteEvento {
    exibirDetalhes(): void;
    accept(visitor: EventoVisitor): void;
}

class EventoComposite implements ComponenteEvento {
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

    accept(visitor: EventoVisitor): void {
        visitor.visitComposite(this);
        this.eventos.forEach(evento => evento.accept(visitor));
    }
}