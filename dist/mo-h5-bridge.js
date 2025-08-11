function m(t) {
  return new Promise((i) => {
    const n = document.createElement("script");
    n.type = "text/javascript", n.src = t, n.onload = function() {
      i();
    }, document.head.appendChild(n);
  });
}
const c = navigator.userAgent, p = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(c), w = /Windows|Macintosh|Linux/i.test(c) && !p, a = {
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
}, f = {
  ["is" + a.WeChatMini]: /miniProgram/i.test(c),
  // 微信小程序
  ["is" + a.AlipayMini]: /AlipayClient.*miniProgram/i.test(c),
  // 支付宝小程序
  ["is" + a.Android]: /Android/i.test(c),
  // andorid
  ["is" + a.Ios]: /iPhone|iPad|iPod/i.test(c),
  // ios
  ["is" + a.Mobile]: p,
  ["is" + a.Pc]: w
}, h = "https://appx/web-view.min.js", v = {
  // 用于在外勤app中，app返回到库存管理页面中，刷新库存管理页面
  refreshCar: void 0
};
class y {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), Object.keys(v).forEach((i) => {
      this.map.set(i, /* @__PURE__ */ new Set());
    });
  }
  // 添加元素到指定键的集合
  add(i, n) {
    return this.map.has(i) || this.map.set(i, /* @__PURE__ */ new Set()), this.map.get(i).add(n), this;
  }
  // 从指定键的集合中删除元素
  delete(i, n) {
    if (!this.map.has(i))
      return !1;
    const e = this.map.get(i), s = e.delete(n);
    return e.size === 0 && this.map.delete(i), s;
  }
  // 检查指定键的集合是否包含元素
  has(i, n) {
    return this.map.has(i) && this.map.get(i).has(n);
  }
  // 获取指定键的集合
  get(i) {
    return this.map.get(i) || /* @__PURE__ */ new Set();
  }
  // 删除整个键及其集合
  deleteKey(i) {
    return this.map.delete(i);
  }
  // 检查键是否存在
  hasKey(i) {
    return this.map.has(i);
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
  forEach(i) {
    this.map.forEach((n, e) => {
      i(n, e, this.map);
    });
  }
}
const P = new y(), o = {
  navigateTo: void 0,
  navigateBack: void 0,
  switchTab: void 0,
  getLocation: void 0,
  openLocation: void 0,
  postMessage: void 0,
  authorize: void 0,
  getToken: void 0,
  gotoOrderDetail: void 0,
  getAreas: void 0,
  updateAppMessageShareData: void 0,
  updateTimelineShareData: void 0,
  getArea: void 0
};
async function B(t) {
  return new Promise((i, n) => {
    my.postMessage({
      ...t,
      success: function(e) {
        i(e);
      },
      fail: function(e) {
        n(e);
      }
    });
  });
}
async function T(t) {
  return new Promise((i, n) => {
    my.getLocation({
      ...t,
      success: function(e) {
        i(e);
      },
      fail: function(e) {
        n(e);
      }
    });
  });
}
async function b(t) {
  return new Promise((i, n) => {
    my.openLocation({
      ...t,
      success: function(e) {
        i(e);
      },
      fail: function(e) {
        n(e);
      }
    });
  });
}
async function M(t) {
  return new Promise((i, n) => {
    my.navigateTo({
      ...t,
      success: function(e) {
        i(e);
      },
      fail: function(e) {
        n(e);
      }
    });
  });
}
async function L(t) {
  return new Promise((i, n) => {
    my.navigateBack({
      ...t,
      success: function(e) {
        i(e);
      },
      fail: function(e) {
        n(e);
      }
    });
  });
}
async function A(t) {
  return new Promise((i, n) => {
    my.redirectTo({
      ...t,
      success: function(e) {
        i(e);
      },
      fail: function(e) {
        n(e);
      }
    });
  });
}
function W(t) {
  return new Promise((i, n) => {
    my.switchTab({
      ...t,
      success: function(e) {
        i(e);
      },
      fail: function(e) {
        n(e);
      }
    });
  });
}
function C() {
  o.postMessage = B, o.getLocation = T, o.openLocation = b, o.navigateTo = M, o.navigateBack = L, o.redirectTo = A, o.switchTab = W;
}
async function J() {
  await m(h), C();
}
const x = "https://res.wx.qq.com/open/js/jweixin-1.6.0.js";
async function E(t = {}) {
  return new Promise((i, n) => {
    wx.getLocation({
      ...t,
      success: function(e) {
        console.log("success", e), i(e);
      },
      fail: function(e) {
        console.log("fail", e), n(e);
      }
    });
  });
}
async function V(t) {
  return new Promise((i, n) => {
    wx.openLocation({
      ...t,
      success: function(e) {
        i(e);
      },
      fail: function(e) {
        n(e);
      }
    });
  });
}
async function $(t) {
  return new Promise((i, n) => {
    wx.miniProgram.postMessage({
      ...t,
      success: function(e) {
        i(e);
      },
      fail: function(e) {
        n(e);
      }
    });
  });
}
async function j(t) {
  return new Promise((i, n) => {
    wx.miniProgram.navigateTo({
      ...t,
      success: function(e) {
        i(e);
      },
      fail: function(e) {
        n(e);
      }
    });
  });
}
async function S(t) {
  return new Promise((i, n) => {
    wx.miniProgram.navigateBack({
      ...t,
      success: function(e) {
        i(e);
      },
      fail: function(e) {
        n(e);
      }
    });
  });
}
async function I(t) {
  return new Promise((i, n) => {
    wx.miniProgram.switchTab({
      ...t,
      success: function(e) {
        i(e);
      },
      fail: function(e) {
        n(e);
      }
    });
  });
}
async function k(t) {
  return new Promise((i, n) => {
    wx.miniProgram.redirectTo({
      ...t,
      success: function(e) {
        i(e);
      },
      fail: function(e) {
        n(e);
      }
    });
  });
}
function l() {
  o.navigateTo = j, o.navigateBack = S, o.redirectTo = k, o.switchTab = I, o.postMessage = $, o.getLocation = E, o.openLocation = V;
}
async function R(t) {
  const i = location.href.split("#")[0];
  return await fetch(`${t.requestUrl}?url=${i}`, {
    method: "GET"
  }).then((n) => n.json());
}
function N(t) {
  async function i() {
    const n = await R(t);
    wx.config({
      debug: !1,
      appId: n.data.appId,
      timestamp: n.data.timestamp,
      nonceStr: n.data.nonceStr,
      signature: n.data.signature,
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
  return i(), setInterval(
    async (n) => {
      console.log("js-sdk 重新初始化", n), i();
    },
    1e3 * 60 * 4
  ), Promise.resolve();
}
async function O(t) {
  await m(x), t.requestUrl ? (await N(t), wx.ready(function() {
    l();
  })) : l();
}
const g = f.isAndroid, D = (t) => {
  window.WebViewJavascriptBridge ? t(window.WebViewJavascriptBridge) : document.addEventListener(
    "WebViewJavascriptBridgeReady",
    function() {
      t(window.WebViewJavascriptBridge);
    },
    !1
  );
}, _ = (t) => {
  if (window.WebViewJavascriptBridge)
    return t(window.WebViewJavascriptBridge);
  if (window.WVJBCallbacks)
    return window.WVJBCallbacks.push(t);
  window.WVJBCallbacks = [t];
  const i = document.createElement("iframe");
  i.style.display = "none", i.src = "wvjbscheme://__BRIDGE_LOADED__", document.documentElement.appendChild(i), setTimeout(function() {
    document.documentElement.removeChild(i);
  }, 0);
};
window.setupWebViewJavascriptBridge = g ? D : _;
g && window.setupWebViewJavascriptBridge(function(t) {
  t.init(function(i, n) {
    alert(i), n("JS 返回给原生的消息内容");
  });
});
async function q() {
  return new Promise((t) => {
    window.setupWebViewJavascriptBridge((i) => {
      Object.keys(o).forEach((n) => {
        o[n] = function(e) {
          return new Promise((s, d) => {
            i.callHandler(
              "sendToNative",
              // 传递给原生的参数
              {
                type: n,
                value: e
              },
              (u) => {
                console.log("fromNativeParams 1", u);
                const r = typeof u == "string" ? JSON.parse(u) : u;
                console.log("fromNativeParams 2", r), r.type === "success" ? (console.log("fromNativeParams 3", r.value), s(r.value)) : d(r.value);
              }
            );
          });
        };
      }), i.registerHandler(
        "receiveFromNative",
        (n, e) => {
          console.log(1111, n);
          const s = typeof n == "string" ? JSON.parse(n) : n;
          console.log(2222, s), P.get(s.type).forEach((d) => {
            console.log(3333, s.value), d(s.value);
          }), e();
        }
      ), t();
    });
  });
}
async function H(t) {
  f.isAlipayMini ? await J() : f.isWeChatMini ? await O(t) : f.isMobile && await q();
}
export {
  o as Bridge,
  P as BridgeReceive,
  H as initBridge
};
//# sourceMappingURL=mo-h5-bridge.js.map
