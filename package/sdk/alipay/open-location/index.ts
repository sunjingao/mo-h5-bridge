export async function openLocation(args: any) {
  return new Promise((resolve, reject) => {
    my.openLocation({
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
