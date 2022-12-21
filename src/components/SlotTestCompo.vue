<template>
  <component :is="!!props.text ? 'p' : 'span'">{{
    props.text ?? "fall back text and this is span"
  }}</component>
</template>

<script setup lang="ts">
type Props = {
  text?: string;
};

const props = defineProps<Props>();
</script>
