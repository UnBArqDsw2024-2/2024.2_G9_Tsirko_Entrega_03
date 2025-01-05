import { FastifyInstance } from 'fastify';
import { Espetaculo } from '../models/Espetaculo'; 

const espetaculos: Espetaculo[] = []; 

export default async function (fastify: FastifyInstance) {
  fastify.get('/espetaculos', async (request, reply) => {
    return espetaculos;
  });

  fastify.post('/espetaculos', async (request, reply) => {
    const { nome, descricao, artistas } = request.body as { nome: string; descricao: string; artistas: string };
    const novoEspetaculo = new Espetaculo(nome, descricao, artistas);
    espetaculos.push(novoEspetaculo);
    reply.code(201).send(novoEspetaculo);
  });
}
