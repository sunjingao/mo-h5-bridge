## getArea
获取区域

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
  let areas = await Bridge.getArea();
  console.log(areas);
}
</script>
```
