<template>
  <div class="note-container">
    <h2 class="note-title">Note</h2>
    <div 
      v-for="(note, index) in notes" 
      :key="index" 
      class="note-item"
      @click="navigateToDetail(index + 1)"
    >
      <h3>{{ note.title }}</h3>
      <div class="note-content">
        {{ note.content }}
        <div v-if="note.images && note.images.length" class="note-images-container">
          <div 
            v-for="(image, imageIndex) in note.images" 
            :key="imageIndex" 
            class="note-image-container"
          >
            <img 
              :src="getImageUrl(image)" 
              :alt="`${note.title} - Image ${imageIndex + 1}`" 
              class="note-image"
              @error="handleImageError"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoteComponent',
  props: {
    notes: {
      type: Array,
      required: true
    }
  },
  methods: {
    getImageUrl(filename) {
      if (!filename) return null;
      try {
        return require(`@/assets/noteimg/${filename}`);
      } catch (error) {
        console.warn(`Image not found: ${filename}`);
        return null;
      }
    },
    handleImageError(e) {
      console.warn(`Failed to load image: ${e.target.src}`);
      e.target.parentElement.style.display = 'none';
    },
    navigateToDetail(id) {
      this.$router.push(`/note/${id}`);
    }
  }
}
</script>

<style scoped>
.note-container {
  background-color: #f0f8ff;
  border-radius: 16px;
  margin: 16px 24px;
  max-width: 700px;
  padding: 16px;
}

@media (min-width: 700px) {
  .note-container {
    max-width: 652px;
    margin: 16px auto;
  }
}

.note-title {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 16px 0;
}

.note-item {
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.note-item:hover {
  background-color: #f5f5f5;
}

.note-item h3 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px 0;
}

.note-content {
  font-size: 14px;
  line-height: 1.5;
}

.note-images-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.note-image-container {
  width: 70px;
  height: 70px;
  overflow: hidden;
  position: relative;
}

.note-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>