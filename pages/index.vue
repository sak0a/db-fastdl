<script setup lang="ts">

</script>

<template>
  <div class="fixed left-0 right-0 spotlight z-10"></div>
  <div class="page__container">
    <div class="section__container">
      <h1>Fast Downloads</h1>
      <h2>i guess</h2>
      <div class="container__grid">
        <br />
        <NuxtLink to="/tf2" class="link__page">
          Team Fortress 2 Downloads
        </NuxtLink>
        <NuxtLink to="/web" class="link__page">
          Web Dev Downloads
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
@use "@/assets/main.sass"
.page__container
  .section__container
    .link__page
      @apply gradient-border sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer
</style>