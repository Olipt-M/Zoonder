<template>
  <div class="view-container">
    <PageTitleBar title="Swipe" />
    <div class="profile-container">
      <div class="profile-picture-container">
        <img :src="`https://zoonder.grimille.fr/${randomUser.picture}`" alt="Picture">
        <div class="rate-buttons">
          <button class="rate-btn" type="button" @click="likeProfile"><IconHeart/></button>
          <button class="rate-btn" type="button" @click="passProfile"><IconCross/></button>
        </div>
      </div>
      
      <div class="profile-details-container" v-if="randomUser !== undefined">
        <p class="name">{{ randomUser.firstname }}</p> <!-- Name -->
        <p class="gender">{{ randomUser.gender }}</p> <!-- Mâle / femelle -->
        <p class="age">{{ randomUser.age }} ans</p> <!-- Age -->
        <p class="description">{{ randomUser.description }}</p> <!-- Description -->
        <p class="search-for">{{ randomUser.searchFor }}</p> <!-- Relation recherchée -->
      </div>
    </div>
  </div>
</template>

<script setup>
  import IconHeart from '@/components/icons/IconHeart.vue';
  import IconCross from '@/components/icons/IconCross.vue';
  import PageTitleBar from '@/components/layout/PageTitleBar.vue';
  import { onBeforeMount, ref } from 'vue';
  import { getRandomUser } from '@/services/api.js';
  import { testMatch } from '@/services/api.js';
  import { useCrushStore } from '@/stores/crushStore.js';
  
  const crushStore = useCrushStore();
  const randomUser = ref(undefined);

  const swipeProfile = () => {
    getRandomUser()
      .then(response => randomUser.value = response)
      .catch(error => console.error(error));
  }

  const likeProfile = () => {
    testMatch({ id: randomUser.value.id })
      .then(response => {
        if (response.match) {
          crushStore.triggerMatch(randomUser.value);
        }
      })
    swipeProfile();
  }

  const passProfile = () => {
    swipeProfile();
  }

  onBeforeMount(() => {
    swipeProfile();
  });
</script>

<style scoped>
  .view-container {
    margin-left: 2rem;
  }
  .profile-container {
    display: flex;
    flex-wrap: wrap;
  }
  .profile-picture-container {
    min-width: 400px;
    width: 400px;
    height: 600px;
    position: relative;
  }

  .profile-picture-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 30px;
  }

  .profile-details-container {
    margin-left: 2em;
  }

  .profile-details-container p {
    margin-top: 0.5em;
  }

  .name {
    font-size: 2em;
    font-weight: bold;
  }

  .gender, .search-for {
    padding: 0.25em 0.5em;
    font-size: 1em;
    font-weight: bold;
    background: rgb(247, 247, 247);
    border-radius: 30px;
    text-transform: uppercase;
    display: inline-block;
  }

  .rate-buttons {
    position: absolute;
    bottom: 1em;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 30px;
  }

  .rate-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background-color: rgb(247, 247, 247);
  }
</style>