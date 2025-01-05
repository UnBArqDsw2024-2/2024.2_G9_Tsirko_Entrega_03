import { EstrategiaDeBusca } from './estrategiaDeBusca';
import { Evento } from './evento';


export class BuscaPorNome implements EstrategiaDeBusca {
    public buscar(eventos: Evento[], filtro: string): Evento[] {
      return eventos.filter(evento => evento.getNome().includes(filtro));
    }
  }