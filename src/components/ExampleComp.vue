<template>
  <div class="text-3xl font-bold underline text-black grid grid-cols-2">
    <div class="p-1 col-span-2 w-full">
      <input type="text" v-model="mainStore.example.url" placeholder="url" class=" w-full">
    </div>
    <div class="p-1 col-span-1">
      <input type="number" v-model="mainStore.example.id" placeholder="id" class=" w-full">
    </div>
    <div class="p-1 col-span-1">
      <select class="w-full" v-model="mainStore.example.method">
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
      </select>
    </div>
    <div class="p-1 col-span-1">
      <input type="text" v-model="mainStore.example.role" placeholder="role" class=" w-full">
    </div>
    <div class="p-1 row-span-3">
      <button class="py-1 px-5 bg-yellow-300 w-full h-full" @click="requestButton(mainStore.example)">
        request
      </button>
    </div>
    <div class="p-1 col-span-1">
      <input type="text" v-model="mainStore.example.capabilities" placeholder="capabilities" class=" w-full">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMainStore } from '@/store/main';
import { Example } from '@/constructors/Example';
import { apiRequest } from '@/services/api/api';
import { pL } from "@/services/web/loggerService"
export default defineComponent({
  data() {
    return {
      mainStore: useMainStore(),
    }
  },
  methods: {
    dataSeperater: function (example: Example) {
      const data: { role?: string; capabilities?: string[] } = {}
      if (example.role) data.role = example.role
      if (example.capabilities) data.capabilities = example.capabilities.replace(/ /g, "").split(",")
      return data
    },
    setResult: function (data: unknown) {
      this.mainStore.result = data
    },
    requestWthoutData: function (example: Example) {
      pL(apiRequest,
        [example.url,
        { method: example.method }])
        .then(res => this.setResult(res))
        .catch(err => this.setResult(err))
    },
    requestWthData: function (example: Example) {
      pL(apiRequest,
        [example.url,
        { method: example.method, data: this.dataSeperater(example) }])
        .then(res => this.setResult(res))
        .catch(err => this.setResult(err))
    },
    requestButton: function (example: Example) {
      if (example.method == "GET" || example.method == "DELETE") this.requestWthoutData(example)
      else this.requestWthData(example)
    }
  }
})
</script>