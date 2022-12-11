// Refはvue本体からとってこれそう
import type { Ref } from "vue";

export const useId = () => {
  const { $axios } = useNuxtApp();

  const id: Ref<string | undefined> = useState("id", () => undefined);

  useAsyncData(async () => {
    try {
      const data = await $axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
      id.value = JSON.stringify(data.data.id);
    } catch (error) {
      console.error("error!");
    }
  });

  // stateの更新処理
  const updateCounter = (counter: Ref<number>) => (value: number) => {
    counter.value = value;
  };

  return {
    id: readonly(id), // stateはreadonlyとし、update関数を通してのみ更新できる
  };
};
