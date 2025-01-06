import { Avaliacao } from './avaliacao';
import { Espectador } from './espectador';
import { Evento } from './evento';

export class AvaliacaoPrototype {
  private prototipo: Avaliacao;

  constructor(prototipo: Avaliacao) {
    this.prototipo = prototipo;
  }

  public criarAvaliacaoCustomizada(
    nota: number,
    comentario: string,
    espectador: Espectador,
    evento: Evento
  ): Avaliacao {
    const novaAvaliacao = this.prototipo.clone();
    novaAvaliacao['nota'] = nota;
    novaAvaliacao['comentario'] = comentario;
    novaAvaliacao['espectador'] = espectador;
    novaAvaliacao['evento'] = evento;

    return novaAvaliacao;
  }

  /*Caso as Classes Evento e Espectador tambem utizassem o padrão prototype (tivessem clones),
  seria necessario fazer um deepclone que seria feito da seguinte forma:

  public clone(): Avaliacao {
    const eventoClonado = this.evento.clone(); // Supondo que Evento tenha um método clone
    const espectadorClonado = this.espectador.clone(); // Supondo que Espectador tenha um método clone
    return new Avaliacao(eventoClonado, this.nota, this.comentario, espectadorClonado);
  }
  */
}
