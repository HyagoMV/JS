import fetch from 'node-fetch'; // modulo que traz window.fetch para o Node.js

const log = console.log;

log("Sync A")

// Timeout
fetch('https://my-json-serverNO_EXIST.typicode.com/typicode/demo/posts') // throw TIMEDOUT
  .then(res => res.json())
  .then(res => log('THEN', res))
// witout catch  throw UnhandledPromiseRejectionWarning

log("Sync B")

