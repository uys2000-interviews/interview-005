<template>
  <div class="w-screen h-screen flex flex-wrap">
    <div class="w-full m-auto mb-5">
      <p class="px-5">
        This buttons runs `waitForPromise` (from `frontend/src/services/web/promiseAwaitService.ts`)<br />
        and `apiRequestF` (from `frontend/src/services/api/api.ts`) <br />
        `waitForPromise`function gets `promise` which comes from fetch by `apiRequestF`
        then gives result like
      </p>
      <details class="px-5">
        <summary>
          Result
        </summary>
        <code>
          <pre>
  {
    status: status code, 
    statusText: status text,
    body: response
  }
            </pre>
          </code>
      </details>
      <p class="px-5">
        codes can be tested with buttons which are below
      </p>
    </div>
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