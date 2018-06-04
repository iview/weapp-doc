/**
 * Created by aresn on 16/7/18.
 */
import Env from './env';

let config = {
    env: Env,
    filePath: 'https://file.iviewui.com/file/',
    version: 48,
    liveVersion: 1
};

if (config.env === 'development') {
    config.filePath = 'http://127.0.0.1:9800/overview/'
}

export default config;