## updateTimelineShareData
自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容

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
  Bridge.updateTimelineShareData({
    title: '大学生领券享8折专属特惠', // 分享标题
    link: '大学生领券享8折专属特惠', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: 'https://mobje-pro-04-1309183960.cos.ap-beijing.myqcloud.com/share.jpg' // 分享图标
  });
}
</script>
```
