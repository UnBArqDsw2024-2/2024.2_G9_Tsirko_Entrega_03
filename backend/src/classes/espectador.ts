import { Usuario } from './usuario';
import { Avaliacao } from './avaliacao';
import { Evento } from './evento';

export class Espectador extends Usuario {
  private dataDeNascimento: Date;

  constructor(nome: string, email: string, senha: string, dataDeNascimento: Date) {
    super(nome, email, senha);
    this.dataDeNascimento = dataDeNascimento;
  }

  public avaliarEvento(evento: Evento, nota: number, comentario: string): Avaliacao {
    return new Avaliacao(evento, nota, comentario, this);
  }

  public visualizarEventos(eventos: Evento[]): Evento[] {
    return eventos;
  }

  public buscarEvento(eventos: Evento[], filtro: string): Evento[] {
    return eventos.filter(evento => evento.getNome().includes(filtro));
  }
}
