interface EventoVisitor {
    visitComposite(composite: EventoComposite): void;
    visitEspetaculo(espetaculo: Espetaculo): void;
    visitAula(aula: Aula): void;
}