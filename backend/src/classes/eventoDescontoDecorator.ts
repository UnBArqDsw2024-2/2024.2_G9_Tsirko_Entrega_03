import { Evento } from './evento';
import { EventoDecorator } from './eventoDecorator';

export class EventoDescontoDecorator extends EventoDecorator {
    private desconto: number; 
    private descricaoDesconto: string; 

    constructor(evento: Evento, desconto: number, descricaoDesconto: string) {
        super(evento);  
        this.desconto = desconto;
        this.descricaoDesconto = descricaoDesconto;
    }
    
    public getDescricao(): string {
        let descricaoOriginal = this.evento.getDescricao();        
        
        if (this.desconto > 0) {
            descricaoOriginal += ` Aproveite ${this.descricaoDesconto} no evento!`;
        }
        
        return descricaoOriginal;
    }

    public getDesconto(): number {
        return this.desconto;
    }

    exibirDetalhes(): void {
        this.evento.exibirDetalhes();
    }
}
