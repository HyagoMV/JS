
const log = console.log;

// Retorna um Promise implicitamente sendo 'r' o valor da Promise
async function sum(a, b) {
  log('Sync B')
  const r = a + b
  log('Sync C')
  return r; // Aqui retornamos o VALOR da Promise  -
}

log('Sync A')

sum(10, 5)     // Promise { 15 }
  .then(log)   // Async: 15

log('Sync D')

