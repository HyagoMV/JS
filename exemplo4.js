import fetch from 'node-fetch';

const log = console.log;

log("Sync A")

fetch('https://my-json-server.typicode.com/typicode/demo/posts')
  .then(res => res.json())
  .then(res => {
    throw ('THEN 2 Ops...')
  })
  .catch(res => {            // Rede de proteção para os thens acima
    throw ('CATCH 1 Ops...')
  })
  .catch(res => log(res));    // Rede de proteção para os catch acima

log("Sync B")