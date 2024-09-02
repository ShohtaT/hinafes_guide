<template>
  <div class="belongings-view">
    <ChecklistCategory 
      v-for="category in categories" 
      :key="category.id" 
      :category="category"
      @update="updateCategory" 
    />
    <ModalView />
  </div>
</template>

<script>
import ChecklistCategory from '../components/ChecklistCategory.vue'
import ModalView from '../components/ModalView.vue'; // ここでファイル名に合わせる

export default {
  name: 'BelongingsView',
  components: {
    ChecklistCategory,
    ModalView
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
            title: "衣類・アクセサリー",
            items: [
            { id: 1, text: "着替え", checked: false },
            { id: 2, text: "ライブ用の替えの服", checked: false },
            { id: 3, text: "フード付きバスタオル", checked: false },
            { id: 4, text: "レインコート", checked: false },
            { id: 5, text: "帽子", checked: false },
            { id: 6, text: "サングラス", checked: false },
            { id: 7, text: "履き慣れた靴", checked: false },
            { id: 8, text: "ライブ用のバッグ", checked: false }
            ]
          },
          {
            id: 2,
            title: "健康・安全用品",
            items: [
              { id: 9, text: "日焼け止め", checked: false },
              { id: 10, text: "虫除け", checked: false },
              { id: 11, text: "常備薬", checked: false },
              { id: 12, text: "汗拭きシート", checked: false },
              { id: 13, text: "のど飴", checked: false },
              { id: 14, text: "折り畳み傘（日傘）", checked: false },
              { id: 15, text: "大きめの袋（45L）", checked: false }
            ]
          },
          {
            id: 3,
            title: "モバイル関係",
            items: [
              { id: 16, text: "スマホ", checked: false },
              { id: 17, text: "モバイルバッテリー", checked: false },
              { id: 18, text: "充電ケーブル", checked: false }
            ]
          },
          {
            id: 4,
            title: "推しメングッズ",
            items: [
              { id: 19, text: "推しメンタオル", checked: false },
              { id: 20, text: "ペンライト", checked: false },
              { id: 21, text: "うちわ・スケッチブック", checked: false },
              { id: 22, text: "アクリルスタンド・生写真", checked: false },
              { id: 23, text: "ライブチケット", checked: false },
              { id: 24, text: "双眼鏡", checked: false }
            ]
          },
          {
            id: 5,
            title: "その他",
            items: [
              { id: 25, text: "飲み物", checked: false },
              { id: 26, text: "ペンライトの防水対策", checked: false },
              { id: 27, text: "身分証明書", checked: false },
              { id: 28, text: "現金", checked: false },
              { id: 29, text: "乾電池（単四）", checked: false }
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
  background-color: var(--color-base);
}
</style>