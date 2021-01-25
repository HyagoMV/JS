import fetch from 'node-fetch'; // modulo que traz window.fetch para o Node.js

const log = console.log;

log("Sync A")

// Declaração de função será içada
async function getPosts() {

  log("Sync C")
  const res = await fetch('https://ERROR.com/typicode/demo/posts') // Blocking... go to background
    .catch(res => log('Sync E'));
  log("Sync F")
  try {
    const json = await res.json() // Blocking... go to background
  } catch (e) {
    log("Sync G")
  }
  log("Sync H")
}

log("Sync B")

getPosts() // Sync

log("Sync D")


