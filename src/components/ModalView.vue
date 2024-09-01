<template>
  <div v-if="showModal" class="modal-overlay">
    <div class="modal-content">
      <h2>しおりの使い方</h2>
      <p>このしおりは<strong>同じ端末・ブラウザ</strong>で、チェックリストの内容が保存されます！</p>
      <p>しおりを利用される際は、ホーム画面にウェブサイトを追加することを推奨します。</p>
      <h3>iPhoneをお使いの方</h3>
      <p>1. ウェブブラウザの画面内にある共有ボタンをクリック</p>
      <p>2. 表示された画面から「ホーム画面に追加」をタップして完了</p>
      <h3>Androidをお使いの方</h3>
      <p>1. ウェブブラウザの画面内にある「⋮」をクリック</p>
      <p>2. 表示された画面から「ホーム画面に追加」をタップして完了</p>
      <button @click="closeModal">閉じる</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalView',
  data() {
    return {
      showModal: false,
    };
  },
  created() {
    if (!localStorage.getItem('visited')) {
      this.showModal = true;
    }
  },
  methods: {
    closeModal() {
      this.showModal = false;
      localStorage.setItem('visited', 'true');
    },
  },
};
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}
</style>
