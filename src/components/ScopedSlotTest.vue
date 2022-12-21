<template>
  <div>
    <div>
      <p>This is name slot:</p>
      <slot name="name" />
    </div>
    <div>
      <p>This is description slot:</p>
      <slot name="description" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
