// Enum para definir os tipos de usuário
export enum TipoUsuario {
  CIRCO = "circo",
  ESPECTADOR = "espectador",
}

export class Usuario {
  private nome: string;
  private email: string;
  private senha: string;
  private tipo: TipoUsuario; // Novo campo

  constructor(nome: string, email: string, senha: string, tipo: TipoUsuario) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.tipo = tipo; // Inicializando o tipo
  }

  public validarDados(): boolean {
    return this.email.includes('@') && this.senha.length >= 6;
  }

  public getNome(): string {
    return this.nome;
  }

  public getEmail(): string {
    return this.email;
  }

  public getSenha(): string {
    return this.senha;
  }

  public getTipo(): TipoUsuario {
    return this.tipo;
  }

  public setTipo(tipo: TipoUsuario): void {
    this.tipo = tipo;
  }
}
