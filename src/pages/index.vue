<template>
  <div>
    <h1>This is Sample page</h1>
    <p>{{ displayData }}</p>
    <p>{{ `id is : ${id}` }}</p>
    <p>{{ test }}</p>
    <TestCompo
      buttonName="ボタンProps渡せて草"
      @onClickButton="onClickButton"
    />
    <SlotTestCompo text="わろた" />
    <SlotTestCompo />
    <component :is="componentName" />
    <ScopedSlotTest>
      <template v-slot:name>
        <span>名前です</span>
        <!-- <SlotTestCompo text="わろた" /> -->
      </template>
      <template v-slot:description>
        <span>概要です</span>
      </template>
    </ScopedSlotTest>
  </div>
</template>

<script setup lang="ts">
import { useId } from "~/store/test2";
import Sample1 from "../components/Sample1.vue";
import Sample2 from "../components/Sample2.vue";

const { $axios } = useNuxtApp();

const { id } = useId();

const test = ref<string>();

const displayData = ref<any>(undefined);

const onClickButton = (value: string) => {
  window.alert(value);
};

const componentName = computed(() => {
  if (Math.random() <= 0.5) {
    return Sample1;
  }

  return Sample2;
});

useAsyncData(async () => {
  try {
    const data = await $axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
    displayData.value = JSON.stringify(data.data.id);
  } catch (error) {
    console.error("error!");
  }
});
</script>
