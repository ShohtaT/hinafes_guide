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
      // Clone the category object to avoid direct mutation
      const updatedCategory = JSON.parse(JSON.stringify(this.category));
      
      // Find the item to update based on its ID
      const item = updatedCategory.items.find(i => i.id === itemId);
      
      // Update the checked state of the item
      if (item) {
        item.checked = checked;
        
        // Emit an event to update the parent component with the updated category
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
  align-items: flex-start;
  justify-content: flex-start;
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
  vertical-align: middle;
  flex-shrink: 0;
}

input[type="checkbox"]:checked {
  background-color: var(--color-check);
  border-color: var(--color-check);
}

input[type="checkbox"]:checked::before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: url('@/assets/checkmark.svg') no-repeat center center;
  background-size: contain;
}

label {
  display: inline-flex;
  align-items: center;
  line-height: 1.5;
}
</style>
