<template>
  <div>
    <button @click="clickHandler">{{ props.buttonName }}</button>
  </div>
</template>

<script setup lang="ts">
type Props = {
  buttonName?: string;
};

type Emits = {
  (e: "onClickButton", value: string): void;
};

const props = withDefaults(defineProps<Props>(), {
  buttonName: "ボタン名なくて草",
});

const emits = defineEmits<Emits>();

const clickHandler = (e: any) => {
  console.log("fired");
  // e.preventDefault();

  emits("onClickButton", "実行されて草");
};
</script>
