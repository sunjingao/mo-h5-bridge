function f(t) {
  return new Promise((e) => {
    const i = document.createElement("script");
    i.type = "text/javascript", i.src = t, i.onload = function() {
      e();
    }, document.head.appendChild(i);
  });
}
const r = navigator.userAgent, m = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(r), w = /Windows|Macintosh|Linux/i.test(r) && !m, s = {
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
}, g = {
  ["is" + s.WeChatMini]: /miniProgram/i.test(r),
  // 微信小程序
  ["is" + s.AlipayMini]: /AlipayClient.*miniProgram/i.test(r),
  // 支付宝小程序
  ["is" + s.Android]: /Android/i.test(r),
  // andorid
  ["is" + s.Ios]: /iPhone|iPad|iPod/i.test(r),
  // ios
  ["is" + s.Mobile]: m,
  ["is" + s.Pc]: w
}, h = "https://appx/web-view.min.js", v = {
  // 用于在外勤app中，app返回到库存管理页面中，刷新库存管理页面
  refreshCar: void 0
};
class y {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), Object.keys(v).forEach((e) => {
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
    const n = this.map.get(e), a = n.delete(i);
    return n.size === 0 && this.map.delete(e), a;
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
const B = new y(), o = {
  navigateTo: () => {
    console.warn("Bridge:navigateTo not init");
  },
  navigateBack: () => {
    console.warn("Bridge:navigateBack not init");
  },
  switchTab: () => {
    console.warn("Bridge:switchTab not init");
  },
  getLocation: () => {
    console.warn("Bridge:getLocation not init");
  },
  openLocation: () => {
    console.warn("Bridge:openLocation not init");
  },
  postMessage: () => {
    console.warn("Bridge:postMessage not init");
  },
  onMessage: () => {
    console.warn("Bridge:onMessage not init");
  },
  authorize: () => {
    console.warn("Bridge:authorize not init");
  },
  getToken: () => {
    console.warn("Bridge:getToken not init");
  },
  gotoOrderDetail: () => {
    console.warn("Bridge:gotoOrderDetail not init");
  },
  getAreas: () => {
    console.warn("Bridge:getAreas not init");
  },
  updateAppMessageShareData: () => {
    console.warn("Bridge:updateAppMessageShareData not init");
  },
  updateTimelineShareData: () => {
    console.warn("Bridge:updateTimelineShareData not init");
  },
  getArea: () => {
    console.warn("Bridge:getArea not init");
  }
};
async function P(t) {
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
async function T(t) {
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
async function b(t) {
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
async function C(t) {
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
function W(t) {
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
function J() {
  o.postMessage = P, o.onMessage = M, o.getLocation = T, o.openLocation = b, o.navigateTo = L, o.navigateBack = A, o.redirectTo = C, o.switchTab = W;
}
async function x() {
  await f(h), J();
}
const S = "https://res.wx.qq.com/open/js/jweixin-1.6.0.js";
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
async function V(t) {
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
async function $(t) {
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
async function I(t) {
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
async function j(t) {
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
async function R(t) {
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
async function k(t) {
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
function l() {
  o.navigateTo = I, o.navigateBack = j, o.redirectTo = k, o.switchTab = R, o.postMessage = $, o.getLocation = E, o.openLocation = V;
}
async function D(t) {
  const e = location.href.split("#")[0];
  return await fetch(`${t.requestUrl}?url=${e}`, {
    method: "GET"
  }).then((i) => i.json());
}
function O(t) {
  async function e() {
    const i = await D(t);
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
async function N(t) {
  await f(S), t.requestUrl ? (await O(t), wx.ready(function() {
    l();
  })) : l();
}
const p = g.isAndroid, _ = (t) => {
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
window.setupWebViewJavascriptBridge = p ? _ : q;
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
          return new Promise((a, d) => {
            e.callHandler(
              "sendToNative",
              // 传递给原生的参数
              {
                type: i,
                value: n
              },
              (u) => {
                console.log("fromNativeParams 1", u);
                const c = typeof u == "string" ? JSON.parse(u) : u;
                console.log("fromNativeParams 2", c), c.type === "success" ? (console.log("fromNativeParams 3", c.value), a(c.value)) : d(c.value);
              }
            );
          });
        };
      }), e.registerHandler(
        "receiveFromNative",
        (i, n) => {
          console.log(1111, i);
          const a = typeof i == "string" ? JSON.parse(i) : i;
          console.log(2222, a), B.get(a.type).forEach((d) => {
            console.log(3333, a.value), d(a.value);
          }), n();
        }
      ), t();
    });
  });
}
async function U(t) {
  g.isAlipayMini ? await x() : g.isWeChatMini ? await N(t) : g.isMobile && await H();
}
export {
  o as Bridge,
  B as BridgeReceive,
  U as initBridge
};
//# sourceMappingURL=mo-h5-bridge.js.map
