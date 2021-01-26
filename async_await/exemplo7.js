import delay from '../util/delay.js'


const log = console.log;

// Retorna um Promise implicitamente sendo 'r' o valor da Promise
async function sum(a, b) {
  log('Sync B')
  await delay(3000)
  const r = a + b
  log('Sync C')
  return r; // Aqui retornamos o VALOR da Promise
}

log('Sync A')

log(await sum(10, 5)) // Sync: 15 

log('Sync D')