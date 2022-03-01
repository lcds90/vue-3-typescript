<script setup lang="ts">
import { ref, onMounted } from 'vue'
import fetchCount from '../services/fetchCount'
import ControlBar from './ControlBar.vue'

interface Props {
  limit: number,
  alertMessageOnLimit?: string,
}

// const props = defineProps<Props>()
const props = withDefaults(defineProps<Props>(), {
  alertMessageOnLimit: 'Max limit reached'
})
const count = ref<number | null>(null)
const showAlert = ref<boolean>(false);

onMounted(() => {
  fetchCount((initialCount) => {
    count.value = initialCount
  })
})

function addCount(num: number) {
  if (count.value !== null) {
    if(count.value >= props.limit){
      showAlert.value = true
    } else {
      showAlert.value = false
      count.value += num
    }
  }
}

</script>

<template>
  <p>{{ count }}</p>
  <p>
    <p v-show="showAlert">{{props.alertMessageOnLimit}}</p>
    <button @click="addCount(1)">Add</button>
  </p>
  <ControlBar
    @add-count="addCount"
    @reset-count="count = 0"
  >

  </ControlBar>
</template>
