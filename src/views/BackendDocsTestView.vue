<template>
  <example-comp />
  <examples-comp />
  <response-comp />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ExampleComp from '@/components/ExampleComp.vue';
import ResponseComp from '@/components/ResponseComp.vue';
import ExamplesComp from '@/components/ExamplesComp.vue';
export default defineComponent({
  name: 'HomeView',
  components: {
    ExampleComp,
    ResponseComp,
    ExamplesComp
  },
});
</script>
