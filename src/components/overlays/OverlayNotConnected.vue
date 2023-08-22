<template>
  <Overlay>
    <div class="message-container">
      <p>Vous n'êtes pas connecté !</p>
      <p>Pour commencer à swiper, utilisez votre pseudonyme et le mot de passe "zoonder". Ah, le mot de passe est secret, ne le divulguez pas !</p>
      <button type="button" @click="redirect">J'y vais de ce pas !</button>
    </div>
  </Overlay>
</template>

<script setup>
  import Overlay from '@/components/overlays/Overlay.vue';
  import { useConnectionStore } from '@/stores/connectionStore.js';
  import { useRouter } from 'vue-router';
  
  const connectionStore = useConnectionStore();
  const router = useRouter();
  const redirect = () => {
  connectionStore.closeOverlay();
  router.push({ name: 'connection'});
}
</script>

<style scoped>
  .message-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25em;
    background-color: whitesmoke;
    width: 600px;
    height: 300px;
    border-radius: 20px;
  }

  .message-container p:first-of-type {
    font-size: 2rem;
    font-weight: bold;
    font-style: italic;
  }

.message-container p:last-of-type {
  font-size: 1.15rem;
  padding: 1rem;
}

  .message-container button {
    background: linear-gradient(to bottom, #a8ff78, #78ffd6);
    padding: 1em 2em;
    border: none;
    margin-top: 1em;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 1em;
    font-weight: bold;
    font-family: 'Zen Kaku Gothic New', sans-serif;
    border-radius: 30px;
  }

  .link {
    text-decoration: none;
    color: black;
  }
</style>