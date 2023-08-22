<template>
  <h1 :bar-title = "title">{{ title }}</h1>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      required: true
    }
  });
</script>

<style scoped>
 h1 {
    position: relative;
    font-size: 5rem;
    font-weight: bold;
    font-style: italic;
    margin: 0.5rem 0;
    color: rgba(0,0,0,1);
    text-transform: uppercase;
  }

  h1::before, h1::after {
    content: attr(bar-title);
    position: absolute;
    top: 0;
    left: 0;
    -webkit-text-stroke: 2px rgba(0,0,0,1);
  }

  h1::before {
    transform: translateX(100%);
    left: 20px;
    color: rgba(0,0,0,0.5);
  }

  h1::after {
    transform: translateX(200%);
    left: 40px;
    color: rgba(0,0,0,0);
  }
</style>
