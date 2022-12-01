<template>
  <div>
    <div class="text-xl font-bold">
      Response
    </div>
    <pre>
      {{ JSON.stringify(mainStore.result, null, "\t") }}
    </pre>
  </div>
</template>
<script lang="ts">
import { useMainStore } from '@/store/main';
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      mainStore: useMainStore()
    }
  }
})
</script>