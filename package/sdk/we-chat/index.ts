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

async function setConfig(arg: InitWxConfigType) {
  try {
    const configData = await getConfig(arg);

    console.log('[Bridge] wx.config with:', {
      appId: configData.data.appId,
      timestamp: configData.data.timestamp,
      nonceStr: configData.data.nonceStr,
      signature: configData.data.signature
    });

    wx.config({
      debug: false,
      appId: configData.data.appId,
      timestamp: configData.data.timestamp,
      nonceStr: configData.data.nonceStr,
      signature: configData.data.signature,
      jsApiList: ['getLocation', 'openLocation', 'startRecord', 'chooseImage', 'scanQRCode']
    });
  } catch (e) {
    console.error('[Bridge] setConfig failed:', e);
  }
}

export async function init(arg: InitWxConfigType) {
  console.log(
    '[Bridge] we-chat init start',
    new Date().toISOString(),
    'hasRequestUrl:',
    !!arg.requestUrl
  );
  await downloadCdn(URL_PATH);
  console.log('[Bridge] we-chat CDN downloaded', new Date().toISOString());

  if (arg.requestUrl) {
    await setConfig(arg);

    await new Promise<void>((resolve) => {
      let resolved = false;
      const done = () => {
        if (resolved) return;
        resolved = true;
        clearTimeout(timeout);
        register();
        resolve();
      };

      const timeout = setTimeout(() => {
        console.warn('[Bridge] wx.ready timeout (5s), registering anyway');
        done();
      }, 5000);

      wx.ready(function () {
        console.log('[Bridge] we-chat wx.ready fired', new Date().toISOString());
        done();
      });

      wx.error(function (res: any) {
        console.error('[Bridge] wx.error:', res);
        done();
      });
    });
  } else {
    console.log('[Bridge] we-chat register (no config)', new Date().toISOString());
    register();
  }
}
