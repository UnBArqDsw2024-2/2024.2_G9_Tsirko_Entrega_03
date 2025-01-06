import { Evento } from './evento';

export interface EstrategiaDeBusca {
    buscar(eventos: Evento[], filtro: string): Evento[];
  }
  