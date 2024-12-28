import { FastifyInstance } from 'fastify';
import fastifySensible from '@fastify/sensible';

export default async function (fastify: FastifyInstance) {
  fastify.register(fastifySensible);
}
