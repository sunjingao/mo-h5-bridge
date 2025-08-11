import { downloadCdn } from 'mo-front-end-util';
import { URL_PATH } from './const';
import { register } from './register';

async function getConfig(arg: InitWxConfigType) {
  const urlParam = location.href.split('#')[0];

  // return await fetch(`${arg.requestUrl}?url=${urlParam}`).then((response) => {
  //   return response.json();
  // });

  return await fetch(`${arg.requestUrl}?url=${urlParam}`, {
    method: 'GET'
  }).then((response) => {
    return response.json();
  });
}

function setConfig(arg: InitWxConfigType) {
  async function initConfig() {
    const configData = await getConfig(arg);
    wx.config({
      debug: false,
      appId: configData.data.appId,
      timestamp: configData.data.timestamp,
      nonceStr: configData.data.nonceStr,
      signature: configData.data.signature,
      jsApiList: [
        // 获取当前的地理位置、速度：
        // 微信小程序与支付宝同名
        'getLocation',
        // 使用微信内置地图查看位置：
        // 微信小程序与支付宝同名
        'openLocation',
        'startRecord',
        'chooseImage',
        'scanQRCode'
      ]
    });
  }

  initConfig();

  // // wx.error只需要注册一次，每次失败间隔会重新初始化
  // wx.error(() => {
  //   setTimeout(() => {
  //     initConfig();
  //   }, 1000 * 3);
  // });

  // 签名5min会过期，所以需要定时更新签名
  setInterval(
    async (res) => {
      console.log('js-sdk 重新初始化', res);
      initConfig();
    },
    1000 * 60 * 4
  );

  return Promise.resolve();
}

export async function init(arg: InitWxConfigType) {
  await downloadCdn(URL_PATH);

  if (arg.requestUrl) {
    await setConfig(arg);

    wx.ready(function () {
      register();
    });
  } else {
    register();
  }
}
