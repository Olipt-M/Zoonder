<template>
  <Header/>
  <Menu/>
  <main>
    <RouterView/>
  </main>
  <Overlay v-if="menuStore.opened"/>
  <OverlayItsAMatch v-if="crushStore.matchOverlayOpened"/>
  <OverlayNotConnected v-if="connectionStore.isLoginOverlayOpened"/>
  <CrushIndicator/>
</template>

<script setup>
  import Header from '@/components/layout/Header.vue';
  import Menu from '@/components/layout/Menu.vue';
  import Overlay from '@/components/overlays/Overlay.vue';
  import OverlayItsAMatch from '@/components/overlays/OverlayItsAMatch.vue';
  import OverlayNotConnected from '@/components/overlays/OverlayNotConnected.vue';
  import CrushIndicator from '@/components/layout/CrushIndicator.vue';
  import { RouterView } from 'vue-router';
  import { useCrushStore } from '@/stores/crushStore.js';
  import { useMenuStore } from '@/stores/menuStore.js';
  import { useConnectionStore } from '@/stores/connectionStore.js';

  const crushStore = useCrushStore();
  const menuStore = useMenuStore();
  const connectionStore = useConnectionStore();

</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
  background: linear-gradient(to bottom, #a8ff78, #78ffd6);
  color: rgb(24, 24, 24);
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  }
</style>

