import { RUN_ENV } from 'mo-front-end-util';
import { init as alipayInit } from './sdk/alipay/index';
import { init as weChatInit } from './sdk/we-chat/index';
import { init as mobileInit } from './sdk/mobile/index';
import { Bridge, BridgeReceive } from './const';

async function initBridge(arg: void | InitWxConfigType) {
  if (RUN_ENV.isAlipayMini) {
    await alipayInit();
  } else if (RUN_ENV.isWeChatMini) {
    await weChatInit(arg as InitWxConfigType);
  } else if (RUN_ENV.isMobile) {
    await mobileInit();
  }
}

export { Bridge, BridgeReceive, initBridge };
