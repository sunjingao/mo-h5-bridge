export async function updateAppMessageShareData(args: any) {
  return new Promise((resolve, reject) => {
    wx.updateAppMessageShareData({
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
