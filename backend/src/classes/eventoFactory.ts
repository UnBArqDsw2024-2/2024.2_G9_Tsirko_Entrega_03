import { Espetaculo } from './espetaculo';
import { Aula } from './aula';
import { Evento } from './evento';
import { EventoComposite } from './eventoComposite';
import { ComponenteEvento } from './eventoComposite'

export class EventoFactory {
    static criarEvento(
        tipo: string,
        nome: string,
        descricao: string,
        detalhes: string[] = [],
        subeventos: { tipo: string; nome: string; descricao: string; detalhes: string[] }[] = []
    ): ComponenteEvento {
        switch (tipo.toLowerCase()) {
            case "espetaculo":
                return new Espetaculo(nome, descricao, detalhes[0]);
            case "aula":
                return new Aula(nome, descricao, detalhes[0], detalhes[1]);
            case "composite":
                const composite = new EventoComposite();
                subeventos.forEach(subevento => {
                    const evento = this.criarEvento(
                        subevento.tipo,
                        subevento.nome,
                        subevento.descricao,
                        subevento.detalhes
                    );
                    composite.adicionarEvento(evento);
                });
                return composite;
            default:
                throw new Error(`Tipo de evento desconhecido: ${tipo}`);
        }
    }
}
