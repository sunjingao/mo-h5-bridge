export async function navigateTo(args: any) {
  return new Promise((resolve, reject) => {
    wx.miniProgram.navigateTo({
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
