<template>
  <NuxtLayout>
    <div
      class="col-span-12 my-6 flex flex-col justify-center items-center font-ptserrif"
    >
      <h1 class="font-ptserrif text-9xl font-bold">
        {{ error.statusCode }}
      </h1>
      <p class="mt-6 text-xl">{{ error.message }}</p>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
defineProps<{ error: any }>();
definePageMeta({
  layout: "default",
});
</script>
