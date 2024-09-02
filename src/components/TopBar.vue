<template>
  <div class="top-bar">
    <h1>ひなたフェス旅のしおり</h1>
    <div class="tabs">
      <router-link to="/" class="tab" active-class="active">
        <img src="../assets/belongings_logo.svg" class="icon" />
        持ち物
        <div class="indicator"></div>
      </router-link>
      <router-link to="/live" class="tab" active-class="active">
        <img src="../assets/live_logo.svg" class="icon" />
        ライブ用
        <div class="indicator"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar'
}
</script>

<style scoped>
.top-bar {
  background-color: var(--color-primary);
  color: var(--color-text);
  position: sticky;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  /*max-width: 480px;*/
  margin: 0 auto;
  width: 100%;
}

h1 {
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding-top: 8px;
  font-style: normal;
}

.tabs {
  display: flex;
  justify-content: space-around;
  padding: 8px 0;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
}

.tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-text);
  text-decoration: none;
  width: 50%; /* 画面幅の半分を占める */
  text-align: center; /* 文字を中央に配置 */
  position: relative; /* インジケーターの配置のため */
}

.indicator {
  position: absolute;
  bottom: -8px; /* タブの下端に合わせる */
  left: 0;
  width: 100%;
  height: 4px; /* インジケーターの高さ */
  background-color: transparent; /* 非アクティブ時は透明 */
  transition: background-color 0.3s ease; /* アニメーション効果 */
}

.tab.active .indicator {
  background-color: var(--color-accent-yellow); /* アクティブ時は黄色 */
}
</style>