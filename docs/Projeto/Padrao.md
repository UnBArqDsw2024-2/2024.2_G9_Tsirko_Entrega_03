# Padrão de Documentação

## Introdução

Com o objetivo de estabelecer um padrão nas documentações do projeto, torna-se necessária a criação de um artefato que uniformize todos os demais artefatos a serem desenvolvidos. Essa padronização proporcionará à equipe maior organização e praticidade no desenvolvimento, além de garantir mais transparência e clareza na compreensão do projeto.

## Estrutura Base

Para qualquer artefato a ser desenvolvido, é necessário incluir os seguintes elementos:

1. **Título** `Nome do artefato`
2. **Introdução** `Uma breve descrição sobre o artefato e seu propósito.`
3. **Metodologia** `Explicação de como o artefato foi desenvolvido. As ferramentas utilizadas, o passo a passo seguido, entre outros detalhes importantes.`
4. **Apresentação do Artefato** `Apresentação do artefato finalizado, com o nome do artefato sendo o título deste tópico.`
5. **Análise e Resultado** `Análise, conclusões ou resultados relevantes relacionados ao artefato.`
6. **Histórico de Versão** `Registro de alterações, seguindo o padrão do histórico de versão especificado em outra seção deste documento.`

## Exemplo da estrutura base
```markdown
# Documento de Exemplo 

## Introdução
Este é um exemplo de documento para ilustrar o padrão que deve ser seguido para os artefatos. 
Ele inclui todas as seções obrigatórias, como título, introdução, metodologia, entre outras.

## Metodologia
O artefato foi desenvolvido utilizando a ferramenta Markdown, que permite criar documentos formatados de maneira simples. 
Abaixo está o passo a passo seguido para sua criação:

1. Definição das seções essenciais do documento.
2. Estruturação do conteúdo em Markdown.
3. Inclusão de exemplos de código e formatação para facilitar a compreensão.
4. Adição do histórico de versões, links e títulos de imagens.

## Artefato 
Exemplo de Documentação com Padrões

## Análise e Resultado
A análise mostra que, com a utilização de um padrão claro e organizado, a documentação se torna mais fácil de entender e manter. 
Além disso, a padronização permite que qualquer membro da equipe possa seguir o modelo sem dúvidas.

## Histórico de Versão
| Versão | Data       | Descrição                                      | Autor               | Revisor               |
|--------|------------|------------------------------------------------|---------------------|-----------------------|
| 1.0    | xx/xx/2024 | Primeira versão do artefato, incluindo título, introdução, e metodologia. | [autor](https://github.com/autor) | [Autor](https://github.com/autor) |
```

## Padrão do Histórico de versão
```markdown
| Versão | Data       | Descrição                                      | Autor               | Revisor               |
|--------|------------|------------------------------------------------|---------------------|-----------------------|
| 1.0    | XX/XX/2024 | Primeira versão do artefato, incluindo título, introdução, e metodologia. | [Autor](https://github.com/autor) | [Autor](https://github.com/autor) |
| 1.1    | XX/XX/2024 | Ajustes na estrutura de apresentação e inclusão de exemplo de imagem. | [Autor](https://github.com/autor) | [Autor](https://github.com/autor) |

```

## Padrão para tabelas com título e referência
```markdown
<div align="center">
<font size="3"><p style="text-align: center"><b>Tabela 1:</b> Exemplo de Tabela</p></font>

| Nome       | Idade | Cidade  |
|------------|-------|---------|
| João       | 30    | São Paulo |
| Maria      | 25    | Rio de Janeiro |

<font size="3"><p style="text-align: center"><b>Autor:</b> <a href="https://github.com/autor">Nome do Autor</a>, 2024.</p></font> 
</div>
```

## Padrão para imagem com título e referência
```markdown
<div align="center">
<font size="3"><p style="text-align: center"><b>Figura 1:</b> Exemplo de Imagem</p></font>

![Exemplo de Imagem](caminho/da/imagem.png)

<font size="3"><p style="text-align: center"><b>Autor:</b> <a href="https://github.com/autor">Nome do Autor</a>, 2024.</p></font> 
</div>
```
## Padrão de Atas

A ata de reuniões feita pelo grupo devem seguir o seguinte template:
```markdown

Ata de reunião Arquitetura e desenho de software - Grupo 09 - Entrega x
 Data:
 Horário:
 Local:

Participantes presentes:
- [x] [Participante](https://github.com/participante)
- [x] [Participante](https://github.com/participante)
- [x] [Participante](https://github.com/participante)
- [x] [Participante](https://github.com/participante)


Discussão:



Decisões:


Definição das tarefas
| Nome              | Tarefa |
| -                 |  -     |
```

## Histórico de Versão
| Versão | Data       | Descrição                                      | Autor               | Revisor               |
|--------|------------|------------------------------------------------|---------------------|-----------------------|
| 1.0    | 21/11/2024 | Primeira versão do artefato | [Amanda Campos](https://github.com/acamposs) | [Autor](https://github.com/autor) |
| 2.0    | 10/12/2024 | Adição do padrão de Atas | [Gabriel Freitas](https://github.com/gabrielfreitass1), [Henrique Batalha](https://github.com/HeBatalha), [Isaque Santos](https://github.com/IsaqueSH) e [Vinícius Brito](https://github.com/vini051) | [Yves Pimenta](https://github.com/yvestxt) |
