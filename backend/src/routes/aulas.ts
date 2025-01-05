import { FastifyInstance } from 'fastify';
import { Aula } from '../classes/aula'; 

const aulas: Aula[] = []; 

export default async function (fastify: FastifyInstance) {
  fastify.get('/aulas', async (request, reply) => {
    return aulas;
  });

  fastify.post('/aulas', async (request, reply) => {
    const { nome, descricao, tema, professor } = request.body as {
      nome: string;
      descricao: string;
      tema: string;
      professor: string;
    };
    const novaAula = new Aula(nome, descricao, tema, professor);
    aulas.push(novaAula);
    reply.code(201).send(novaAula);
  });
}
