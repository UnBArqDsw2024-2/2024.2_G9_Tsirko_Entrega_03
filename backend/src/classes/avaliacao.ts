import { Espectador } from './espectador';
import { Evento } from './evento';

export class Avaliacao {
  private nota: number;
  private comentario: string;
  private espectador: Espectador;
  private evento: Evento;

  constructor(evento: Evento, nota: number, comentario: string, espectador: Espectador) {
    this.evento = evento;
    this.nota = nota;
    this.comentario = comentario;
    this.espectador = espectador;
  }

  public setAvaliacaoEvento(evento: Evento): void {
    this.evento = evento;
  }

  public setAvalicaoNota(nota: number): void {
    this.nota = nota;
  }
  
  public setAvalicaoComentario(comentario: string): void {
    this.comentario = comentario;
  }

  public setAvalicaoEspectador(espectador: Espectador): void {
    this.espectador = espectador;
  }

  public getAvaliacaoNota(): number {
    return this.nota;
  }

  public getAvaliacaoComentario(): string {
    return this.comentario;
  }

  public clone(): Avaliacao {
    return new Avaliacao(this.evento, this.nota, this.comentario, this.espectador);
  }
}
