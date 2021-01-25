import fetch from 'node-fetch'; // modulo que traz window.fetch para o Node.js

const log = console.log;

log("Sync A")

// Declaração de função será içada
async function getPosts() {
  log("Sync C")
  const res = await fetch('https://my-json-server.typicode.com/typicode/demo/posts'); // Blocking... go to background
  log("Sync E")
  const json = await res.json(); // Blocking... go to background
  log("Sync F")
}

log("Sync B")

getPosts() // Sync

log("Sync D")


