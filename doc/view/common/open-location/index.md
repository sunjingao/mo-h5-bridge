## openLocation
按照经纬度打开地图

### 使用说明
+ 以微信小程序的api为准

```vue preview
<template>
<div>
    在console中查看
    <m-button @click="handleCheck">检验</m-button>
</div>
</template>
<script lang="ts" setup>
import { initBridge, Bridge } from '@/main'

initBridge({
  requestUrl: `https://trip-sit-tc.mobje.cn/tsl/api/app/wx-auth/getWxAuthInfo`
});

async function handleCheck() {
  Bridge.openLocation({
    latitude: 39.909,
    longitude: 116.39742,
  });
}
</script>
```
