<template>
  <div class="view-container">
    <PageTitleBar class="page-title-bar" title="Crush" />
    <div class="form-container">
      <form @submit.prevent="login">
        <h2>Connexion à Zoonder</h2>
        <p class="missing-info-message">{{ missingInfoMessage }}</p>

        <label for="pseudo">Pseudo</label>
        <input type="text" id="pseudo" v-model="pseudo" required autocomplete="username"/>

        <label for="password">Mot de passe</label>
        <input type="password" id="password" v-model="password" required autocomplete="current-password"/>

        <button type="submit">Commencer à crusher !</button>
      </form>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { authentifyUser } from '@/services/api.js';
  import { useConnectionStore } from '@/stores/connectionStore.js';
  import PageTitleBar from '@/components/layout/PageTitleBar.vue';
  import { useRouter } from 'vue-router';

  const connectionStore = useConnectionStore();
  const pseudo = ref('');
  const password = ref('');
  const missingInfoMessage = ref('');
  const redirectLink = ref('');
  const router = useRouter();

  const login = () => {
    authentifyUser({ pseudo: pseudo.value, password: password.value })
      .then(response => {
        if (response.success === false) {
          missingInfoMessage.value = response.message;
          redirectLink.value = 'connection';
        } else {
          connectionStore.switchToConnected();
          router.push({ name: 'swipe'});
        }
      })
      .catch(error => console.error(error));
  };
</script>

<style scoped>
  .page-title-bar {
    margin-left: 2rem;
  }
  
  .form-container {
    width: 350px;
    margin: auto;
    margin-top: 4em;
  }

  .missing-info-message {
    color: red;
    margin-bottom: 1em;
    font-style: italic;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  h2 {
    margin-bottom: 2em;
    text-align: center;
  }

  label {
    margin-bottom: 0.25em;
  }

  input {
    border: none;
    background: whitesmoke;
    margin-bottom: 1em;
    padding: 0.5em;
    border-radius: 9px;
  }

  button {
    width: 100%;
    background: linear-gradient(to bottom, #a8ff78, #78ffd6);
    padding: 0.5rem;
    border: none;
    margin-top: 1em;
    cursor: pointer;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
    text-transform: uppercase;
    font-family: 'Zen Kaku Gothic New', sans-serif;
    border-radius: 30px;
    color: black;
    font-weight: 500;
  }

  button:active {
    transform: translate3d(0, 1px, 0);
  }
</style>