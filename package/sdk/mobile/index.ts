import './depend';
import { Bridge, flushPendingCalls } from '../../const';
import { BridgeReceive } from './bridge-receive.ts';

export async function init() {
  return new Promise((outResolve) => {
    // @ts-ignore
    window.setupWebViewJavascriptBridge((bridge) => {
      // H5给原生发消息
      Object.keys(Bridge).forEach((name) => {
        Bridge[name as keyof typeof Bridge] = function (toNativeParams: unknown) {
          return new Promise((resolve, reject) => {
            // 调用原生方法
            bridge.callHandler(
              'sendToNative',
              // 传递给原生的参数
              {
                type: name,
                value: toNativeParams
              },
              (data: { type: string; value: any } | string) => {
                console.log('fromNativeParams 1', data);
                const result = typeof data === 'string' ? JSON.parse(data) : data;
                console.log('fromNativeParams 2', result);
                // 原生返回回来的数据
                if (result.type === 'success') {
                  console.log('fromNativeParams 3', result.value);
                  resolve(result.value);
                } else {
                  reject(result.value);
                }
              }
            );
          });
        };
      });

      // 原生给H5发消息
      bridge.registerHandler(
        'receiveFromNative',
        (data: { type: string; value: any } | string, fn) => {
          // 从原生接到数据的数据结构
          // {
          //   type: 自定义的交互名,
          //   value: 给前端的参数
          // }

          console.log(1111, data);
          const result = typeof data === 'string' ? JSON.parse(data) : data;
          console.log(2222, result);

          BridgeReceive.get(result.type).forEach((cb) => {
            console.log(3333, result.value);
            cb(result.value);
          });

          // 原生要求必须回调
          fn();
        }
      );

      flushPendingCalls();
      outResolve();
    });
  });
}
