<template>
  <div id="app">
    <TopBar />
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
    <BottomNavigation />
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue'
import BottomNavigation from './components/BottomNavigation.vue'

export default {
  name: 'App',
  components: {
    TopBar,
    BottomNavigation
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* max-width: 480px; */
  min-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content-wrapper {
  flex: 1;
  overflow-y: auto;
  background-color: var(--color-base);
  padding-bottom: 64px; /* BottomNavigationの高さ分の余白 */
}
</style>