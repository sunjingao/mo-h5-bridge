## 开发说明
支持移动端H5页面与微信小程序、支付宝小程序、android、ios的交互

### 规则
+ 微信小程序与支付宝小程序都有的api，如果参数不一致，以微信小程序的为主
+ 微信小程序使用时，如果需要除了如navigateTo等在miniProgram中存在的api时，初始化此库时要传递注册js-sdk的后端接口路径；支付宝小程序、android、ios使用此库时，初始化不需要传递参数
+ 所有的api使用时，均为async await的方式，方便阅读及操作
+ 客户端SDK实现请参考 https://juejin.cn/post/6844903885555892232
