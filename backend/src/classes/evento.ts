export abstract class Evento {
    constructor(protected nome: string, protected descricao: string) {}

    getNome(): string {
        return this.nome;
    }

    abstract exibirDetalhes(): void;
}
