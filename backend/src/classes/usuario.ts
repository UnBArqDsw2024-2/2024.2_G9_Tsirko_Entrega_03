export class Usuario {
    private nome: string;
    private email: string;
    private senha: string;
  
    constructor(nome: string, email: string, senha: string) {
      this.nome = nome;
      this.email = email;
      this.senha = senha;
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
  }
  