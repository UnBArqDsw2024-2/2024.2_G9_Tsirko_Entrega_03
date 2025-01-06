import { Usuario } from './usuario';
import { LoginMediator } from './loginMediator';

export class ConcreteLoginMediator implements LoginMediator {
  private usuarios: Usuario[];

  constructor(usuarios: Usuario[]) {
    this.usuarios = usuarios;
  }

  public login(email: string, senha: string): Usuario | null {
    const usuario = this.usuarios.find(user => user.getEmail() === email && user.getSenha() === senha);
    if (usuario) {
      console.log(`Login bem-sucedido para o usuário: ${usuario.getNome()}`);
      return usuario;
    }
    console.log('Login falhou: email ou senha incorretos.');
    return null;
  }
}
