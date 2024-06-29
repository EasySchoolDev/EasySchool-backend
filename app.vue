<script setup lang="ts">
const appConfig = useAppConfig()

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'zh-CN'
  },
  title: {
    textContent: appConfig.title
  },
})

const localStorageDarkMode = localStorage.getItem('dark-mode');
if (localStorageDarkMode === 'dark') {
  document.documentElement.classList.add('dark');
} else if (localStorageDarkMode === 'light') {
  document.documentElement.classList.remove('dark');
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark');
}
</script>

<template>
  <div class="bg-white dark:bg-slate-800">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
</style>

