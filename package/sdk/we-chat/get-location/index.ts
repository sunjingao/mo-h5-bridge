export async function getLocation(args: any = {}) {
  return new Promise((resolve, reject) => {
    wx.getLocation({
      ...args,
      success: function (res: unknown) {
        console.log('success', res);
        resolve(res);
      },
      fail: function (err: unknown) {
        console.log('fail', err);
        reject(err);
      }
    });
  });
}
