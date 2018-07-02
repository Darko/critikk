import mongoose from 'mongoose';
import Bluebird from 'bluebird';
import config from './env/index';

mongoose.Promise = Bluebird;

mongoose.connect(config.mongo.uri, config.mongo.options)
.then(() => console.log('Connected to MongoDB'))
.catch(console.log);

export default mongoose;
