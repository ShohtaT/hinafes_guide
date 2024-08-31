<template>
  <div class="checklist-category">
    <h2>{{ category.title }}</h2>
    <div class="category-line"></div>
    <ul>
      <li v-for="item in category.items" :key="item.id">
        <label>
          <input 
            type="checkbox" 
            :checked="item.checked" 
            @change="updateItem(item.id, $event.target.checked)"
          >
          {{ item.text }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ChecklistCategory',
  props: {
    category: Object
  },
  methods: {
    updateItem(itemId, checked) {
      const updatedCategory = JSON.parse(JSON.stringify(this.category));
      const item = updatedCategory.items.find(i => i.id === itemId);
      if (item) {
        item.checked = checked;
        this.$emit('update', updatedCategory);
      }
    }
  }
}
</script>

<style scoped>
.checklist-category {
  background-color: var(--color-background);
  border-radius: 16px;
  margin: 16px 24px;
  max-width: 700px;
}

@media (min-width: 700px){
 .checklist-category {
  max-width: 652px;
  margin: 16px auto;
 }
}

h2 {
  font-size: 18px;
  font-weight: 700;
  padding: 16px 24px;
  margin: 0;
}

.category-line {
  border-bottom: 1px solid var(--color-text);
  margin: 0 16px;
}

ul {
  list-style-type: none;
  padding: 16px 24px 8px 24px;
  margin: 0;
}

li {
  font-size: 16px;
  padding: 0 0 16px 0;
  font-weight: 500;
  width: 100%;
  display: flex;
  align-items: flex-start; /* 垂直方向の開始位置に揃える */
  justify-content: flex-start; /* 水平方向に左揃え */
}

input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 18px;
  height: 18px;
  background-color: #f0f0f0;
  border: 2px solid var(--color-text);
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  margin-right: 8px;
  display: inline-block;
  vertical-align: middle; /* チェックボックスをテキストと同じ高さに揃える */
  flex-shrink: 0; /* チェックボックスのサイズを固定する */
}

input[type="checkbox"]:checked {
  background-color: var(--color-check);
  border-color: var(--color-check);
}

input[type="checkbox"]:checked::before {
  content: "✔";
  color: var(--color-white);
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%; /* チェックマークを中央に揃える */
  left: 50%;
  transform: translate(-50%, -50%);
}

label {
  display: inline-flex; /* inline-flexに変更 */
  align-items: center; /* チェックボックスとテキストの高さを揃える */
  line-height: 1.5; /* テキストが複数行になった時の行間調整 */
}
</style>
