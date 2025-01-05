import { EstrategiaDeBusca } from "./estrategiaDeBusca";
import { Evento } from "./evento";

export class BuscaPorNome implements EstrategiaDeBusca {
<<<<<<< HEAD
    public buscar(eventos: Evento[], filtro: string): Evento[] {
      return eventos.filter(evento => evento.getNome().includes(filtro));
    }
  }
  
=======
  public buscar(eventos: Evento[], filtro: string): Evento[] {
    return eventos.filter((evento) => evento.getNome().includes(filtro));
  }
}

export class BuscaPorData implements EstrategiaDeBusca {
  public buscar(eventos: Evento[], filtro: string): Evento[] {
    const dataFiltro = new Date(filtro);
    return eventos.filter(
      (evento) => evento.getData().toDateString() === dataFiltro.toDateString()
    );
  }
}
>>>>>>> 5125cd0aab406e86ed232c44a64239064eb91791
