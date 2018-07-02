import config from './config/env/index';
import server from './config/server';

import './config/mongoose';
import './routes/index';

server.listen(config.app.port, () => {
  console.log(`

    Poggers!!!

    Running ${process.env.NODE_ENV || 'development'} server on:
    http://localhost:${config.app.port}
  `);
});
