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
          title: "現地での交通機関", 
          content: "行きの運行状況", 
          images: ["parking.png"] 
        },
        { 
          title: "駐車場情報はこちら", 
          content: "地図情報", 
          images: ["parking.png", "parking.png","parking.png","parking.png"] 
        },
        { 
          title: "注意事項", 
          content: "重要な情報をご確認ください" 
        } // 画像なし
      ]
    }
  }
}
</script>