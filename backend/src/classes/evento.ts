export abstract class Evento {
    protected data: Date;
    protected horario: string;

    constructor(protected nome: string, protected descricao: string, data: Date, horario: string) {
        this.data = data;
        this.horario = horario;
    }

    getNome(): string {
        return this.nome;
    }

    getDescricao(): string {
        return this.descricao;
    }

    getData(): Date {
        return this.data;
    }

    getHorario(): string {
        return this.horario;
    }

    abstract exibirDetalhes(): void;
}
