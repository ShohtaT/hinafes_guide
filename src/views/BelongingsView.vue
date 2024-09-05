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
import ModalView from '../components/ModalView.vue'; // ファイル名に合わせる

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
      const storedData = localStorage.getItem('belongingsData');

      if (storedData) {
        // データが存在する場合はそれをロードする
        this.categories = JSON.parse(storedData);
      } else {
        // データが存在しない場合はデフォルトデータを設定する
        this.categories = [
          {
            id: 1,
            title: "オタク的必需品",
            items: [
              { id: 1, text: "ライブ・駐車場チケット", checked: false },
              { id: 2, text: "推しメンタオル", checked: false },
              { id: 3, text: "アクリルスタンド", checked: false },
              { id: 4, text: "生写真", checked: false },
              { id: 5, text: "ペンライト", checked: false },
              { id: 6, text: "グッズTシャツ", checked: false },
              { id: 7, text: "ラバーバンド", checked: false },
              { id: 8, text: "SKINSTICKER", checked: false },
              { id: 9, text: "うちわ", checked: false },
              { id: 10, text: "スケッチブック", checked: false },
              { id: 11, text: "双眼鏡", checked: false },
              { id: 12, text: "生写真スリーブ", checked: false },
              { id: 13, text: "硬質ケース", checked: false },
              { id: 14, text: "フード付きバスタオル", checked: false },
              { id: 15, text: "ペンライトの防水対策", checked: false },
              { id: 16, text: "乾電池（単四）", checked: false },
              { id: 17, text: "聖地マップ", checked: false }
            ]
          },
          {
            id: 2,
            title: "一般的必需品",
            items: [
              { id: 18, text: "身分証明書", checked: false },
              { id: 19, text: "スマホ", checked: false },
              { id: 20, text: "充電コード", checked: false },
              { id: 21, text: "モバイルバッテリー", checked: false },
              { id: 22, text: "財布", checked: false },
              { id: 23, text: "現金", checked: false },
              { id: 24, text: "クレジットカード", checked: false }
            ]
          },
          {
            id: 3,
            title: "衛生用品",
            items: [
              { id: 25, text: "ハンカチ", checked: false },
              { id: 26, text: "ティッシュ", checked: false },
              { id: 27, text: "目薬", checked: false },
              { id: 28, text: "眼鏡・コンタクトレンズ", checked: false },
              { id: 29, text: "歯磨きセット", checked: false },
              { id: 30, text: "スキンケア用品", checked: false },
              { id: 31, text: "化粧品", checked: false },
              { id: 32, text: "整髪料", checked: false },
              { id: 33, text: "ヘアアイロン", checked: false },
              { id: 34, text: "耳栓", checked: false }
            ]
          },
          {
            id: 4,
            title: "衣類・アクセサリー",
            items: [
              { id: 35, text: "洋服", checked: false },
              { id: 36, text: "下着", checked: false },
              { id: 37, text: "靴下", checked: false },
              { id: 38, text: "靴", checked: false },
              { id: 39, text: "サンダル", checked: false },
              { id: 40, text: "帽子", checked: false },
              { id: 41, text: "レインコート", checked: false },
              { id: 42, text: "サングラス", checked: false },
              { id: 43, text: "ライブ用のカバン・ポーチ", checked: false }
            ]
          },
          {
            id: 5,
            title: "健康・安全用品",
            items: [
              { id: 44, text: "日焼け止め", checked: false },
              { id: 45, text: "汗拭きシート", checked: false },
              { id: 46, text: "ハンディファン", checked: false },
              { id: 47, text: "塩分タブレット", checked: false },
              { id: 48, text: "のど飴", checked: false },
              { id: 49, text: "折りたたみ傘（日傘）", checked: false },
              { id: 50, text: "虫除け", checked: false },
              { id: 51, text: "常備薬", checked: false },
              { id: 52, text: "酔い止め", checked: false }
            ]
          },
          {
            id: 6,
            title: "その他",
            items: [
              { id: 53, text: "大きめの袋（45Lくらい）", checked: false },
              { id: 54, text: "飲み物", checked: false },
              { id: 55, text: "軽食・お菓子", checked: false },
              { id: 56, text: "筆記用具・メモ", checked: false },
              { id: 57, text: "パソコン", checked: false },
              { id: 58, text: "タブレット端末", checked: false },
            ]
          }
        ];
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
      localStorage.setItem('belongingsData', JSON.stringify(this.categories));
    }
  },
  mounted() {
    this.loadData();
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
