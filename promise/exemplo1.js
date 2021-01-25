import fetch from 'node-fetch'; // modulo que traz window.fetch para o Node.js

const log = console.log;

log("Sync A")

fetch('https://my-json-server.typicode.com/typicode/demo/posts')
  // Cadeia de thens
  .then(res => res.json())
  .then(log)

log("Sync B")


