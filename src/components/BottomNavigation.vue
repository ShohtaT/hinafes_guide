<template>
  <nav v-if="showNavigation" class="bottom-navigation">
    <a 
      @click.prevent="handleChecklistClick"
      class="nav-item" 
      :class="[isChecklistActive ? 'primary-text' : 'gray-text']"
    >
      <img 
        src="../assets/checklist_logo.svg" 
        class="icon" 
        :style="isChecklistActive ? checklistActiveIconStyle : checklistInactiveIconStyle" 
      />
      チェックリスト
    </a>
    <router-link 
      to="/note" 
      class="nav-item" 
      :class="[isActive('/note') ? 'primary-text' : 'gray-text']"
    >
      <img 
        src="../assets/note_logo.svg" 
        class="icon" 
        :style="isActive('/note') ? noteActiveIconStyle : noteInactiveIconStyle" 
      />
      Note
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'BottomNavigation',
  computed: {
    checklistActiveIconStyle() {
      return 'filter: invert(43%) sepia(96%) saturate(1223%) hue-rotate(184deg) brightness(95%) contrast(93%);'; // Blue color style
    },
    checklistInactiveIconStyle() {
      return 'filter: invert(28%) sepia(0%) saturate(0%) hue-rotate(186deg) brightness(96%) contrast(82%);'; // Gray color style
    },
    noteActiveIconStyle() {
      return 'filter: invert(43%) sepia(96%) saturate(1223%) hue-rotate(184deg) brightness(95%) contrast(93%);'; // Blue color style
    },
    noteInactiveIconStyle() {
      return 'filter: invert(28%) sepia(0%) saturate(0%) hue-rotate(186deg) brightness(96%) contrast(82%);'; // Gray color style
    },
    isChecklistActive() {
      return this.$route.path === '/' || this.$route.path === '/live';
    },
    showNavigation() {
      // /note/{id} 形式のパスでは非表示にする
      return !this.$route.path.match(/^\/note\/\d+$/);
    }
  },
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
    handleChecklistClick() {
      if (this.$route.path !== '/live') {
        this.$router.push('/');
      }
    }
  }
}
</script>

<style scoped>
.bottom-navigation {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--color-white);
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  height: 64px;
  margin: 0 auto;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  width: 50%;
  text-align: center;
}

.icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.primary-text {
  color: var(--color-primary);
  font-weight: 700;
}

.gray-text {
  color: var(--color-gray);
  font-weight: 500;
}

.active {
  color: var(--color-primary);
  font-weight: 700;
}
</style>