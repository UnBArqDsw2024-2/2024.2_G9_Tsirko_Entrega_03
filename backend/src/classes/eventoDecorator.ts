import { Evento } from './evento';

export abstract class EventoDecorator extends Evento {
  protected evento: Evento;

  constructor(evento: Evento) {
    super(evento.getNome(), evento.getData(), evento.getHorario(), evento.getDescricao());
    this.evento = evento;
  }

  public abstract getDescricao(): string;
}
