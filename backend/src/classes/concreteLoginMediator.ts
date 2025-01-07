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
  public redirecionarParaArea(usuario: Usuario): void{
    if (usuario.getTipo() === 'espectador'){ // Usuario ainda nao possui um indentificador de tipo - Mudar conforme alteracoes na classe usuario
      console.log('Redirecionando para página de espectador');
      // Logica para redirecionar para area de espectador
    } else {
      console.log('Redirecionando para página de circo');
      // Logica para redirecionar para area de circo
    }

  }
}
