import NProgress from 'nprogress';
import { createRouter, createWebHashHistory } from 'vue-router';

export const ROUTERS = [
  {
    path: '/introduce',
    name: 'introduce',
    meta: {
      title: '介绍'
    },
    children: [
      {
        path: '/introduce/explain',
        name: 'explain',
        component: () => import('../view/introduce/explain/index.md'),
        meta: {
          title: '开发说明'
        }
      }
    ]
  },
  {
    path: '/common',
    name: 'common',
    meta: {
      title: '各端通用'
    },
    children: [
      {
        path: '/common/navigate-to',
        name: 'navigateTo',
        component: () => import('../view/common/navigate-to/index.md'),
        meta: {
          title: '跳转到某页'
        }
      },
      {
        path: '/common/navigate-back',
        name: 'navigateBack',
        component: () => import('../view/common/navigate-back/index.md'),
        meta: {
          title: '返回上一页'
        }
      },
      {
        path: '/common/redirect-to',
        name: 'redirectTo',
        component: () => import('../view/common/redirect-to/index.md'),
        meta: {
          title: '重定向'
        }
      },
      {
        path: '/common/switch-tab',
        name: 'switchTab',
        component: () => import('../view/common/switch-tab/index.md'),
        meta: {
          title: '跳转tab页'
        }
      },
      {
        path: '/common/get-location',
        name: 'getLocation',
        component: () => import('../view/common/get-location/index.md'),
        meta: {
          title: '获取位置信息'
        }
      },
      {
        path: '/common/open-location',
        name: 'openLocation',
        component: () => import('../view/common/open-location/index.md'),
        meta: {
          title: '打开地图'
        }
      }
    ]
  },
  {
    path: '/wx-my',
    name: 'wxMy',
    meta: {
      title: '微信与支付宝'
    },
    children: [
      {
        path: '/wx-my/post-message',
        name: 'postMessage',
        component: () => import('../view/wx-my/post-message/index.md'),
        meta: {
          title: '发送消息'
        }
      }
    ]
  },
  {
    path: '/android-ios',
    name: 'androidIos',
    meta: {
      title: '安卓与苹果'
    },
    children: [
      {
        path: '/android-ios/get-area',
        name: 'getArea',
        component: () => import('../view/android-ios/get-area/index.md'),
        meta: {
          title: '获取区域'
        }
      },
      {
        path: '/android-ios/get-areas',
        name: 'getAreas',
        component: () => import('../view/android-ios/get-areas/index.md'),
        meta: {
          title: '获取库存区域'
        }
      },
      {
        path: '/android-ios/get-token',
        name: 'getToken',
        component: () => import('../view/android-ios/get-token/index.md'),
        meta: {
          title: '获取token'
        }
      },
      {
        path: '/android-ios/goto-order-detail',
        name: 'gotoOrderDetail',
        component: () => import('../view/android-ios/goto-order-detail/index.md'),
        meta: {
          title: '进详情页'
        }
      },
      {
        path: '/android-ios/update-app-message-share-data',
        name: 'updateAppMessageShareData',
        component: () => import('../view/android-ios/update-app-message-share-data/index.md'),
        meta: {
          title: '分享内容'
        }
      },
      {
        path: '/android-ios/update-timeline-share-data',
        name: 'updateTimelineShareData',
        component: () => import('../view/android-ios/update-timeline-share-data/index.md'),
        meta: {
          title: '按钮分享内容'
        }
      }
    ]
  }
];

export const REDIRECT = {
  path: '/:pathMatch(.*)',
  redirect: ROUTERS[0].children[0].path
};

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...Object.values(ROUTERS).reduce((pre, cur) => {
      pre.push(...cur.children);
      return pre;
    }, []),
    REDIRECT
  ],
  scrollBehavior() {
    document.getElementById('container').scrollTop = 0;
  }
});

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
