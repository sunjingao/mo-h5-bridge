export async function redirectTo(args: any) {
  return new Promise((resolve, reject) => {
    my.redirectTo({
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
