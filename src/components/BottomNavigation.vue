<template>
  <nav class="bottom-navigation">
    <router-link 
      v-if="!isLiveOrBelongingsView" 
      to="/belongings" 
      class="nav-item" 
      :class="[checklistClass, { 'active': isActive('/belongings') }]"
    >
      <img 
        src="../assets/checklist_logo.svg" 
        class="icon" 
        :style="checklistIconStyle" 
      />
      チェックリスト
    </router-link>
    <div 
      v-else
      class="nav-item" 
      :class="[checklistClass, { 'active': isActive('/belongings') }]"
    >
      <img 
        src="../assets/checklist_logo.svg" 
        class="icon" 
        :style="checklistIconStyle" 
      />
      チェックリスト
    </div>
    <div 
      class="nav-item" 
      @click="showNoteMessage" 
      :class="noteClass"
    >
      <img 
        src="../assets/note_logo.svg" 
        class="icon" 
        :style="noteIconStyle" 
      />
      Note
    </div>
  </nav>
</template>


<script>
export default {
  name: 'BottomNavigation',
  computed: {
    isLiveOrBelongingsView() {
      const path = this.$route.path;
      return path === '/live' || path === '/belongings';
    },
    checklistClass() {
      return this.isLiveOrBelongingsView ? 'primary-text' : 'gray-text';
    },
    noteClass() {
      return this.isLiveOrBelongingsView ? 'gray-text' : 'primary-text';
    },
    checklistIconStyle() {
      return this.isLiveOrBelongingsView ? 'filter: invert(35%) sepia(100%) saturate(1000%) hue-rotate(180deg) brightness(93%) contrast(90%);' : '';
    },
    noteIconStyle() {
      return this.isLiveOrBelongingsView ? '' : 'filter: invert(21%) sepia(91%) saturate(2994%) hue-rotate(342deg) brightness(100%) contrast(99%);';
    }
  },
  methods: {
    showNoteMessage() {
      alert('Note機能は現在開発中です。');
    },
    isActive(route) {
      return this.$route.path === route;
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
