<template>
  <div>
    <!-- hiddenなinputにcomputedの値を当てる -->
    <!-- xxx.propertyで取れる -->
    <input type="hidden" id="warota" :value="hiddenName.name" />
    <input type="hidden" id="kusowarota" :value="hiddenName.en_name" />
    <label for="sample">ここに値を入れるんご</label>
    <br />
    <select name="sample" @change="onChange">
      <option
        v-for="option in INPUT_OPTIONS"
        key="option.value"
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
// 日本語と英語でマップされた値
const OPTIONS = [
  { value: 1, name: "わろた", en_name: "warota" },
  { value: 2, name: "草", en_name: "kusa" },
  { value: 3, name: "真顔", en_name: "magao" },
];

// 選択肢を作る（value, labelでマップ）
const INPUT_OPTIONS = OPTIONS.map(({ value, name }) => {
  return { value, label: name };
});

// 選択した値（state）
const state = reactive<{ value: number }>({
  value: INPUT_OPTIONS[0].value,
});

// 変更のハンドラ
const onChange = (event: any) => {
  state.value = parseInt(event.target.value);
};

// computedでhiddenに突っ込む値をとる
const hiddenName = computed(() => {
  // 選択した値を持ってOPTIONSから当てはまるものを取得
  const selectedOption = OPTIONS.find(({ value }) => {
    return value === state.value;
  });

  // 選択した値を返す
  return selectedOption ?? OPTIONS[0];
});

// クリック時の処理、今は無視する
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
