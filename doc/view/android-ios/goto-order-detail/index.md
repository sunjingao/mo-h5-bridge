## gotoOrderDetail
进入订单详情页，库存页面，点击订单进入详情页

### 使用说明

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
  Bridge.gotoOrderDetail({
    orderNo: '111',
    orderType: 11,
    vehicleType: 1
  });
}
</script>
```
