function w(t) {
  return new Promise((e) => {
    const i = document.createElement("script");
    i.type = "text/javascript", i.src = t, i.onload = function() {
      e();
    }, document.head.appendChild(i);
  });
}
const c = navigator.userAgent, m = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(c), h = /Windows|Macintosh|Linux/i.test(c) && !m, r = {
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
  ["is" + r.Mobile]: m,
  ["is" + r.Pc]: h
}, v = "https://appx/web-view.min.js", y = {
  // 用于在外勤app中，app返回到库存管理页面中，刷新库存管理页面
  refreshCar: void 0
};
class B {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), Object.keys(y).forEach((e) => {
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
    const n = this.map.get(e), s = n.delete(i);
    return n.size === 0 && this.map.delete(e), s;
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
const P = new B();
function a(t) {
  return (...e) => {
    console.warn(`[Bridge] ${t} called before init`, (/* @__PURE__ */ new Date()).toISOString(), "args:", e), console.warn(`[Bridge] ${t} call stack:`, new Error().stack);
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
async function T(t) {
  return new Promise((e) => {
    my.postMessage({
      ...t
    }), e();
  });
}
async function M(t) {
  return new Promise((e) => {
    my.onMessage = t, e();
  });
}
async function b(t) {
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
async function S(t) {
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
async function L(t) {
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
async function A(t) {
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
async function x(t) {
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
function C(t) {
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
function D() {
  o.postMessage = T, o.onMessage = M, o.getLocation = b, o.openLocation = S, o.navigateTo = L, o.navigateBack = A, o.redirectTo = x, o.switchTab = C;
}
async function I() {
  await w(v), D();
}
const W = "https://res.wx.qq.com/open/js/jweixin-1.6.0.js";
async function E(t = {}) {
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
async function J(t) {
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
async function O(t) {
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
async function $(t) {
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
async function V(t) {
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
async function k(t) {
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
function f() {
  console.log("[Bridge] we-chat register start", (/* @__PURE__ */ new Date()).toISOString()), o.navigateTo = $, o.navigateBack = V, o.redirectTo = N, o.switchTab = k, o.postMessage = O, o.getLocation = E, o.openLocation = J, console.log("[Bridge] we-chat register done", (/* @__PURE__ */ new Date()).toISOString());
}
async function R(t) {
  const e = location.href.split("#")[0];
  return await fetch(`${t.requestUrl}?url=${e}`, {
    method: "GET"
  }).then((i) => i.json());
}
async function j(t) {
  try {
    const e = await R(t);
    console.log("[Bridge] wx.config with:", {
      appId: e.data.appId,
      timestamp: e.data.timestamp,
      nonceStr: e.data.nonceStr,
      signature: e.data.signature
    }), wx.config({
      debug: !1,
      appId: e.data.appId,
      timestamp: e.data.timestamp,
      nonceStr: e.data.nonceStr,
      signature: e.data.signature,
      jsApiList: ["getLocation", "openLocation", "startRecord", "chooseImage", "scanQRCode"]
    });
  } catch (e) {
    console.error("[Bridge] setConfig failed:", e);
  }
}
async function _(t) {
  console.log(
    "[Bridge] we-chat init start",
    (/* @__PURE__ */ new Date()).toISOString(),
    "hasRequestUrl:",
    !!t.requestUrl
  ), await w(W), console.log("[Bridge] we-chat CDN downloaded", (/* @__PURE__ */ new Date()).toISOString()), t.requestUrl ? (await j(t), await new Promise((e) => {
    let i = !1;
    const n = () => {
      i || (i = !0, clearTimeout(s), f(), e());
    }, s = setTimeout(() => {
      console.warn("[Bridge] wx.ready timeout (5s), registering anyway"), n();
    }, 5e3);
    wx.ready(function() {
      console.log("[Bridge] we-chat wx.ready fired", (/* @__PURE__ */ new Date()).toISOString()), n();
    }), wx.error(function(u) {
      console.error("[Bridge] wx.error:", u), n();
    });
  })) : (console.log("[Bridge] we-chat register (no config)", (/* @__PURE__ */ new Date()).toISOString()), f());
}
const p = l.isAndroid, U = (t) => {
  window.WebViewJavascriptBridge ? t(window.WebViewJavascriptBridge) : document.addEventListener(
    "WebViewJavascriptBridgeReady",
    function() {
      t(window.WebViewJavascriptBridge);
    },
    !1
  );
}, q = (t) => {
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
window.setupWebViewJavascriptBridge = p ? U : q;
p && window.setupWebViewJavascriptBridge(function(t) {
  t.init(function(e, i) {
    i("JS 返回给原生的消息内容");
  });
});
async function H() {
  return new Promise((t) => {
    window.setupWebViewJavascriptBridge((e) => {
      Object.keys(o).forEach((i) => {
        o[i] = function(n) {
          return new Promise((s, u) => {
            e.callHandler(
              "sendToNative",
              // 传递给原生的参数
              {
                type: i,
                value: n
              },
              (d) => {
                console.log("fromNativeParams 1", d);
                const g = typeof d == "string" ? JSON.parse(d) : d;
                console.log("fromNativeParams 2", g), g.type === "success" ? (console.log("fromNativeParams 3", g.value), s(g.value)) : u(g.value);
              }
            );
          });
        };
      }), e.registerHandler(
        "receiveFromNative",
        (i, n) => {
          console.log(1111, i);
          const s = typeof i == "string" ? JSON.parse(i) : i;
          console.log(2222, s), P.get(s.type).forEach((u) => {
            console.log(3333, s.value), u(s.value);
          }), n();
        }
      ), t();
    });
  });
}
async function F(t) {
  try {
    l.isAlipayMini ? await I() : l.isWeChatMini ? await _(t) : l.isMobile ? await H() : console.warn("[Bridge] unknown env, RUN_ENV:", l);
  } catch (e) {
    console.error("[Bridge] initBridge failed:", e);
  }
}
export {
  o as Bridge,
  P as BridgeReceive,
  F as initBridge
};
//# sourceMappingURL=mo-h5-bridge.js.map
