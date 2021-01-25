import fetch from 'node-fetch'; // modulo que traz window.fetch para o Node.js

const log = console.log;

log("Sync A")

// Declaração de função será içada
async function getPosts() {
  try {
    log("Sync C")
    const res = await fetch('https://my-json-server2.typicode.com/typicode/demo/posts'); // Blocking... go to background
    log("Sync E")
    const json = await res.json(); // Blocking... go to background
    log("Sync F")
  } catch (e) {
    log("Sync E Backup")
    log("Sync F Backup")
  }
}

log("Sync B")

getPosts() // Sync

log("Sync D")


