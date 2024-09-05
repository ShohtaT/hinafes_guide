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
          content: "場内駐車場についての情報を記載", 
          images: ["parking.png"] 
        },
        {
          title: "場外駐車場について", 
          content: "場外駐車場についての情報を記載" 
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