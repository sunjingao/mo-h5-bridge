import { BridgeReceive } from './sdk/mobile/bridge-receive';

// 桥接对象，供外部使用，这里需要表示出全部内容，既供外部调用，也展示出来方便查看
const Bridge: {
  // ----------------------- 各端通用 -----------------------
  // 范围：wx、my、客户端
  // 功能：跳转到某一页
  // 参数：wx
  navigateTo: any;
  // 范围：wx、my、客户端
  // 功能：返回上一级
  // 参数：无
  navigateBack: any;
  // 范围：wx、my、客户端
  // 功能：重定向都某页
  // 参数：wx
  redirectTo: any;
  // 范围：wx、my、客户端
  // 功能：跳转tab页
  // 参数：wx
  switchTab: any;
  // 范围：wx、my、客户端
  // 功能：获取位置 参数
  // 参数：wx
  getLocation: any;
  // 范围：wx、my、客户端
  // 功能：打开地图
  // 参数：wx
  openLocation: any;
  // ----------------------- wx、my -----------------------
  // 范围：wx、my
  // 功能：发送消息（wechat小程序中只能在h5退出项目时才能触发）
  // 参数：wx
  postMessage: any;
  // 范围：wx、my
  // 功能：接收消息（wechat小程序中只能在h5退出项目时才能触发）
  // 参数：wx
  onMessage: any;
  // ----------------------- android、ios -----------------------
  // 范围：android、ios
  // 功能：获取token
  // 参数：无
  getToken: any;
  // 范围：客户端
  // 功能：进入订单详情页，库存页面，点击订单进入详情页
  // 参数：无
  gotoOrderDetail: any;
  // 范围：客户端
  // 功能：获取库存页面的区域
  // 参数：无
  getAreas: any;
  // 范围：客户端(小程序调用不起来)
  // 功能：自定义“分享给朋友”及“分享到QQ”按钮的分享内容
  // 参数：wx
  updateAppMessageShareData: any;
  // 范围：客户端(小程序调用不起来)
  // 功能：自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
  // 参数：wx
  updateTimelineShareData: any;
  // 范围：客户端
  // 功能：获取区域
  // 参数：无
  getArea: any;
} = {
  navigateTo: () => {
    console.warn('Bridge:navigateTo not init');
  },
  navigateBack: () => {
    console.warn('Bridge:navigateBack not init');
  },
  switchTab: () => {
    console.warn('Bridge:switchTab not init');
  },
  getLocation: () => {
    console.warn('Bridge:getLocation not init');
  },
  openLocation: () => {
    console.warn('Bridge:openLocation not init');
  },
  postMessage: () => {
    console.warn('Bridge:postMessage not init');
  },
  onMessage: () => {
    console.warn('Bridge:onMessage not init');
  },
  authorize: () => {
    console.warn('Bridge:authorize not init');
  },
  getToken: () => {
    console.warn('Bridge:getToken not init');
  },
  gotoOrderDetail: () => {
    console.warn('Bridge:gotoOrderDetail not init');
  },
  getAreas: () => {
    console.warn('Bridge:getAreas not init');
  },
  updateAppMessageShareData: () => {
    console.warn('Bridge:updateAppMessageShareData not init');
  },
  updateTimelineShareData: () => {
    console.warn('Bridge:updateTimelineShareData not init');
  },
  getArea: () => {
    console.warn('Bridge:getArea not init');
  }
};

export { Bridge, BridgeReceive };
