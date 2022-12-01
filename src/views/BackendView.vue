<template>
  <div class="h-screen w-screen flex">
    <div class="m-auto text-xl">
      <p>Backend Code runs at server console</p><br />
      <p>In test folder, createTableTestService.ts creates user table and users in it with checking backend/database/service.ts functions.</p><br />
      <p>Our User Class and object are in backend/database/serviceClasses.ts file</p>
      <p>Our userHasCapability function is in backend/services/controlUserService.ts file</p><br />
      <p>In test folder, runControlUserTestService.ts file checks userHasCapability function and writes result to terminal</p><br />
      <p>To see more detailed you can use .env file more detail is written on README.md file of backend repository</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({

})
</script>