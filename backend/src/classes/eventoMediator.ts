import { Usuario, TipoUsuario  } from './usuario'; 
import { Evento } from './evento'; 
import { EventoFactory } from './eventoFactory';

export class EventoMediator {
  // Método para criar um evento delegando para a factory
  criarEvento(usuario: Usuario, tipo: string, nome: string, descricao: string, ...detalhes: string[]): Evento | null {
    // Verificando se o usuário é do tipo CIRCO
    if (usuario.getTipo() === TipoUsuario.CIRCO) {
      try {
        // Usando a factory para criar o evento com o tipo e os detalhes fornecidos
        return EventoFactory.criarEvento(tipo, nome, descricao, ...detalhes);
      } catch (error) {
        console.error("Tipo de evento não identificado");
        return null;
      }
    } else {
      console.log("Usuário não autorizado a criar eventos.");
      return null;
    }
  }
}
