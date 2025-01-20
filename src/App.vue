
<template>
  <div v-if="loading" class="flex flex-col justify-center items-center h-screen">
    <dotlottie-player
      src="https://lottie.host/c7d31e07-c74d-428e-a5c6-a4444622c8ec/1Nq9En9Bk1.lottie"
      background="transparent"
      speed="1"
      style="width: 300px; height: 300px"
      loop
      autoplay
    ></dotlottie-player>
    
    <p class="text-black-500 text-xl mt-4">Wait, pouring coffee...</p>
  </div>

  <MainProfile v-else />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MainProfile from './pages/MainProfile.vue';

const loading = ref(true); 

onMounted(() => {
  setTimeout(() => {
    loading.value = false; 
  }, 5000); 

  const script = document.createElement('script');
  script.src = 'https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs';
  script.type = 'module';
  document.head.appendChild(script);
});
</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
