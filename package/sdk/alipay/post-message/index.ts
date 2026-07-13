export async function postMessage(args: any) {
  return new Promise((resolve) => {
    my.postMessage({
      ...args
    });

    resolve();
  });
}
