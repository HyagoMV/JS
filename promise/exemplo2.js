import fetch from 'node-fetch';

const log = console.log;

log("Sync A")

fetch('https://my-json-server.typicode.com/typicode/demo/posts')
  .then(res => {
    throw ('THEN 1 Ops...')
  })
  .then(res => log('THEN', res))
  .catch(res => log('CATCH', res)); // Rede de proteção para os thens acima

log("Sync B")