<script lang="ts" setup>
useHead({
  title: 'Tools',
  link: [
    {
      rel: 'icon', type: 'svg', href: '/favicon.svg',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage :key="$route.fullPath" />
  </NuxtLayout>
</template>
