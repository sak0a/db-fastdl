<script setup lang="ts">

</script>

<template>
  <div class="fixed left-0 right-0 spotlight z-10"></div>
  <div class="page__container">
    <img src="~/assets/img/tf2-logo.webp" alt="Logo" />
    <div class="section__container">
      <NuxtLink to="/" class="back-home-btn gradient-border ">
        <i class="fas fa-arrow-left text-white text-lg" aria-hidden="true"></i>
        <span class="sr-only">Back to Home</span>
      </NuxtLink>
      <h1>sᴀᴋᴀ's ᴅᴏᴅɢᴇʙᴀʟʟ sᴇʀᴠᴇʀ</h1>
      <h2>Fast Download for Maps / Models / Materials</h2>
      <div class="container__grid">
        <br />
        <a href="https://discord.gg/JuxYYVEkzc" target="_blank" rel="noopener noreferrer" class="link__page">
          <i class="fab fa-discord text-white text-lg mr-2" aria-hidden="true"></i>
          Join the Discord
        </a>
        <a ref="/tf" class="link__page">
          Go to Directory
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
@use "@/assets/main.sass"
</style>