<template>
  <button type="button" class="menu-burger" @click="menuStore.openMenu()">
    <span></span>
  </button>
</template>

<script setup>
  import { useMenuStore } from '@/stores/menuStore.js';
  const menuStore = useMenuStore();
</script>

<style scoped>
  .menu-burger {
    cursor: pointer;
    background: none;
    border: none;
    padding: 1em;
  }

  .menu-burger span {
    display: block;
    background: black;
    width: 30px;
    height: 3px;
  }
  .menu-burger span::before, .menu-burger span::after {
    content: '';
    position: relative;
    display: block;
    width: 30px;
    height: 3px;
    background: black;
  }

  .menu-burger span::before {
    transform: translate(0, -8px);
  }

.menu-burger span::after {
  transform: translate(0, 5px);
}
</style>
