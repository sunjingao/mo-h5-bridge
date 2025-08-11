客户端的sdk参考地址：
https://juejin.cn/post/6844903885555892232


// 给原生传递的的数据结构
{
    type: 自定义的交互名,
    value: 给原生的参数
},

// 回调函数返回值
{
    // 方便原生排查问题，里面的就是h5给原生传的
    native: {
        type: testSendToNative,
        value: 值
    },
    // 返回给h5的，调用成功或者失败
    type: success | fail,
    // 返回给h5的值
    value: 值
}
