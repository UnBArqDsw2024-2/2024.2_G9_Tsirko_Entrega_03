import { EventoDecorator } from './eventoDecorator';
import { Avaliacao } from './avaliacao';
import { Evento } from './evento';

export class EventoDestaqueDecorator extends EventoDecorator {
  private avaliacoes: Avaliacao[];

  constructor(evento: Evento, avaliacoes: Avaliacao[]) {
    super(evento);
    this.avaliacoes = avaliacoes;
  }

  public getDescricao(): string {
    if (this.eEventoDestaque()) {
      return `${this.evento.getDescricao()} Este é um evento em destaque!`;
    }
    return this.evento.getDescricao();
  }

  private eEventoDestaque(): boolean {
    return this.avaliacoes.length >= 5;
  }
}
