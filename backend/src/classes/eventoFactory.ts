import { Espetaculo } from './espetaculo';
import { Aula } from './aula';
import { Evento } from './evento';

export class EventoFactory {
    static criarEvento(tipo: string, nome: string, descricao: string, ...detalhes: string[]): Evento {
        switch (tipo.toLowerCase()) {
            case "espetaculo":
                return new Espetaculo(nome, descricao, detalhes[0]);
            case "aula":
                return new Aula(nome, descricao, detalhes[0], detalhes[1]);
            default:
                throw new Error(`Tipo de evento desconhecido: ${tipo}`);
        }
    }
}
