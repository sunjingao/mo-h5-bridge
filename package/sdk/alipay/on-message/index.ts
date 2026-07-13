export async function onMessage(callback) {
  return new Promise((resolve) => {
    my.onMessage = callback;
    resolve();
  });
}
