<template>
  <div>
    <div class="p-5">
      <div class="text-xl underline font-bold">
        Examples
      </div>
      <div>
        <div v-for="example in mainStore.examples" :key="example.url" class="flex flex-wrap my-2 w-full">
          <div class="flex flex-nowrap w-full m-0 p-0">
            <span class="bg-gray-50 m-1 text-black w-full h-8">
              <span class="bg-black p-1 text-white w-14 inline-block"> URL </span>{{ example.url }}
            </span>
          </div>
          <div class="flex flex-nowrap w-1/2 m-0 p-0">
            <span class="bg-gray-50 m-1 text-black w-full h-8">
              <span class="bg-black p-1 text-white w-14 inline-block"> Id </span>{{ example.id }}
            </span>
          </div>
          <div class="flex flex-nowrap w-1/4 m-0 p-0">
            <span class="bg-gray-50 m-1 text-black w-full h-8">
              <span class="bg-black p-1 text-white w-24 inline-block"> Method </span>{{ example.method }}
            </span>
          </div>
          <div class="flex flex-nowrap w-1/4 m-0 p-0">
            <button class="w-full bg-yellow-300 text-black m-1" @click="updateLiveExample(example)">Set This
              Example</button>
          </div>
          <div class="flex flex-nowrap w-1/2 m-0 p-0" v-if="example.role">
            <span class="bg-gray-50 m-1 text-black w-full h-8">
              <span class="bg-black p-1 text-white w-14 inline-block"> Role </span>{{ example.role }}
            </span>
          </div>
          <div class="flex flex-nowrap w-1/2 m-0 p-0" v-if="example.capabilities">
            <span class="bg-gray-50 m-1 text-black w-full h-8">
              <span class="bg-black p-1 text-white w-24 inline-block"> Capabilities </span>{{ example.capabilities }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Example, } from '@/constructors/Example';
import { useMainStore } from "@/store/main"
export default defineComponent({
  data() {
    return {
      mainStore: useMainStore(),
    }
  },
  methods: {
    updateUrl: function (example: Example) {
      if (example.url.includes(":id")) {
        const url = this.mainStore.example.url.replace(":id", example.id.toString())
        this.mainStore.example.url = url
      }
    },
    updateLiveExample: function (example: Example) {
      this.mainStore.example = example
      this.updateUrl(example)
    }
  }
})
</script>
