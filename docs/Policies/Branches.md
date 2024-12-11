# Política de Branches

As _branches_ devem seguir o seguinte padrão:

**1.** O nome da *branch* deve possuir uma '*tag*' que é o código do épico e da história de usuário a qual se refere antes do nome.

**2.** O nome da *branch* deve ser abstraído do nome da história de usuário a qual se refere.

**3.** A _branch_ deverá possuir o padrão CamelCase ```ExUSy-NomeDaBranch ```, em que o 'x' é o número do épico e 'y' o número da história de usuário.

<b>Exemplo:</b>

```
E01US03-CriarLogin
```

Caso a _branch_ não esteja associada a alguma história de usuário, adiciona-se a tag com o número da issue.

<b>Exemplo:</b>

```
4-RefatorarLogin
```

## Histórico de Versão

| Data       | Versão | Descrição            | Autor             | Revisor
|:----------:|:------:|:--------------------:|:-----------------:| :--: |
| 10/12/2024 | 1.0 | Criação do documento de *Branches*  | [Gabriel Freitas](https://github.com/gabrielfreitass1), [Henrique Batalha](https://github.com/HeBatalha), [Isaque Santos](https://github.com/IsaqueSH) e [Vinícius Brito](https://github.com/vini051) | [Yves Pimenta](https://github.com/yvestxt) |