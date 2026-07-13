export async function navigateBack(args: any) {
  return new Promise((resolve, reject) => {
    my.navigateBack({
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
