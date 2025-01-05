import { FastifyInstance } from 'fastify';
import { Evento } from '../models/evento'; 

const eventos: Evento[] = []; 

export default async function (fastify: FastifyInstance) {
  fastify.get('/eventos', async (request, reply) => {
    return eventos;
  });

  fastify.post('/eventos', async (request, reply) => {
    const { nome, descricao } = request.body as { nome: string; descricao: string };
    const novoEvento = new Evento(nome, descricao);
    eventos.push(novoEvento);
    reply.code(201).send(novoEvento);
  });
}
