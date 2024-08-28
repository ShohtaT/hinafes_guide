<template>
  <div class="belongings-view">
    <ChecklistCategory 
      v-for="category in categories" 
      :key="category.id" 
      :category="category"
      @update="updateCategory" 
    />
  </div>
</template>

<script>
import ChecklistCategory from '../components/ChecklistCategory.vue'

export default {
  name: 'BelongingsView',
  components: {
    ChecklistCategory
  },
  data() {
    return {
      categories: []
    }
  },
  methods: {
    loadData() {
      const storedData = localStorage.getItem('belongingsData')
      if (storedData) {
        this.categories = JSON.parse(storedData)
      } else {
        // デフォルトデータ
        this.categories = [
          {
            id: 1,
            title: "モバイル関連",
            items: [
              { id: 1, text: "充電ケーブル", checked: false },
              { id: 2, text: "スマホ", checked: false },
              { id: 3, text: "モバイルバッテリー", checked: false }
            ]
          },
          {
            id: 2,
            title: "衣類・アクセサリー",
            items: [
              { id: 4, text: "着替え", checked: false },
              { id: 5, text: "ライブ用の替えの服", checked: false },
              { id: 6, text: "フード付きバスタオル", checked: false },
              { id: 7, text: "レインコート", checked: false },
              { id: 8, text: "帽子", checked: false },
              { id: 9, text: "サングラス", checked: false }
            ]
          },
          {
            id: 3,
            title: "test",
            items: [
              { id: 10, text: "着替え", checked: false },
              { id: 11, text: "ライブ用の替えの服", checked: false },
              { id: 12, text: "フード付きバスタオル", checked: false },
              { id: 13, text: "レインコート", checked: false },
              { id: 14, text: "帽子", checked: false },
              { id: 15, text: "サングラス", checked: false }
            ]
          }
        ]
        this.saveData()
      }
    },
    updateCategory(updatedCategory) {
      const index = this.categories.findIndex(c => c.id === updatedCategory.id);
      if (index !== -1) {
        this.categories[index] = updatedCategory;
        this.saveData();
      }
    },
    saveData() {
      localStorage.setItem('belongingsData', JSON.stringify(this.categories));
    }
  },
  mounted() {
    this.loadData()
  }
}
</script>

<style scoped>
.belongings-view {
  padding: 8px 0 24px 0;
  min-height: 100%;
  min-width: 100%;
}
</style>