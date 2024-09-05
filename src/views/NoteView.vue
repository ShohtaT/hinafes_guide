<template>
  <NoteComponent :notes="notes" />
</template>

<script>
import NoteComponent from '@/components/NoteComponent.vue'

export default {
  components: {
    NoteComponent
  },
  data() {
    return {
      notes: [
        { 
          title: "場内駐車場について", 
          content: "アクセス・サービス"
        },
        {
          title: "場外駐車場について", 
          content: "アクセス・サービス" 
        },
        { 
          title: "クロークサービス＆宅配便", 
          content: "アクセス・サービス" 
        },
        {
          title: "災害時のマニュアル",
          content: "その他"
        },
        {
          title: "飲食情報",
          content: "アクセス・サービス"
        },
        {
          title: "休憩所の情報",
          content: "アクセス・サービス"
        },
        {
          title: "会場での注意事項（日傘）",
          content: "その他"
        },
        {
          title: "ひなたフェススペシャルパレード",
          content: "イベント・体験"
        },
        {
          title: "サイリウム&コール表",
          content: "その他"
        },
        {
          title: "集合写真情報まとめ",
          content: "その他"
        },
      ]
    }
  },
  mounted() {
    // コンポーネントがマウントされたときにスクロール位置をトップにリセット
    window.scrollTo(0, 0);
  }
}
</script>