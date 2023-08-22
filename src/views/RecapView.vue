<template>
  <div class="view-container">
    <PageTitleBar title="Recap" />
    <h2>Mes crushs</h2>
    <ul>
      <li v-for="match in crushStore.matchs" :key="match.id">
        <div class="crush-info">
          <div>
            <span><img class="match-picture" :src="`https://zoonder.grimille.fr${match.picture}`" :alt="match.firstname"></span>
            <span>{{ match.firstname }}</span>
          </div>
          <div>{{ match.gender }}</div>
        </div>
        <div class="message-icon">
          <IconComment />
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import PageTitleBar from '@/components/layout/PageTitleBar.vue';
  import IconComment from '@/components/icons/IconComment.vue';
  import { useCrushStore } from '@/stores/crushStore.js';
  
  const crushStore = useCrushStore();
</script>

<style scoped>
  .view-container {
    margin-left: 2rem;
  }

  h2 {
    margin-bottom: 2em;
    font-size: 1.25em;
    font-weight: bold;
  }

  ul {
    list-style: none;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 2em 1em 0;
    padding: 0.5em 1em;
    cursor: pointer;
  }

  li:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  .crush-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
  }

  .match-picture {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }

  .crush-info div:first-of-type {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  .crush-info div:first-of-type span:last-of-type {
    font-weight: bold;
    font-size: 1em;
  }

  .crush-info div:last-of-type {
    padding: 0.25em 0.5em;
    font-size: 1em;
    font-weight: bold;
    background: rgb(247, 247, 247);
    border-radius: 30px;
    text-transform: uppercase;
    display: inline-block;
  }

  .message-icon {
    background: rgb(247, 247, 247);
    border-radius: 30px;
    padding: 0.75em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
