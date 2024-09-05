<template>
  <div class="top-bar">
    <h1>ひなたフェス旅のしおり</h1>
    <div v-if="isNoteShowView" class="header">
      <router-link to="/note" class="back-link">&lt;</router-link>
      <div class="note-top">Note詳細</div>
    </div>
    <div v-if="isNoteView" class="header">
      <div class="note-top">Note</div>
    </div>
    <div v-if="isHomeOrLiveView" class="tabs">
      <router-link to="/" class="tab" active-class="active">
        <img src="../assets/belongings_logo.svg" class="icon" />
        ひなたフェス旅の持ち物
        <div class="indicator"></div>
      </router-link>
      <router-link to="/live" class="tab" active-class="active">
        <img src="../assets/live_logo.svg" class="icon" />
        ライブの準備
        <div class="indicator"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  computed: {
    isHomeOrLiveView() {
      return this.$route.path === '/' || this.$route.path === '/live';
    },
    isNoteShowView() {
      return this.$route.path.startsWith('/note/');
    },
    isNoteView() {
      return this.$route.path === '/note';
    }
  }
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

.header {
  display: flex;
  align-items: center; /* 垂直方向の中央揃え */
  position: fixed; /* ヘッダーを固定 */
  top: 1; /* 上部に固定 */
  width: 100%; /* 幅を100%に設定 */
  height: 40px;
  background-color: var(--color-primary);
  z-index: 100; /* 他の要素より前面に表示 */
}
.note-top {
  position: absolute; /* 中央揃えのために絶対位置指定 */
  left: 50%; /* 左から50%の位置 */
  transform: translateX(-50%); /* 中央に合わせるために水平に移動 */
  margin: 0; /* デフォルトのマージンを削除 */
  font-size: 18px;
  font-weight: 700;
}
.back-link {
  font-size: 20px; /* リンクのサイズを調整 */
  text-decoration: none; /* デフォルトの下線を削除 */
  color: var(--color-text);
  margin-left: 8px;
}
h1 {
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding: 8px 0;
  font-style: normal;
}

.tabs {
  display: flex;
  justify-content: space-around;
  padding-bottom: 8px;
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