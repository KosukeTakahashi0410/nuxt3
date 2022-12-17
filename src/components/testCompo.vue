<template>
  <div>
    <h1>This is Sample page</h1>
    <p>{{ displayData }}</p>
    <p>{{ `id is : ${id}` }}</p>
    <p>{{ test }}</p>
  </div>
</template>

<script setup lang="ts">
import { useId } from "~/store/test2";
const { $axios } = useNuxtApp();

const { id } = useId();

const test = ref<string>();

const displayData = ref<any>(undefined);

const emits = defineEmits<{ (e: "onClick", value: any): void }>();

useAsyncData(async () => {
  try {
    const data = await $axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
    displayData.value = JSON.stringify(data.data.id);
  } catch (error) {
    console.error("error!");
  }
});
</script>
