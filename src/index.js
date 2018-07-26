import Koa from 'koa';
import router from './router';
import Storage from './classes/storage'


export default new Koa()
    .on('error', function (err, ctx) {
        console.error(err, ctx);
    });