import development from './development';
import production from './production';

const env = process.env.NODE_ENV || 'development';

const config = {
  development,
  production
};

export default Object.assign({}, config[env], { env });
