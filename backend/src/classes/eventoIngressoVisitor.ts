import { Aula } from "./aula";
import { Espetaculo } from "./espetaculo";
import { EventoComposite } from "./eventoComposite";

interface EventoVisitor {
    visitComposite(composite: EventoComposite): void;
    visitEspetaculo(espetaculo: Espetaculo): void;
    visitAula(aula: Aula): void;
}

export class EventoIngressoVisitor implements EventoVisitor {
    visitComposite(composite: EventoComposite): void {
        throw new Error("Method not implemented.");
    }
    visitEspetaculo(espetaculo: Espetaculo): void {
        throw new Error("Method not implemented.");
    }
    visitAula(aula: Aula): void {
        throw new Error("Method not implemented.");
    }

    private contagemEspectadores: number = 0;
    private lucroTotal: number = 0;

    registrarIngresso(valor: number): void {
        this.lucroTotal += valor;
        this.contagemEspectadores++;
    }

    visitarEspetaculo(espetaculo: Espetaculo): void {
        console.log(`Gerando ingresso para Espetáculo: ${espetaculo.getNome()}`);
        const valor = 50.0; // Valor variável
        this.registrarIngresso(valor); 
    }

    visitarAula(aula: Aula): void {
        console.log(`Gerando ingresso para Aula: ${aula.getNome()}`);
        const valor = 20.0; // Valor variável
        this.registrarIngresso(valor); 
    }

    visitarComposite(composite: EventoComposite): void {
        composite.getEventos().forEach((evento: EventoComposite) => evento.accept(this));
    }

    getContagemEspectadores(): number {
        return this.contagemEspectadores;
    }

    getLucroTotal(): number {
        return this.lucroTotal;
    }
}

(Evento.prototype as any)["accept"] = function(visitor: EventoVisitor): void {
    if (this instanceof Espetaculo) {
        visitor.visitEspetaculo(this);
    } else if (this instanceof Aula) {
        visitor.visitAula(this);
    }
}