<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import fetchCount from './fetchCount';
interface AppInfo {
  name: string,
  slogan: string,
}

const count = ref<number | null>(null);

const appInfo: AppInfo = reactive({
  name: "Counter",
  slogan: "an app you can count on",
});

onMounted(() => {
  const callback = (initialCount: number) => {
    count.value = initialCount
  };

  setTimeout(() => {
  fetchCount(callback);
  }, 1500)
})
</script>

<template>
  <div>
    <h1>{{ appInfo.name }}</h1>
    <h1>{{ appInfo.slogan }}</h1>
  </div>
  <p>{{ count }}</p>
</template>

