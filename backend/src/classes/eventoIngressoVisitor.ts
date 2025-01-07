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

// sugestão de método que poderia agregar valor ao código é um mecanismo para calcular o lucro médio por ingresso:

getLucroMedioPorIngresso(): number {
    if (this.contagemEspectadores === 0) {
        return 0; // Evitar divisão por zero
    }
    return this.lucroTotal / this.contagemEspectadores;

}

 Este método poderia ser incluído dentro da classe EventoIngressoVisitor.
 Ele aproveita os dados já disponíveis (contagemEspectadores e lucroTotal)


Alternativa para ao visitar um EventoComposite, terá uma mensagem 
no console indicando o nome do composite e o código 
visitará cada evento dentro dele, acionando a visitação de cada evento 
Tornando a execução mais rastreável:

visitComposite(composite: EventoComposite): void {
    console.log(`Visitando composite: ${composite.getNome()}`);
    composite.getEventos().forEach((evento) => evento.accept(this));
}

Ajustes no accept:

(Evento.prototype as any)["accept"] = function(visitor: EventoVisitor): void {
    if (this instanceof Espetaculo) {
        visitor.visitEspetaculo(this);
    } else if (this instanceof Aula) {
        visitor.visitAula(this);
    } else if (this instanceof EventoComposite) {
        visitor.visitComposite(this);
    }
}

