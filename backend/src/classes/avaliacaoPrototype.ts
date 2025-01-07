import { Avaliacao } from './avaliacao';
import { Espectador } from './espectador';
import { Evento } from './evento';

export class AvaliacaoPrototype {
  private static prototipos: Array<Avaliacao>;

  static adicionarPrototype(avaliacao: Avaliacao) {
    this.prototipos.push(avaliacao);
  }

  /**
   * Cria avaliação customiazada com base em outra avaliação pré-existente.
   * @param marcador marcador da avaliação de base. Fará uma cópia da avaliação com esse marcador. A avaliaçãod deve ter sido colocada na lista de protótipos com o método 'adicionarPrototype'.
   * @returns retorna undefined se o marcador não existir.
   */
  static criarAvaliacaoCustomizada(
    marcador: string,
    nota: number,
    comentario: string,
    espectador: Espectador,
    evento: Evento
  ): Avaliacao | undefined {
    for (let index_prototipo = 0; index_prototipo < this.prototipos.length; index_prototipo++) {
      if (this.prototipos[index_prototipo].getMarcador() === marcador) {
        const novaAvaliacao = this.prototipos[index_prototipo].clone();
        if (nota != undefined)
          novaAvaliacao.setAvalicaoNota(nota);
        if (comentario != undefined)
          novaAvaliacao.setAvalicaoComentario(comentario);
        if (espectador != undefined)
          novaAvaliacao.setAvalicaoEspectador(espectador);
        if (evento != undefined)
          novaAvaliacao.setAvaliacaoEvento(evento);

        return novaAvaliacao;
      }
      else{
        return undefined;
      }
    }
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
