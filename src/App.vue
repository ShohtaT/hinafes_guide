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
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-text);
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
  padding-bottom: 60px; /* BottomNavigationの高さ分の余白 */
}
</style>