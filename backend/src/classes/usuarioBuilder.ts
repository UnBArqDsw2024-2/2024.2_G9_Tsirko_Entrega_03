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

  public setEmail(email: string): UsuarioBuilder {
    this.email = email;
    return this;
  }

  public setSenha(senha: string): UsuarioBuilder {
    this.senha = senha;
    return this;
  }
  
  public build(): Usuario {
    if (!this.email.includes('@')) {
      throw new Error("Email inválido!");
    }