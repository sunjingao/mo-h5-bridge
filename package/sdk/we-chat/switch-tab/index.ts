export async function switchTab(args: any) {
  return new Promise((resolve, reject) => {
    wx.miniProgram.switchTab({
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
