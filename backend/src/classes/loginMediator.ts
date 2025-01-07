import { Usuario } from './usuario';

export interface LoginMediator {
  login(email: string, senha: string): Usuario | null;
  redirecionarParaArea(usuario: Usuario): void;
}
