<template>
  <div class="w-screen h-screen flex flex-wrap">
    <div class="w-full m-auto mb-5 text-center">function writes results to console</div>
    <button class="m-auto mt-5 border p-5" @click="runFunction">Run function Corect</button>
    <button class="m-auto mt-5 border p-5" @click="runFunctionW">Run function Wrong</button>
  </div>
</template>
<script lang="ts">
import { apiRequestF } from '@/services/api/api';
import { waitForPromise } from '@/services/web/promiseAwaitService';
import { defineComponent } from 'vue';
export default defineComponent({
  methods: {
    runFunction: function () {
      const request = apiRequestF("users", {})
      waitForPromise(request).then(a => console.log("res", a))
    },
    runFunctionW: function () {
      const request = apiRequestF("users/nu", {})
      waitForPromise(request).then(a => console.log("res", a))
    }
  }
})
</script>