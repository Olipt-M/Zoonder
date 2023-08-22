<template>
  <header>
    <div class="brand-logo-container">
      <h3>
        <IconCommunity/>
        Zoonder
      </h3>
      <p>L'appli de rencontre de ta ferme !</p>
    </div>
    <ButtonBurger/>
  </header>
</template>

<script setup>
  import ButtonBurger from '@/components/buttons/ButtonBurger.vue';
  import IconCommunity from '@/components/icons/IconCommunity.vue';
</script>

<style scoped>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5em;
  }

  .brand-logo-container h3 {
    display: flex;
    align-items: center;
    font-size: 1.75rem;
    font-weight: 800;
  }

  .brand-logo-container p {
    font-weight: 700;
  }

</style>
