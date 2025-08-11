import { Bridge } from '../../const';
import { postMessage } from './post-message';
import { getLocation } from './get-location';
import { openLocation } from './open-location';
import { navigateTo } from './navigate-to';
import { navigateBack } from './navigate-back';
import { redirectTo } from './redirect-to';
import { switchTab } from './switch-tab';

// 在这里添加具体的需要暴露的方法名
export function register() {
  Bridge.postMessage = postMessage;
  Bridge.getLocation = getLocation;
  Bridge.openLocation = openLocation;
  Bridge.navigateTo = navigateTo;
  Bridge.navigateBack = navigateBack;
  Bridge.redirectTo = redirectTo;
  Bridge.switchTab = switchTab;
}
