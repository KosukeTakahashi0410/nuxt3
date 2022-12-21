<template>
  <div>
    <input type="text" :value="props.text" @input="onInput" />
  </div>
</template>

<script setup lang="ts">
type Props = {
  text: string;
};

type Emits = {
  (e: "update:text", text: string): void;
};

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const onInput = (event: Event) => {
  // refs: https://yuutookun.hatenablog.com/entry/2018/07/21/084912
  if (!(event.target instanceof HTMLInputElement)) {
    return;
  }

  emits("update:text", event.target.value);
};
</script>
