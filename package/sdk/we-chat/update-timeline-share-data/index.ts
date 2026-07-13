export async function updateTimelineShareData(args: any) {
  return new Promise((resolve, reject) => {
    wx.updateTimelineShareData({
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
