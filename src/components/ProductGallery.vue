<script setup>
import { ref } from "vue";
import img1 from "@/assets/images/image-product-1.jpg";
import img2 from "@/assets/images/image-product-2.jpg";
import img3 from "@/assets/images/image-product-3.jpg";
import img4 from "@/assets/images/image-product-4.jpg";
import thumb1 from "@/assets/images/image-product-1-thumbnail.jpg";
import thumb2 from "@/assets/images/image-product-2-thumbnail.jpg";
import thumb3 from "@/assets/images/image-product-3-thumbnail.jpg";
import thumb4 from "@/assets/images/image-product-4-thumbnail.jpg";

const images = [
  { id: 0, full: img1, thumb: thumb1 },
  { id: 1, full: img2, thumb: thumb2 },
  { id: 2, full: img3, thumb: thumb3 },
  { id: 3, full: img4, thumb: thumb4 },
];

const activeIndex = ref(0);
</script>

<template>
  <div class="flex flex-col gap-8 w-full max-w-[445px] mx-auto hidden md:flex">
    <div
      class="overflow-hidden rounded-2xl bg-light-grayish-blue aspect-square"
    >
      <img
        :src="images[activeIndex].full"
        alt="Product View"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="grid grid-cols-4 gap-7">
      <button
        v-for="(image, index) in images"
        :key="image.id"
        @click="activeIndex = index"
        class="relative overflow-hidden rounded-xl bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-primary cursor-pointer group aspect-square"
        aria-label="View product image"
      >
        <img
          :src="image.thumb"
          alt=""
          class="w-full h-full object-cover transition-opacity group-hover:opacity-50"
          :class="{ 'opacity-25': activeIndex === index }"
        />
        <div
          v-if="activeIndex === index"
          class="absolute inset-0 border-2 border-orange-primary rounded-xl pointer-events-none"
        ></div>
      </button>
    </div>
  </div>
</template>
