import { Evento } from './evento';

export abstract class EventoDecorator extends Evento {
  protected evento: Evento;

  constructor(evento: Evento) {
    super(evento.getNome(), evento.getDescricao(), evento.getData(), evento.getHorario());
    this.evento = evento;
}
  exibirDetalhes(): void {
    this.evento.exibirDetalhes();
  }
}
