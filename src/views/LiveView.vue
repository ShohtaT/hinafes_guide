<template>
  <div class="live-view">
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
  name: 'LiveView',
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
      const storedData = localStorage.getItem('liveData')
      if (storedData) {
        this.categories = JSON.parse(storedData)
      } else {
        // デフォルトデータ
        this.categories = [
          {
            id: 1,
            title: "必需品",
            items: [
              { id: 1, text: "スマホ", checked: false },
              { id: 2, text: "ライブチケット", checked: false },
              { id: 3, text: "身分証明書", checked: false },
              { id: 4, text: "現金", checked: false },
              { id: 5, text: "飲み物", checked: false }
            ]
          },
          {
            id: 2,
            title: "モバイル関連",
            items: [
              { id: 6, text: "モバイルバッテリー", checked: false },
              { id: 7, text: "充電ケーブル", checked: false }
            ]
          },
          {
            id: 3,
            title: "健康・安全用品",
            items: [
              { id: 8, text: "汗拭きシート", checked: false },
              { id: 9, text: "常備薬", checked: false },
              { id: 10, text: "のど飴", checked: false },
              { id: 11, text: "折り畳み傘", checked: false },
              { id: 12, text: "レインコート", checked: false },
              { id: 13, text: "虫除け", checked: false },
              { id: 14, text: "帽子", checked: false },
              { id: 15, text: "フード付きバスタオル", checked: false },
              { id: 16, text: "日焼け止め", checked: false },
            ]
          },
          {
            id: 4,
            title: "推しメングッズ",
            items: [
              { id: 17, text: "アクリルスタンド・生写真", checked: false },
              { id: 18, text: "ライブTシャツ", checked: false },
              { id: 19, text: "ペンライト", checked: false },
              { id: 20, text: "推しメンタオル", checked: false },
              { id: 21, text: "うちわ・スケッチブック", checked: false },
              { id: 22, text: "双眼鏡", checked: false }
            ]
          },
          {
            id: 5,
            title: "その他",
            items: [
              { id: 23, text: "替えのTシャツ", checked: false },
              { id: 24, text: "ペンライトの防水対策", checked: false },
              { id: 25, text: "乾電池（単4）", checked: false },
              { id: 26, text: "ライブ後の切符", checked: false },
              { id: 27, text: "エコバッグ（グッズ物販受取用）", checked: false },
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
      localStorage.setItem('liveData', JSON.stringify(this.categories));
    }
  },
  mounted() {
    this.loadData()
  }
}
</script>

<style scoped>
.live-view {
  padding: 8px 0 24px 0;
  min-height: 100%;
  min-width: 100%;
  background-color: var(--color-base);
}
</style>
