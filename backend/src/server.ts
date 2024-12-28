import Fastify from 'fastify';
import autoLoad from '@fastify/autoload';
import { join } from 'path';

const fastify = Fastify({
  logger: true,
});

// Auto-carregar rotas e plugins
fastify.register(autoLoad, {
  dir: join(__dirname, 'routes'),
});

fastify.register(autoLoad, {
  dir: join(__dirname, 'plugins'),
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('🚀 Server is running at http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
