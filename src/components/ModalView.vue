<template>
  <div v-if="showModal" class="modal-overlay">
    <div class="modal-content">
      <h2>しおりの使い方</h2>
      <p>このしおりは<strong>同じ端末・ブラウザ</strong>で、チェックリストの内容が保存されます！</p>
      <p>しおりを利用される際は、<strong>ホーム画面にウェブサイトを追加</strong>することを推奨します。</p>
      <h3>iPhoneをお使いの方</h3>
      <p>1. ウェブブラウザの画面内にある<strong><img src="../assets/share.svg" class="share-icon" />共有ボタン</strong>をクリック</p>
      <p>2. 表示された画面から「ホーム画面に追加」をタップして完了</p>
      <h3>Androidをお使いの方</h3>
      <p>1. ウェブブラウザの画面内にある「<strong>⋮</strong>」をクリック</p>
      <p>2. 表示された画面から「ホーム画面に追加」をタップして完了</p>
      <button  class="button" @click="closeModal">閉じる</button>
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
strong {
  color: var(--color-check);
}

h2 {
  margin: 0;
}
h3 {
  margin: 24px 0 8px 0;
}

.share-icon {
  height: 16px;
  padding: 0 2px;
  fill: var(--color-check);
}

p {
  margin: 8px 0;
}

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
  padding: 24px;
  border-radius: 8px;
  width: 80%;
  max-width: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}
</style>
