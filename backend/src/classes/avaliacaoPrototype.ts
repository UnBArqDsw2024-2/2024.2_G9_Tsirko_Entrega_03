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
    novaAvaliacao.setAvalicaoNota(nota);
    novaAvaliacao.setAvalicaoComentario(comentario);
    novaAvaliacao.setAvalicaoEspectador(espectador);
    novaAvaliacao.setAvaliacaoEvento(evento);

    return novaAvaliacao;
  }
}
