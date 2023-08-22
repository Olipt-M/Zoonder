<template>
  <nav :class="{opened: menuStore.opened}">
    <div class="menu-header">
      <h4>Menu</h4>
      <button type="button" class="close-menu" @click="menuStore.closeMenu()"><IconCross class="icons close-icon"/></button>
    </div>
    <ul>
      <li><RouterLink :to="{name: 'swipe'}" class="li-text" @click="redirect()">Swipe !</RouterLink><IconChevron class="icons"/></li>
      <li><RouterLink :to="{name: 'recap'}" class="li-text" @click="redirect()">Mon recap</RouterLink><IconChevron class="icons"/></li>
      <li v-if="!connectionStore.isConnected">
        <RouterLink :to="{name: 'connection'}" class="li-text" @click="menuStore.closeMenu()">Connexion</RouterLink><IconChevron class="icons"/>
      </li>
      <li v-else>
        <RouterLink :to="{name: 'connection'}" class="li-text" @click="closeMenu()">Déconnexion</RouterLink><IconChevron class="icons"/>
      </li>
    </ul>
  </nav>
</template>

<script setup>
  import IconCross from '@/components/icons/IconCross.vue';
  import IconChevron from '@/components/icons/IconChevron.vue';
  import { RouterLink } from 'vue-router';
  import { useMenuStore } from '@/stores/menuStore.js';
  import { useConnectionStore } from '@/stores/connectionStore.js';

  const menuStore = useMenuStore();
  const connectionStore = useConnectionStore();
  const closeMenu = () => {
    menuStore.closeMenu();
    connectionStore.switchToDisconnected();
  };
  const redirect = () => {
    if (!connectionStore.isConnected) {
      connectionStore.openOverlay()
    }
    menuStore.closeMenu()
  };
</script>

<style scoped>
  nav {
    position: fixed;
    top: 0;
    right: 0;
    width: 280px;
    height: 100vh;
    background-color: rgb(51, 51, 51);
    transform: translate(100%, 0);
    transition: transform 0.3s ease-in-out;
    z-index: 200;
  }

  nav.opened {
    transform: translate(0, 0);
    transition: transform 0.3s ease-in-out;
  }

  .menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.25em;
    margin: 2em 1em;
  }

  h4 {
    color: rgb(58, 240, 58);
    text-transform: uppercase;
  }

  .menu-header button {
    cursor: pointer;
    background: none;
    border: none;
    color: whitesmoke;
  }
  
  li {
    list-style-type: none;
    padding: 0.25em;
    margin: 0 1em;
    color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  li:hover {
    background-color: rgb(72, 72, 72);
  }

  .li-text {
    width: 100%;
    text-decoration: none;
    color: whitesmoke;
    transform: translate(0, 0);
    transition: transform 0.4s ease-in-out;
  }

  .li-text:hover {
    transform: translate(1em, 0);
    transition: transform 0.4s ease-in-out;
  }

  .icons {
    opacity: 0.75;
  }

  .close-icon:hover {
    transform: rotate(-180deg);
    transition: transform 0.3s ease-in-out;
  }
  
</style>
