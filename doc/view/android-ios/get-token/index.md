## getToken
获取token数据

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
  const res = await Bridge.getToken();
  console.log(res);
}
</script>
```
