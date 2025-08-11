/* eslint-disable */

// 下面这个方法仅用作展示，告诉使用者总共有哪些内容
const BridgeReceiveName = {
  // 用于在外勤app中，app返回到库存管理页面中，刷新库存管理页面
  refreshCar: undefined
};

class BridgeReceiveCls {
  constructor() {
    this.map = new Map();
    Object.keys(BridgeReceiveName).forEach((key) => {
      this.map.set(key, new Set());
    });
  }

  // 添加元素到指定键的集合
  add(key, value) {
    if (!this.map.has(key)) {
      this.map.set(key, new Set());
    }
    this.map.get(key).add(value);
    return this;
  }

  // 从指定键的集合中删除元素
  delete(key, value) {
    if (!this.map.has(key)) return false;
    const set = this.map.get(key);
    const result = set.delete(value);
    // 如果集合为空，删除键
    if (set.size === 0) {
      this.map.delete(key);
    }
    return result;
  }

  // 检查指定键的集合是否包含元素
  has(key, value) {
    return this.map.has(key) && this.map.get(key).has(value);
  }

  // 获取指定键的集合
  get(key) {
    return this.map.get(key) || new Set();
  }

  // 删除整个键及其集合
  deleteKey(key) {
    return this.map.delete(key);
  }

  // 检查键是否存在
  hasKey(key) {
    return this.map.has(key);
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
  forEach(callback) {
    this.map.forEach((set, key) => {
      callback(set, key, this.map);
    });
  }
}

export const BridgeReceive = new BridgeReceiveCls();
