<template>
  <div>
    <h1>This is Sample page</h1>
    <p>{{ displayData }}</p>
    <p>{{ `id is : ${id}` }}</p>
  </div>
</template>

<script setup lang="ts">
// 自前ストアはimportが必要かも？
import { useId } from "~/store/test2";
const { $axios } = useNuxtApp();

const { id } = useId();

const displayData = ref<any>(undefined);

useAsyncData(async () => {
  // console.log("called");

  try {
    const data = await $axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
    displayData.value = JSON.stringify(data.data.id);
    // console.log(data);
  } catch (error) {
    console.error("error!");
  }
});
</script>
