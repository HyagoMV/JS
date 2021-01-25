import fetch from 'node-fetch'; // modulo que traz window.fetch para o Node.js

const log = console.log;

log("Sync A")

// Timeout
fetch('https://ERROR/typicode/demo/posts') // throw TIMEDOUT
  .then(res => res.json())
  .then(res => log('THEN 1', res))
  .catch(res => log('CATCH fetch()'));

log("Sync B")



