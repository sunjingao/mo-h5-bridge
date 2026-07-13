function w(i) {
  return new Promise((e) => {
    const t = document.createElement("script");
    t.type = "text/javascript", t.src = i, t.onload = function() {
      e();
    }, document.head.appendChild(t);
  });
}
const c = navigator.userAgent, p = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(c), h = /Windows|Macintosh|Linux/i.test(c) && !p, r = {
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
  ["is" + r.WeChatMini]: /miniProgram/i.test(c),
  // 微信小程序
  ["is" + r.AlipayMini]: /AlipayClient.*miniProgram/i.test(c),
  // 支付宝小程序
  ["is" + r.Android]: /Android/i.test(c),
  // andorid
  ["is" + r.Ios]: /iPhone|iPad|iPod/i.test(c),
  // ios
  ["is" + r.Mobile]: p,
  ["is" + r.Pc]: h
}, v = "https://appx/web-view.min.js", y = {
  // 用于在外勤app中，app返回到库存管理页面中，刷新库存管理页面
  refreshCar: void 0
};
class P {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), Object.keys(y).forEach((e) => {
      this.map.set(e, /* @__PURE__ */ new Set());
    });
  }
  // 添加元素到指定键的集合
  add(e, t) {
    return this.map.has(e) || this.map.set(e, /* @__PURE__ */ new Set()), this.map.get(e).add(t), this;
  }
  // 从指定键的集合中删除元素
  delete(e, t) {
    if (!this.map.has(e))
      return !1;
    const n = this.map.get(e), s = n.delete(t);
    return n.size === 0 && this.map.delete(e), s;
  }
  // 检查指定键的集合是否包含元素
  has(e, t) {
    return this.map.has(e) && this.map.get(e).has(t);
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
    this.map.forEach((t, n) => {
      e(t, n, this.map);
    });
  }
}
const B = new P();
function a(i) {
  return (...e) => {
    console.warn(`[Bridge] ${i} called before init`, (/* @__PURE__ */ new Date()).toISOString(), "args:", e), console.warn(`[Bridge] ${i} call stack:`, new Error().stack);
  };
}
const o = {
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
async function M(i) {
  return new Promise((e) => {
    my.postMessage({
      ...i
    }), e();
  });
}
async function T(i) {
  return new Promise((e) => {
    my.onMessage = i, e();
  });
}
async function b(i) {
  return new Promise((e, t) => {
    my.getLocation({
      ...i,
      success: function(n) {
        e(n);
      },
      fail: function(n) {
        t(n);
      }
    });
  });
}
async function S(i) {
  return new Promise((e, t) => {
    my.openLocation({
      ...i,
      success: function(n) {
        e(n);
      },
      fail: function(n) {
        t(n);
      }
    });
  });
}
async function L(i) {
  return new Promise((e, t) => {
    my.navigateTo({
      ...i,
      success: function(n) {
        e(n);
      },
      fail: function(n) {
        t(n);
      }
    });
  });
}
async function A(i) {
  return new Promise((e, t) => {
    my.navigateBack({
      ...i,
      success: function(n) {
        e(n);
      },
      fail: function(n) {
        t(n);
      }
    });
  });
}
async function C(i) {
  return new Promise((e, t) => {
    my.redirectTo({
      ...i,
      success: function(n) {
        e(n);
      },
      fail: function(n) {
        t(n);
      }
    });
  });
}
function I(i) {
  return new Promise((e, t) => {
    my.switchTab({
      ...i,
      success: function(n) {
        e(n);
      },
      fail: function(n) {
        t(n);
      }
    });
  });
}
function D() {
  o.postMessage = M, o.onMessage = T, o.getLocation = b, o.openLocation = S, o.navigateTo = L, o.navigateBack = A, o.redirectTo = C, o.switchTab = I;
}
async function W() {
  await w(v), D();
}
const x = "https://res.wx.qq.com/open/js/jweixin-1.6.0.js";
async function J(i = {}) {
  return new Promise((e, t) => {
    wx.getLocation({
      ...i,
      success: function(n) {
        console.log("success", n), e(n);
      },
      fail: function(n) {
        console.log("fail", n), t(n);
      }
    });
  });
}
async function O(i) {
  return new Promise((e, t) => {
    wx.openLocation({
      ...i,
      success: function(n) {
        e(n);
      },
      fail: function(n) {
        t(n);
      }
    });
  });
}
async function E(i) {
  return new Promise((e, t) => {
    wx.miniProgram.postMessage({
      ...i,
      success: function(n) {
        e(n);
      },
      fail: function(n) {
        t(n);
      }
    });
  });
}
async function $(i) {
  return new Promise((e, t) => {
    wx.miniProgram.navigateTo({
      ...i,
      success: function(n) {
        e(n);
      },
      fail: function(n) {
        t(n);
      }
    });
  });
}
async function V(i) {
  return new Promise((e, t) => {
    wx.miniProgram.navigateBack({
      ...i,
      success: function(n) {
        e(n);
      },
      fail: function(n) {
        t(n);
      }
    });
  });
}
async function k(i) {
  return new Promise((e, t) => {
    wx.miniProgram.switchTab({
      ...i,
      success: function(n) {
        e(n);
      },
      fail: function(n) {
        t(n);
      }
    });
  });
}
async function R(i) {
  return new Promise((e, t) => {
    wx.miniProgram.redirectTo({
      ...i,
      success: function(n) {
        e(n);
      },
      fail: function(n) {
        t(n);
      }
    });
  });
}
function f() {
  console.log("[Bridge] we-chat register start", (/* @__PURE__ */ new Date()).toISOString()), o.navigateTo = $, o.navigateBack = V, o.redirectTo = R, o.switchTab = k, o.postMessage = E, o.getLocation = J, o.openLocation = O, console.log("[Bridge] we-chat register done", (/* @__PURE__ */ new Date()).toISOString());
}
async function j(i) {
  const e = location.href.split("#")[0];
  return await fetch(`${i.requestUrl}?url=${e}`, {
    method: "GET"
  }).then((t) => t.json());
}
function N(i) {
  async function e() {
    const t = await j(i);
    console.log({
      debug: !1,
      appId: t.data.appId,
      timestamp: t.data.timestamp,
      nonceStr: t.data.nonceStr,
      signature: t.data.signature,
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
      appId: t.data.appId,
      timestamp: t.data.timestamp,
      nonceStr: t.data.nonceStr,
      signature: t.data.signature,
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
async function _(i) {
  console.log(
    "[Bridge] we-chat init start",
    (/* @__PURE__ */ new Date()).toISOString(),
    "hasRequestUrl:",
    !!i.requestUrl
  ), await w(x), console.log("[Bridge] we-chat CDN downloaded", (/* @__PURE__ */ new Date()).toISOString()), i.requestUrl ? (await N(i), wx.ready(function() {
    console.log("[Bridge] we-chat wx.ready fired", (/* @__PURE__ */ new Date()).toISOString()), f();
  })) : (console.log("[Bridge] we-chat register (no config)", (/* @__PURE__ */ new Date()).toISOString()), f());
}
const m = l.isAndroid, q = (i) => {
  window.WebViewJavascriptBridge ? i(window.WebViewJavascriptBridge) : document.addEventListener(
    "WebViewJavascriptBridgeReady",
    function() {
      i(window.WebViewJavascriptBridge);
    },
    !1
  );
}, U = (i) => {
  if (window.WebViewJavascriptBridge)
    return i(window.WebViewJavascriptBridge);
  if (window.WVJBCallbacks)
    return window.WVJBCallbacks.push(i);
  window.WVJBCallbacks = [i];
  const e = document.createElement("iframe");
  e.style.display = "none", e.src = "wvjbscheme://__BRIDGE_LOADED__", document.documentElement.appendChild(e), setTimeout(function() {
    document.documentElement.removeChild(e);
  }, 0);
};
window.setupWebViewJavascriptBridge = m ? q : U;
m && window.setupWebViewJavascriptBridge(function(i) {
  i.init(function(e, t) {
    t("JS 返回给原生的消息内容");
  });
});
async function H() {
  return new Promise((i) => {
    window.setupWebViewJavascriptBridge((e) => {
      Object.keys(o).forEach((t) => {
        o[t] = function(n) {
          return new Promise((s, d) => {
            e.callHandler(
              "sendToNative",
              // 传递给原生的参数
              {
                type: t,
                value: n
              },
              (g) => {
                console.log("fromNativeParams 1", g);
                const u = typeof g == "string" ? JSON.parse(g) : g;
                console.log("fromNativeParams 2", u), u.type === "success" ? (console.log("fromNativeParams 3", u.value), s(u.value)) : d(u.value);
              }
            );
          });
        };
      }), e.registerHandler(
        "receiveFromNative",
        (t, n) => {
          console.log(1111, t);
          const s = typeof t == "string" ? JSON.parse(t) : t;
          console.log(2222, s), B.get(s.type).forEach((d) => {
            console.log(3333, s.value), d(s.value);
          }), n();
        }
      ), i();
    });
  });
}
async function F(i) {
  l.isAlipayMini ? await W() : l.isWeChatMini ? await _(i) : l.isMobile && await H();
}
export {
  o as Bridge,
  B as BridgeReceive,
  F as initBridge
};
//# sourceMappingURL=mo-h5-bridge.js.map
