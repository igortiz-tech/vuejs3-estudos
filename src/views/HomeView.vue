<template>
  <div class="home">
    <Toast v-if="showToast" :alertMessage="alertMessage" />
    <Todos @badValue="triggerToast" />
  </div>
</template>

<script>
import { ref } from 'vue'
import Toast from '../components/Toast.vue'
import Todos from '../components/Todos.vue'
export default {
  components: { Toast, Todos },
  setup() {
    const showToast = ref(false)
    const alertMessage = ref('')

    const triggerToast = (msg) => {
      alertMessage.value = msg;
      showToast.value = true;
      setTimeout(() => showToast.value = false, 3000)
    }
    return { showToast, alertMessage, triggerToast }
  }
}
</script>

<style>
</style>
