## navigateTo
跳转到非tabBar中的某一页

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

initBridge()

async function handleCheck() {
  Bridge.navigateTo({
    url: `/pages/esign/index?aa=111`
  });
}
</script>
```
