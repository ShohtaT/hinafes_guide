<template>
  <div class="live-view">
    <ChecklistCategory 
      v-for="category in categories" 
      :key="category.id" 
      :category="category"
      @update="updateCategory" 
      @reorder="reorderItems"
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
      categories: [],
      dataVersion: 1 // デフォルトデータのバージョン
    }
  },
  methods: {
    loadData() {
      const storedCategoriesData = localStorage.getItem('categoriesData');
      const storedCheckStates = localStorage.getItem('checkStates');
      const storedVersion = localStorage.getItem('dataVersion');

      if (storedCategoriesData && storedVersion && parseInt(storedVersion) === this.dataVersion) {
        // データのバージョンが一致する場合、タイトルと順番をロード
        this.categories = JSON.parse(storedCategoriesData);

        // チェック状態を適用
        const checkStates = storedCheckStates ? JSON.parse(storedCheckStates) : {};
        this.categories.forEach(category => {
          category.items.forEach(item => {
            item.checked = checkStates[item.id] || false;
          });
        });
      } else {
        // バージョンが異なるか、データが存在しない場合、デフォルトデータを設定する
        const defaultCategories = [
          {
            id: 1,
            title: "必需品",
            items: [
              { id: 1, text: "スマホ", checked: false },
              { id: 2, text: "ライブチケット", checked: false },
              { id: 3, text: "本人確認書類（顔写真つき）", checked: false },
              { id: 4, text: "現金", checked: false },
              { id: 5, text: "飲み物", checked: false },
              { id: 28, text: "タオル／ハンカチ", checked: false },
              { id: 16, text: "日焼け止め", checked: false},
              { id: 11, text: "雨具", checked: false },
              { id: 14, text: "帽子", checked: false }
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
              { id: 35, text: "ウェットティッシュ", checked: false },
              { id: 9, text: "常備薬", checked: false },
              { id: 30, text: "絆創膏", checked: false },
              { id: 10, text: "のど飴", checked: false },
              { id: 29, text: "折り畳み傘（日傘）", checked: false },
              { id: 12, text: "レインコート", checked: false },
              { id: 13, text: "虫除け", checked: false },
              { id: 15, text: "フード付きバスタオル", checked: false }
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
            title: "その他、あると便利なもの",
            items: [
              { id: 23, text: "替えのTシャツ", checked: false },
              { id: 33, text: "体に密着する小さなバッグ", checked: false },           
              { id: 34, text: "小さい財布", checked: false },           
              { id: 24, text: "ペンライトの防水対策", checked: false },
              { id: 25, text: "乾電池（単4）", checked: false },
              { id: 26, text: "ライブ後の切符", checked: false },
              { id: 27, text: "エコバッグ（グッズ物販受取用）", checked: false },
              { id: 31, text: "ビニール袋", checked: false },
              { id: 32, text: "ペットボトルホルダー", checked: false }
            ]
          }
        ];
        this.categories = defaultCategories;
        this.saveData();
      }
    },
    updateCategory(updatedCategory) {
      const index = this.categories.findIndex(c => c.id === updatedCategory.id);
      if (index !== -1) {
        this.categories[index] = updatedCategory;
        this.saveData();
      }
    },
    reorderItems(categoryId, reorderedItems) {
      const index = this.categories.findIndex(c => c.id === categoryId);
      if (index !== -1) {
        // 元の順番を保存
        const itemMap = new Map(this.categories[index].items.map(item => [item.id, item.checked]));
        
        // 順番を変更したアイテムでチェック状況を保持
        this.categories[index].items = reorderedItems.map(item => ({
          ...item,
          checked: itemMap.get(item.id) || false
        }));
        this.saveData();
      }
    },
    saveData() {
      // タイトルと順番を保存
      localStorage.setItem('categoriesData', JSON.stringify(this.categories));
      
      // チェック状態を保存
      const checkStates = {};
      this.categories.forEach(category => {
        category.items.forEach(item => {
          checkStates[item.id] = item.checked;
        });
      });
      localStorage.setItem('checkStates', JSON.stringify(checkStates));
      
      // バージョンを保存
      localStorage.setItem('dataVersion', this.dataVersion.toString());
    }
  },
  mounted() {
    this.loadData();
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
