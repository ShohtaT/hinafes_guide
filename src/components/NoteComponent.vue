<template>
  <div class="note-container">
    <div 
      v-for="(note, index) in notes" 
      :key="index" 
      class="note-item"
      @click="navigateToDetail(index + 1)"
    >
      <div :class="getCategoryClass(note.content)" class="note-content">
        {{ note.content }}
      </div>
      <h3>{{ note.title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoteComponent',
  props: {
    notes: {
      type: Array,
      required: true
    }
  },
  methods: {
    getCategoryClass(content) {
      if (content === "イベント・体験") return "category1";
      if (content === "グッズ・関連商品") return "category2";
      if (content === "アクセス・サービス") return "category3";
      if (content === "その他") return "category4";
      return ""; // その他のカテゴリの場合
    },
    navigateToDetail(id) {
      this.$router.push(`/note/${id}`);
    }
  }
}
</script>

<style scoped>
.note-container {
  margin: 56px 24px;
  max-width: 700px;
}

@media (min-width: 700px) {
  .note-container {
    max-width: 652px;
    margin: 56px auto;
  }
}

.note-title {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 16px 0;
}

.note-item {
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.note-item:hover {
  background-color: #f5f5f5;
}

.note-item h3 {
  font-size: 16px;
  font-weight: 600;
  margin: 8px 0 0 0;
}

.note-content {
  font-size: 14px;
  line-height: 1.5;
}

.category1 {
  color: #54C2C9; /* カテゴリ1の文字色 */
}

.category2 {
  color: #88C053; /* カテゴリ2の文字色 */
}

.category3 {
  color: #EDC256; /* カテゴリ3の文字色 */
}
.category4 {
  color: #c2c2c2; /* カテゴリ3の文字色 */
}
</style>