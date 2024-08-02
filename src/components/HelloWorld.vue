<template>
  <div>
    <h1>しおり</h1>
    <div v-for="(item, index) in items" :key="index">
      <input type="checkbox" v-model="item.checked" @change="saveItems">
      {{ item.text }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { text: 'ペンライト', checked: false },
        { text: 'うちわ', checked: false },
        { text: 'タオル', checked: false },
        { text: '水', checked: false }
      ]
    }
  },
  methods: {
    saveItems() {
      localStorage.setItem('shiorItems', JSON.stringify(this.items))
    },
    loadItems() {
      const savedItems = localStorage.getItem('shiorItems')
      if (savedItems) {
        this.items = JSON.parse(savedItems)
      }
    }
  },
  mounted() {
    this.loadItems()
  }
}
</script>