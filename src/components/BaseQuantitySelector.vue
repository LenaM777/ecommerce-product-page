<script setup>
import minusIcon from "@/assets/icons/icon-minus.svg";
import plusIcon from "@/assets/icons/icon-plus.svg";

const model = defineModel({ type: Number, default: 0 });

const increment = () => {
  model.value++;
};

const decrement = () => {
  if (model.value > 0) {
    model.value--;
  }
};
</script>

<template>
  <div
    class="flex items-center justify-between bg-light-grayish-blue w-full md:w-1/3 h-14 rounded-xl px-4"
  >
    <button
      @click="decrement"
      class="w-11 h-11 flex items-center justify-center cursor-pointer hover:opacity-60 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-primary rounded-md"
      aria-label="Decrease quantity"
    >
      <img :src="minusIcon" alt="" aria-hidden="true" />
    </button>

    <span class="text-very-dark-blue font-bold text-base" aria-live="polite">
      {{ model }}
    </span>

    <button
      @click="increment"
      class="w-11 h-11 flex items-center justify-center cursor-pointer hover:opacity-60 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-primary rounded-md"
      aria-label="Increase quantity"
    >
      <img :src="plusIcon" alt="" aria-hidden="true" />
    </button>
  </div>
</template>
