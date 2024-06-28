<script setup lang="ts">
import { ref } from 'vue';

const dark = ref(false);

// const localStorageTheme = localStorage.getItem('dark-mode');
const handleToggleTheme = () => {
  dark.value = !dark.value;

  if (dark.value) {
    localStorage.setItem('dark-mode', 'dark');
    document.documentElement.classList.add('dark');
  } else {
    localStorage.setItem('dark-mode','light');
    document.documentElement.classList.remove('dark');
  }
};
</script>

<template>
<UButton @click="handleToggleTheme">切换主题</UButton>
</template>

<style scoped>

</style>