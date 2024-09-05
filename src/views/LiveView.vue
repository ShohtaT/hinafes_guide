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
      const storedCategoriesData = localStorage.getItem('categoriesData');
      const storedCheckStates = localStorage.getItem('checkStates');

      if (storedCategoriesData) {
        // データが存在する場合はそれをロードする
        this.categories = JSON.parse(storedCategoriesData);

        // チェック状態を適用
        const checkStates = storedCheckStates ? JSON.parse(storedCheckStates) : {};
        this.categories.forEach(category => {
          category.items.forEach(item => {
            item.checked = checkStates[item.id] || false;
          });
        });
      } else {
        // データが存在しない場合はデフォルトデータを設定する
        const defaultCategories = [
          {
            id: 1,
            title: "to do",
            items: [
              { id: 1, text: "しっかり寝て体調を整える", checked: false },
              { id: 2, text: "持ち物チェック", checked: false },
              { id: 3, text: "行きと帰りのルート確認", checked: false },
              { id: 4, text: "往復の切符購入（電車利用の場合）", checked: false },
              { id: 5, text: "天気の確認", checked: false },
              { id: 6, text: "各種コンテンツの時間確認", checked: false },
              { id: 7, text: "ペンライトに新しい電池入れる", checked: false },
              { id: 8, text: "ペンライトの防水対策", checked: false },
              { id: 9, text: "SKINSTICKERを貼る", checked: false },
              { id: 10, text: "うちわ制作", checked: false },
              { id: 11, text: "スケッチブック制作", checked: false },
              { id: 12, text: "メンバーコール・ペンライトカラー確認", checked: false },
              { id: 13, text: "コールのイメトレ", checked: false },
              { id: 14, text: "振りコピの練習", checked: false },
              { id: 15, text: "MVを観る", checked: false },
              { id: 16, text: "気持ちを高める", checked: false }
            ]
          },
          {
            id: 2,
            title: "オタク的必需品",
            items: [
              { id: 17, text: "ライブ・駐車場チケット", checked: false },
              { id: 18, text: "往復の切符（電車利用の場合）", checked: false },
              { id: 19, text: "推しメンタオル", checked: false },
              { id: 20, text: "アクリルスタンド", checked: false },
              { id: 21, text: "生写真", checked: false },
              { id: 22, text: "ペンライト", checked: false },
              { id: 23, text: "グッズTシャツ", checked: false },
              { id: 24, text: "ラバーバンド", checked: false },
              { id: 25, text: "SKINSTICKER", checked: false },
              { id: 26, text: "うちわ", checked: false },
              { id: 27, text: "スケッチブック", checked: false },
              { id: 28, text: "双眼鏡", checked: false },
              { id: 29, text: "生写真スリーブ", checked: false },
              { id: 30, text: "硬質ケース", checked: false },
              { id: 31, text: "フード付きバスタオル", checked: false },
              { id: 32, text: "ペンライトの防水対策", checked: false },
              { id: 33, text: "替えの乾電池（単四）", checked: false },
              { id: 34, text: "推しへの膨大な愛情", checked: false }
            ]
          },
          {
            id: 3,
            title: "一般的必需品",
            items: [
              { id: 35, text: "身分証明書", checked: false },
              { id: 36, text: "スマホ", checked: false },
              { id: 37, text: "充電コード", checked: false },
              { id: 38, text: "モバイルバッテリー", checked: false },
              { id: 39, text: "財布", checked: false },
              { id: 40, text: "現金", checked: false },
              { id: 41, text: "クレジットカード", checked: false }
            ]
          },
          {
            id: 4,
            title: "衛生用品",
            items: [
              { id: 42, text: "ハンカチ", checked: false },
              { id: 43, text: "ティッシュ", checked: false },
              { id: 44, text: "目薬", checked: false },
              { id: 45, text: "眼鏡・コンタクトレンズ", checked: false },
              { id: 46, text: "耳栓", checked: false }
            ]
          },
          {
            id: 5,
            title: "衣類・アクセサリー",
            items: [
              { id: 47, text: "ライブ用のカバン・ポーチ", checked: false },
              { id: 48, text: "帽子", checked: false },
              { id: 49, text: "サングラス", checked: false },
              { id: 50, text: "レインコート", checked: false },
              { id: 51, text: "替えの洋服", checked: false }
            ]
          },
          {
            id: 6,
            title: "健康・安全用品",
            items: [
              { id: 52, text: "日焼け止め", checked: false },
              { id: 53, text: "汗拭きシート", checked: false },
              { id: 54, text: "ハンディファン", checked: false },
              { id: 55, text: "塩分タブレット", checked: false },
              { id: 56, text: "のど飴", checked: false },
              { id: 57, text: "折りたたみ傘（日傘）", checked: false },
              { id: 58, text: "虫除け", checked: false },
              { id: 59, text: "常備薬", checked: false },
              { id: 60, text: "酔い止め", checked: false }
            ]
          },
          {
            id: 7,
            title: "その他",
            items: [
              { id: 61, text: "大きめの袋（荷物入れる用）", checked: false },
              { id: 62, text: "飲み物", checked: false },
              { id: 63, text: "軽食・お菓子", checked: false },
              { id: 64, text: "筆記用具・メモ", checked: false }
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
