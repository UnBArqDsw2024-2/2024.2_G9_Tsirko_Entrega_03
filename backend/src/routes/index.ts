import { FastifyInstance } from 'fastify';

export default async function (fastify: FastifyInstance) {
  fastify.get('/', async (request, reply) => {
    return { message: 'Welcome to Fastify with TypeScript!' };
  });
}
