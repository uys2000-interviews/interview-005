<template>
  <div class="h-screen grid grid-cols-2 text-xl">
    <div class="flex mt-10 col-span-2 border">
      <div class="m-auto">
        While I am working I used this folder structure
        <div>-->quickqarbon</div>
        <div>---->backend</div>
        <div>---->frontend</div>
      </div>
    </div>
    <RouterLink class="m-auto" to="/frontend">Frontend</RouterLink>
    <RouterLink class="m-auto" to="/backend">Backend</RouterLink>
    <RouterLink class="m-auto" to="/backenddocs">Backend Documentation</RouterLink>
    <RouterLink class="m-auto" to="/backenddocstest">Documentation Test</RouterLink>
    <RouterLink class="m-auto col-span-2" to="/research">Research</RouterLink>
  </div>
</template>