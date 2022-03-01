<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import fetchCount from './services/fetchCount'

interface AppInfo {
  name: string,
  slogan: string
}

const count = ref<number | null>(null)

// type reference on nextCount
// const nextCount = computed(() => {
//   if(count.value !== null) return count.value + 1
//   return null
// })

const appInfo: AppInfo = reactive({
  name: 'Counter',
  slogan: 'an app you can count on'
})

const addCount = (num: number) => {
  if(count.value !== null){
    count.value += num
  }
}

// function dont have type reference, its typed in fetchCount
// const callback = (initialCount) => {
//   count.value = initialCount
// }

onMounted(() => {
	fetchCount((initialCount) => {
		count.value = initialCount
	})
})

</script>

<template>
  <div>
    <h1>{{ appInfo.name }}</h1>
    <h2>{{ appInfo.slogan }}</h2>
  </div>
	<p>{{ count }}</p>
</template>
