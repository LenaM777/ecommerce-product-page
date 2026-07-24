<script setup>
import { ref } from "vue";
import minusIcon from "@/assets/icons/icon-minus.svg";
import plusIcon from "@/assets/icons/icon-plus.svg";
import cartIcon from "@/assets/icons/icon-cart.svg";

const quantity = ref(0);

const increment = () => {
  quantity.value++;
};

const decrement = () => {
  if (quantity.value > 0) {
    quantity.value--;
  }
};
</script>

<template>
  <section class="w-full max-w-[445px] mx-auto px-6 md:px-0">
    <span
      class="text-dark-grayish-blue text-xs uppercase font-bold tracking-widest block mb-3 md:mb-4"
    >
      Sneaker Company
    </span>
    <h1
      class="text-very-dark-blue text-3xl md:text-4xl font-bold leading-tight mb-4 md:mb-6"
    >
      Fall Limited Edition Sneakers
    </h1>
    <p class="text-dark-grayish-blue text-[15px] leading-relaxed mb-6 md:mb-7">
      These low-profile sneakers are your perfect casual wear companion.
      Featuring a durable rubber outer sole, they’ll withstand everything the
      weather can dish out.
    </p>
    <div
      class="flex items-center justify-between md:flex-col md:items-start gap-2 mb-6 md:mb-8"
    >
      <div class="flex items-center gap-4">
        <span class="text-very-dark-blue text-3xl font-bold">$125.00</span>
        <span
          class="bg-very-dark-blue text-white font-bold px-2.5 py-1 rounded-md text-base leading-none"
        >
          50%
        </span>
      </div>
      <span
        class="text-grayish-blue font-bold line-through text-base md:text-sm"
      >
        $250.00
      </span>
    </div>

    <div class="flex flex-col md:flex-row gap-4 items-center w-full">
      <div
        class="flex items-center justify-between bg-light-grayish-blue w-full md:w-1/3 h-14 rounded-xl px-4"
      >
        <button
          @click="decrement"
          class="p-2 cursor-pointer hover:opacity-60 transition-opacity focus:outline-none"
          aria-label="Decrease quantity"
        >
          <img :src="minusIcon" alt="" aria-hidden="true" />
        </button>
        <span
          class="text-very-dark-blue font-bold text-base"
          aria-live="polite"
        >
          {{ quantity }}
        </span>
        <button
          @click="increment"
          class="p-2 cursor-pointer hover:opacity-60 transition-opacity focus:outline-none"
          aria-label="Increase quantity"
        >
          <img :src="plusIcon" alt="" aria-hidden="true" />
        </button>
      </div>

      <button
        class="flex items-center justify-center gap-4 bg-orange-primary hover:bg-orange-primary/70 text-very-dark-blue font-bold w-full md:w-2/3 h-14 rounded-xl shadow-lg shadow-orange-primary/30 cursor-pointer transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-very-dark-blue"
      >
        <img
          :src="cartIcon"
          alt=""
          aria-hidden="true"
          class="h-4 w-4 brightness-0"
        />
        Add to cart
      </button>
    </div>
  </section>
</template>
