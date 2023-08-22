<template>
  <button class="crush-btn" type="button">
    <RouterLink :to="{name: 'recap'}"><IconCrowdFire/></RouterLink>
    <div v-if="crushStore.crushNumber > 0" class="compteur-crushs">{{ crushStore.crushNumber }}</div>
  </button>
</template>

<script setup>
  import IconCrowdFire from '@/components/icons/IconCrowdFire.vue';
  import { RouterLink } from 'vue-router';
  import { useCrushStore } from '@/stores/crushStore.js';

  const crushStore = useCrushStore();
</script>

<style scoped>
  .crush-btn {
    position: fixed;
    bottom: 3em;
    right: 3em;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background: linear-gradient(-45deg, #a8ff78, #78ffd6);
    box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.1);
  }

  .compteur-crushs {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: rgb(247, 247, 247);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-weight: bold;
    font-family: 'Zen Kaku Gothic New', sans-serif;
  }
</style>
