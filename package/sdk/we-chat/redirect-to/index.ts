export async function redirectTo(args: any) {
  return new Promise((resolve, reject) => {
    wx.miniProgram.redirectTo({
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
