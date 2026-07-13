import { Bridge } from '../../const';

import { getLocation } from './get-location';
import { openLocation } from './open-location';
import { postMessage } from './post-message';
import { navigateTo } from './navigate-to';
import { navigateBack } from './navigate-back';
import { switchTab } from './switch-tab';
import { redirectTo } from './redirect-to';
// import { updateAppMessageShareData } from './update-app-message-share-data';
// import { updateTimelineShareData } from './update-timeline-share-data';

export function register() {
  console.log('[Bridge] we-chat register start', new Date().toISOString());
  Bridge.navigateTo = navigateTo;
  Bridge.navigateBack = navigateBack;
  Bridge.redirectTo = redirectTo;
  Bridge.switchTab = switchTab;
  Bridge.postMessage = postMessage;
  Bridge.getLocation = getLocation;
  Bridge.openLocation = openLocation;
  // Bridge.updateAppMessageShareData = updateAppMessageShareData;
  // Bridge.updateTimelineShareData = updateTimelineShareData;
  console.log('[Bridge] we-chat register done', new Date().toISOString());
}
