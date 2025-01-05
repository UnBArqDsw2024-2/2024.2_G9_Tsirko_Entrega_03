import { Aula } from "./aula";
import { Espetaculo } from "./espetaculo";

interface EventoVisitor {
    visitComposite(composite: EventoComposite): void;
    visitEspetaculo(espetaculo: Espetaculo): void;
    visitAula(aula: Aula): void;
}

class EventoIngressoVisitor implements EventoVisitor {
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

    getContagemEspectadores(): number {
        return this.contagemEspectadores;
    }

    getLucroTotal(): number {
        return this.lucroTotal;
    }
}