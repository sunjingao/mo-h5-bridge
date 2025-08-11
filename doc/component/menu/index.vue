<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { ROUTERS } from '@doc/router/index';
import { cloneDeep } from 'lodash-es';

const router = useRouter();

function getMenus() {
  const MENUS_CLONE = cloneDeep(ROUTERS);
  MENUS_CLONE.forEach((item) => {
    // 第一级别只有title，其它内容都用title代表
    item.key = item.path;
    item.label = item.meta.title;
    item.children.forEach((child) => {
      child.key = child.path;
      child.label = child.meta.title;
      delete child.component;
    });
  });

  return MENUS_CLONE;
}

const items = ref(getMenus());

const openKeysRef = ref(getMenus().map((item) => item.key));
const selectedKeysRef = ref([]);

function handleSelect({ key }) {
  router.push(key);
}

watch(
  router.currentRoute,
  () => {
    selectedKeysRef.value = [router.currentRoute.value.path];
  },
  {
    immediate: true,
    deep: true
  }
);
</script>

<template>
  <m-menu
    v-model:selectedKeys="selectedKeysRef"
    v-model:openKeys="openKeysRef"
    mode="inline"
    :items="items"
    class="flex-1"
    @select="handleSelect"
  />
</template>
