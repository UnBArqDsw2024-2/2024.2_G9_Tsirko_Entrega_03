export class Evento {
    private nome: string;
    private data: Date;
    private horario: string;
    private descricao: string;
  
    constructor(nome: string, data: Date, horario: string, descricao: string) {
      this.nome = nome;
      this.data = data;
      this.horario = horario;
      this.descricao = descricao;
    }
  
    public getNome(): string {
      return this.nome;
    }
  
    public getDescricao(): string {
      return this.descricao;
    }
  
    public getData(): Date {
      return this.data;
    }
  
    public getHorario(): string {
      return this.horario;
    }
  }
  