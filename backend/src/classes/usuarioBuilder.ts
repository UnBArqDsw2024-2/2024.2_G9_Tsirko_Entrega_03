import { Usuario } from './usuario';
import { SenhaProxy } from './usuarioProxy'; 

export class UsuarioBuilder {
  private nome: string = "";
  private email: string = "";
  private senha: string = "";

  public setNome(nome: string): UsuarioBuilder {
    this.nome = nome;
    return this;
  }