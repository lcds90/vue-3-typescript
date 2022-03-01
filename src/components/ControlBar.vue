<script setup lang="ts">

// Emits have Literal type, only one valid string 
const emit = defineEmits<{
    (event: 'add-count', num: number): void;
    (event: 'reset-count'): void;
}>()

</script>

<template>

<p>
    <button @click="emit('add-count', 1)">Add 1</button>
    <button @click="emit('reset-count')">Reset</button>
</p>

</template>