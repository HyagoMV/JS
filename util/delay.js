export default async function delay(time) {
  // await (async () => setTimeout(Promise.resolve, time))();
  await new Promise(res => setTimeout(res, time))
}
