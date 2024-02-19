<script setup lang="ts">

</script>

<template>
  <div class="fixed left-0 right-0 spotlight z-10"></div>
  <div class="page__container">
    <div class="grid grid-cols-2">
      <img src="~/assets/img/javascript-v1.webp" alt="Logo" />
      <img src="~/assets/img/typescript-v2.webp" alt="Logo" />
    </div>
    <div class="section__container">
      <NuxtLink to="/" class="back-home-btn gradient-border">
        <i class="fa-solid fa-arrow-left text-white text-lg" />
      </NuxtLink>
      <h1>Web Development Files</h1>
      <h2>Fast Download for JS / TS / Images / Fonts</h2>
      <div class="container__grid">
        <br />
        <a href="/js" class="link__page">
          Go to Directory
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
@import "@/assets/main.sass"
</style>