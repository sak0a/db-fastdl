<script setup lang="ts">
</script>

<template>
  <div class="fixed left-0 right-0 spotlight z-10"></div>
  <div class="animate-fadescale font-sans antialiased bg-black text-white grid min-h-screen place-content-center overflow-hidden">
    <div class="max-w-520px text-center z-20">
      <h1 class="text-8xl sm:text-10xl font-medium mb-8" v-text="'Oh Nooo'" />
      <p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight">
        Something went wrong
      </p>
      <div class="w-full flex items-center justify-center">
        <NuxtLink to="/" class="gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer">
          Go back Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
@use "@/assets/main.sass"
</style>
