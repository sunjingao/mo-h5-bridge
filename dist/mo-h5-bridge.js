function w(t) {
  return new Promise((e) => {
    const i = document.createElement("script");
    i.type = "text/javascript", i.src = t, i.onload = function() {
      e();
    }, document.head.appendChild(i);
  });
}
const r = navigator.userAgent, h = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(r), y = /Windows|Macintosh|Linux/i.test(r) && !h, c = {
  WeChatMini: "WeChatMini",
  // 微信小程序
  AlipayMini: "AlipayMini",
  // 支付宝小程序
  Android: "Android",
  // 安卓端
  Ios: "Ios",
  // ios端
  Mobile: "Mobile",
  // 移动端
  Pc: "Pc"
  // pc端
}, l = {
  ["is" + c.WeChatMini]: /miniProgram/i.test(r),
  // 微信小程序
  ["is" + c.AlipayMini]: /AlipayClient.*miniProgram/i.test(r),
  // 支付宝小程序
  ["is" + c.Android]: /Android/i.test(r),
  // andorid
  ["is" + c.Ios]: /iPhone|iPad|iPod/i.test(r),
  // ios
  ["is" + c.Mobile]: h,
  ["is" + c.Pc]: y
}, P = "https://appx/web-view.min.js", M = {
  // 用于在外勤app中，app返回到库存管理页面中，刷新库存管理页面
  refreshCar: void 0
};
class T {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), Object.keys(M).forEach((e) => {
      this.map.set(e, /* @__PURE__ */ new Set());
    });
  }
  // 添加元素到指定键的集合
  add(e, i) {
    return this.map.has(e) || this.map.set(e, /* @__PURE__ */ new Set()), this.map.get(e).add(i), this;
  }
  // 从指定键的集合中删除元素
  delete(e, i) {
    if (!this.map.has(e))
      return !1;
    const n = this.map.get(e), o = n.delete(i);
    return n.size === 0 && this.map.delete(e), o;
  }
  // 检查指定键的集合是否包含元素
  has(e, i) {
    return this.map.has(e) && this.map.get(e).has(i);
  }
  // 获取指定键的集合
  get(e) {
    return this.map.get(e) || /* @__PURE__ */ new Set();
  }
  // 删除整个键及其集合
  deleteKey(e) {
    return this.map.delete(e);
  }
  // 检查键是否存在
  hasKey(e) {
    return this.map.has(e);
  }
  // 获取所有键
  keys() {
    return this.map.keys();
  }
  // 获取所有值集合
  values() {
    return this.map.values();
  }
  // 获取所有 [键, 集合] 对
  entries() {
    return this.map.entries();
  }
  // 清空所有数据
  clear() {
    this.map.clear();
  }
  // 遍历每个键的集合
  forEach(e) {
    this.map.forEach((i, n) => {
      e(i, n, this.map);
    });
  }
}
const B = new T(), d = [];
function a(t) {
  return (...e) => (console.warn(`Bridge:${t} not init`), new Promise((i, n) => {
    d.push({ name: t, args: e, resolve: i, reject: n });
  }));
}
function p() {
  if (d.length === 0)
    return;
  d.splice(0).forEach(({ name: e, args: i, resolve: n, reject: o }) => {
    s[e](...i).then(n).catch(o);
  });
}
const s = {
  navigateTo: a("navigateTo"),
  navigateBack: a("navigateBack"),
  switchTab: a("switchTab"),
  getLocation: a("getLocation"),
  openLocation: a("openLocation"),
  postMessage: a("postMessage"),
  onMessage: a("onMessage"),
  getToken: a("getToken"),
  gotoOrderDetail: a("gotoOrderDetail"),
  getAreas: a("getAreas"),
  updateAppMessageShareData: a("updateAppMessageShareData"),
  updateTimelineShareData: a("updateTimelineShareData"),
  getArea: a("getArea")
};
async function b(t) {
  return new Promise((e) => {
    my.postMessage({
      ...t
    }), e();
  });
}
async function L(t) {
  return new Promise((e) => {
    my.onMessage = t, e();
  });
}
async function A(t) {
  return new Promise((e, i) => {
    my.getLocation({
      ...t,
      success: function(n) {
        e(n);
      },
      fail: function(n) {
        i(n);
      }
    });
  });
}
async function C(t) {
  return new Promise((e, i) => {
    my.openLocation({
      ...t,
      success: function(n) {
        e(n);
      },
      fail: function(n) {
        i(n);
      }
    });
  });
}
async function W(t) {
  return new Promise((e, i) => {
    my.navigateTo({
      ...t,
      success: function(n) {
        e(n);
      },
      fail: function(n) {
        i(n);
      }
    });
  });
}
async function J(t) {
  return new Promise((e, i) => {
    my.navigateBack({
      ...t,
      success: function(n) {
        e(n);
      },
      fail: function(n) {
        i(n);
      }
    });
  });
}
async function S(t) {
  return new Promise((e, i) => {
    my.redirectTo({
      ...t,
      success: function(n) {
        e(n);
      },
      fail: function(n) {
        i(n);
      }
    });
  });
}
function x(t) {
  return new Promise((e, i) => {
    my.switchTab({
      ...t,
      success: function(n) {
        e(n);
      },
      fail: function(n) {
        i(n);
      }
    });
  });
}
function E() {
  s.postMessage = b, s.onMessage = L, s.getLocation = A, s.openLocation = C, s.navigateTo = W, s.navigateBack = J, s.redirectTo = S, s.switchTab = x, p();
}
async function $() {
  await w(P), E();
}
const V = "https://res.wx.qq.com/open/js/jweixin-1.6.0.js";
async function I(t = {}) {
  return new Promise((e, i) => {
    wx.getLocation({
      ...t,
      success: function(n) {
        console.log("success", n), e(n);
      },
      fail: function(n) {
        console.log("fail", n), i(n);
      }
    });
  });
}
async function j(t) {
  return new Promise((e, i) => {
    wx.openLocation({
      ...t,
      success: function(n) {
        e(n);
      },
      fail: function(n) {
        i(n);
      }
    });
  });
}
async function k(t) {
  return new Promise((e, i) => {
    wx.miniProgram.postMessage({
      ...t,
      success: function(n) {
        e(n);
      },
      fail: function(n) {
        i(n);
      }
    });
  });
}
async function R(t) {
  return new Promise((e, i) => {
    wx.miniProgram.navigateTo({
      ...t,
      success: function(n) {
        e(n);
      },
      fail: function(n) {
        i(n);
      }
    });
  });
}
async function D(t) {
  return new Promise((e, i) => {
    wx.miniProgram.navigateBack({
      ...t,
      success: function(n) {
        e(n);
      },
      fail: function(n) {
        i(n);
      }
    });
  });
}
async function O(t) {
  return new Promise((e, i) => {
    wx.miniProgram.switchTab({
      ...t,
      success: function(n) {
        e(n);
      },
      fail: function(n) {
        i(n);
      }
    });
  });
}
async function N(t) {
  return new Promise((e, i) => {
    wx.miniProgram.redirectTo({
      ...t,
      success: function(n) {
        e(n);
      },
      fail: function(n) {
        i(n);
      }
    });
  });
}
function m() {
  s.navigateTo = R, s.navigateBack = D, s.redirectTo = N, s.switchTab = O, s.postMessage = k, s.getLocation = I, s.openLocation = j, p();
}
async function _(t) {
  const e = location.href.split("#")[0];
  return await fetch(`${t.requestUrl}?url=${e}`, {
    method: "GET"
  }).then((i) => i.json());
}
function q(t) {
  async function e() {
    const i = await _(t);
    console.log({
      debug: !1,
      appId: i.data.appId,
      timestamp: i.data.timestamp,
      nonceStr: i.data.nonceStr,
      signature: i.data.signature,
      jsApiList: [
        // 获取当前的地理位置、速度：
        // 微信小程序与支付宝同名
        "getLocation",
        // 使用微信内置地图查看位置：
        // 微信小程序与支付宝同名
        "openLocation",
        "startRecord",
        "chooseImage",
        "scanQRCode"
      ]
    }), wx.config({
      debug: !1,
      appId: i.data.appId,
      timestamp: i.data.timestamp,
      nonceStr: i.data.nonceStr,
      signature: i.data.signature,
      jsApiList: [
        // 获取当前的地理位置、速度：
        // 微信小程序与支付宝同名
        "getLocation",
        // 使用微信内置地图查看位置：
        // 微信小程序与支付宝同名
        "openLocation",
        "startRecord",
        "chooseImage",
        "scanQRCode"
      ]
    });
  }
  return e(), Promise.resolve();
}
async function H(t) {
  await w(V), t.requestUrl ? (await q(t), wx.ready(function() {
    m();
  })) : m();
}
const v = l.isAndroid, U = (t) => {
  window.WebViewJavascriptBridge ? t(window.WebViewJavascriptBridge) : document.addEventListener(
    "WebViewJavascriptBridgeReady",
    function() {
      t(window.WebViewJavascriptBridge);
    },
    !1
  );
}, F = (t) => {
  if (window.WebViewJavascriptBridge)
    return t(window.WebViewJavascriptBridge);
  if (window.WVJBCallbacks)
    return window.WVJBCallbacks.push(t);
  window.WVJBCallbacks = [t];
  const e = document.createElement("iframe");
  e.style.display = "none", e.src = "wvjbscheme://__BRIDGE_LOADED__", document.documentElement.appendChild(e), setTimeout(function() {
    document.documentElement.removeChild(e);
  }, 0);
};
window.setupWebViewJavascriptBridge = v ? U : F;
v && window.setupWebViewJavascriptBridge(function(t) {
  t.init(function(e, i) {
    i("JS 返回给原生的消息内容");
  });
});
async function G() {
  return new Promise((t) => {
    window.setupWebViewJavascriptBridge((e) => {
      Object.keys(s).forEach((i) => {
        s[i] = function(n) {
          return new Promise((o, g) => {
            e.callHandler(
              "sendToNative",
              // 传递给原生的参数
              {
                type: i,
                value: n
              },
              (f) => {
                console.log("fromNativeParams 1", f);
                const u = typeof f == "string" ? JSON.parse(f) : f;
                console.log("fromNativeParams 2", u), u.type === "success" ? (console.log("fromNativeParams 3", u.value), o(u.value)) : g(u.value);
              }
            );
          });
        };
      }), e.registerHandler(
        "receiveFromNative",
        (i, n) => {
          console.log(1111, i);
          const o = typeof i == "string" ? JSON.parse(i) : i;
          console.log(2222, o), B.get(o.type).forEach((g) => {
            console.log(3333, o.value), g(o.value);
          }), n();
        }
      ), p(), t();
    });
  });
}
async function K(t) {
  l.isAlipayMini ? await $() : l.isWeChatMini ? await H(t) : l.isMobile && await G();
}
export {
  s as Bridge,
  B as BridgeReceive,
  K as initBridge
};
//# sourceMappingURL=mo-h5-bridge.js.map
