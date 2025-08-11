export async function postMessage(args: any) {
  return new Promise((resolve, reject) => {
    my.postMessage({
      ...args,
      success: function (res: unknown) {
        resolve(res);
      },
      fail: function (err: unknown) {
        reject(err);
      }
    });
  });
}
