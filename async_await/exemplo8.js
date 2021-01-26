import delay from '../util/delay.js'


const log = console.log;

async function* foo() {
  await delay(5000)
  yield "a"
}

const c = foo();
log(await c.next())
