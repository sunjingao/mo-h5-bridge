## getAreas
获取库存页面的区域

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
    let areas = await Bridge.getAreas();
    console.log(areas);
  }
</script>
```
