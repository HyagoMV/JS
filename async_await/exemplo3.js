import fetch from 'node-fetch'; // modulo que traz window.fetch para o Node.js

const log = console.log;

log("Sync A")

// Declaração de função será içada
async function getPosts() {
  try {
    try {
      log("Sync C")
      const res = await fetch('https://my-json-server2.typicode.com/typicode/demo/posts'); // Blocking... go to background
      log("Sync E")
      const json = await res.json(); // Blocking... go to background
      log("Sync F")
    } catch (e) { // Rede de proteção para os awaits acima
      log("Sync E Backup")
      throw '';
      log("Sync F Backup")
    }
  } catch (e) { // Rede de proteção para os catch acima
    log("Sync F Backup")
  }

}

log("Sync B")

getPosts() // Sync

log("Sync D")


