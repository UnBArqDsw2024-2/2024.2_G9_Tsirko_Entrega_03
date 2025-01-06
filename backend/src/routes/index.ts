import { FastifyInstance } from 'fastify';
import eventosRoutes from './eventos';
import espetaculosRoutes from './espetaculos';
import aulasRoutes from './aulas';

export default async function (fastify: FastifyInstance) {
  
  fastify.get('/', async (request, reply) => {
    return { message: 'Welcome to Fastify with TypeScript!' };
  });

  await fastify.register(eventosRoutes, { prefix: '/api' });
  await fastify.register(espetaculosRoutes, { prefix: '/api' });
  await fastify.register(aulasRoutes, { prefix: '/api' });
}
