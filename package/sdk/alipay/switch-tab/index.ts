export function switchTab(args: any) {
  return new Promise((resolve, reject) => {
    my.switchTab({
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
