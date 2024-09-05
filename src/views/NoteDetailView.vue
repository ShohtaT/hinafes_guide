<template>
  <div class="note-detail">
    <div v-if="note" class="content">
      <h2>{{ note.title }}</h2>
      <div v-html="note.content"></div>
    </div>
    <div v-else class="content">
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
  },
  mounted() {
    // コンポーネントがマウントされたときにスクロール位置をトップにリセット
    window.scrollTo(0, 0);
  }
}
</script>

<style scoped>
.content {
  margin: 48px 24px;
  max-width: 700px;
}
@media (min-width: 700px) {
  .content {
    max-width: 652px;
    margin: 48px auto;
  }
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