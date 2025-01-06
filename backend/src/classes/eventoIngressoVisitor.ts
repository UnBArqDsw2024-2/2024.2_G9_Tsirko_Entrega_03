import { Aula } from "./aula";
import { Espetaculo } from "./espetaculo";
import { EventoComposite } from "./eventoComposite";

interface EventoVisitor {
    visitComposite(composite: EventoComposite): void;
    visitEspetaculo(espetaculo: Espetaculo): void;
    visitAula(aula: Aula): void;
}

export class EventoIngressoVisitor implements EventoVisitor {
    private contagemEspectadores: number = 0;
    private lucroTotal: number = 0;

    registrarIngresso(valor: number): void {
        this.lucroTotal += valor;
        this.contagemEspectadores++;
    }

    visitarEspetaculo(espetaculo: Espetaculo): void {
        console.log(`Gerando ingresso para Espetáculo: ${espetaculo.getNome()}`);
        this.registrarIngresso(50.0); // Valor fixo como exemplo
    }

    visitarAula(aula: Aula): void {
        console.log(`Gerando ingresso para Aula: ${aula.getNome()}`);
        this.registrarIngresso(20.0); // Valor fixo como exemplo
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