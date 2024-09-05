<template>
  <div class="note-detail">
    <div class="header">
      <router-link to="/note" class="back-link">&lt;</router-link>
      <h1>Note詳細</h1>
    </div>
    <div v-if="note" class="content">
      <h2>{{ note.title }}</h2>
      <div v-html="note.content"></div>
    </div>
    <div v-else>
      Loading...
    </div>
    <router-link to="/note" class="button_note">一覧に戻る</router-link>
  </div>
</template>

<script>
export default {
  name: 'NoteDetailView',
  data() {
    return {
      note: null
    }
  },
  async created() {
    const noteId = parseInt(this.$route.params.id);
    await this.fetchNoteData(noteId);
  },
  methods: {
    async fetchNoteData(id) {
      try {
        // 動的にモジュールをインポート
        const noteModule = await import(`../views/noteshow/note${id}.js`);
        this.note = noteModule[`note${id}`] || null;
        if (!this.note) {
          console.error('Note not found');
          // エラー処理やリダイレクトなどを行います
        }
      } catch (error) {
        console.error('Error loading note:', error);
        // エラー処理やリダイレクト
      }
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center; /* 垂直方向の中央揃え */
  position: relative; /* スペーサーの位置を調整するために相対位置を指定 */
  height: 40px;
  background-color: var(--color-primary);
}
.back-link {
  font-size: 20px; /* リンクのサイズを調整 */
  text-decoration: none; /* デフォルトの下線を削除 */
  color: var(--color-text);
  margin-left: 8px;
}
.content {
  margin: 8px 24px;
}
h1 {
  position: absolute; /* 中央揃えのために絶対位置指定 */
  left: 50%; /* 左から50%の位置 */
  transform: translateX(-50%); /* 中央に合わせるために水平に移動 */
  margin: 0; /* デフォルトのマージンを削除 */
  font-size: 18px;
}
h2 {
  font-size: 20px;
}
.spacer {
  flex: 1; /* 空要素が残りのスペースを埋める */
}

.button_note {
  color: var(--color-text);
  border: 1px solid var(--color-text);
  background-color: var(--color-primary);
  width: 120px;
  height: 32px;
  font-size: 16px;
  font-weight: 400;
  margin: 16px auto;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
</style>