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
    if (this.avaliacoes.length < 5) {
      return false;
    }
    const notasSoma = this.avaliacoes.reduce((total, avaliacao) => total + avaliacao.getAvaliacaoNota(), 0);
    const notasMedia = notasSoma / this.avaliacoes.length;

    return notasMedia >= 8;
  }
  
  exibirDetalhes(): void {
    this.evento.exibirDetalhes();
  }
}
