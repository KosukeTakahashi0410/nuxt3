<template>
  <div>
    <input type="hidden" id="warota" :value="hiddenName.name" />
    <input type="hidden" id="kusowarota" :value="hiddenName.en_name" />
    <p>{{ `name: ${hiddenName.name}` }}</p>
    <p>{{ `en_name: ${hiddenName.en_name}` }}</p>
    <label for="sample">ここに値を入れるんご</label>
    <br />
    <select name="sample" @change="onChange">
      <option
        v-for="(option, index) in INPUT_OPTIONS"
        key="index"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <br />
    <button @click="onClick">押してみ</button>
    <p>{{ hiddenName }}</p>
  </div>
</template>

<script setup lang="ts">
const OPTIONS = [
  { value: 1, name: "わろた", en_name: "warota" },
  { value: 2, name: "草", en_name: "kusa" },
  { value: 3, name: "真顔", en_name: "magao" },
];

const INPUT_OPTIONS = OPTIONS.map(({ value, name }) => {
  return { value, label: name };
});

const state = reactive<{ value: number }>({
  value: INPUT_OPTIONS[0].value,
});

const onChange = (event: any) => {
  state.value = parseInt(event.target.value);
};

const hiddenName = computed(() => {
  const selectedOption = OPTIONS.find(({ value }) => {
    return value === state.value;
  });

  return selectedOption ?? OPTIONS[0];
});

const onClick = () => {
  const warota: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("warota")
  );
  const kusowarota: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("kusowarota")
  );

  const text = `hidden1: ${warota?.value ?? "取れなくて草"} hidden2: ${
    kusowarota?.value ?? "取れなくて草"
  }`;

  window.alert(text);
};
</script>
