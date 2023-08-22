<template>
  <Overlay>
    <div class="message-container">
      <img :src="lastMatchedProfilePicture" alt="Match avatar" />
      <p>It's a match !</p>
      <button type="button" @click="crushStore.closeOverlay()">Go go go ! 😎</button>
    </div>
  </Overlay>
</template>

<script setup>
  import Overlay from '@/components/overlays/Overlay.vue';
  import { useCrushStore } from '@/stores/crushStore.js';
  
  const crushStore = useCrushStore();
  const lastMatchedProfilePicture = `https://zoonder.grimille.fr/${crushStore.lastMatchedProfile.picture}`;
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

  .message-container img {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }

  .message-container p {
    font-size: 2em;
    font-weight: bold;
    font-style: italic;
  }

  .message-container button {
    background: linear-gradient(to bottom, #a8ff78, #78ffd6);
    color: black;
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
</style>