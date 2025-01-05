import { Usuario } from './usuario';
import { Avaliacao } from './avaliacao';
import { Evento } from './evento';
import { EstrategiaDeBusca } from './estrategiaDeBusca';



export class Espectador extends Usuario {
  private dataDeNascimento: Date;
  private estrategiaDeBusca: EstrategiaDeBusca; // Estratégia configurável

  constructor(nome: string, email: string, senha: string, dataDeNascimento: Date, estrategiaDeBusca: EstrategiaDeBusca) {
    super(nome, email, senha);
    this.dataDeNascimento = dataDeNascimento;
    this.estrategiaDeBusca = estrategiaDeBusca;
  }

  public setEstrategiaDeBusca(estrategia: EstrategiaDeBusca): void {
    this.estrategiaDeBusca = estrategia;
  }


  public avaliarEvento(evento: Evento, nota: number, comentario: string): Avaliacao {
    return new Avaliacao(evento, nota, comentario, this);
  }

  public visualizarEventos(eventos: Evento[]): Evento[] {
    return eventos;
  }

  public buscarEvento(eventos: Evento[], filtro: string): Evento[] {
    return this.estrategiaDeBusca.buscar(eventos, filtro);
  }
}