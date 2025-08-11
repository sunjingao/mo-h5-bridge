export async function getLocation(args: any) {
  return new Promise((resolve, reject) => {
    my.getLocation({
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
