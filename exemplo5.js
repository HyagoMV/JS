import fetch from 'node-fetch'; // modulo que traz window.fetch para o Node.js

const log = console.log;

log("Sync A")

// As respostas 3xx-5xx NÃO são exceções e devem ser tratadas then()
fetch('https://my-json-server.typicode.com/typicode/demo/posts/404')
  .then(res => log('ERRO', res.status))


log("Sync B")
