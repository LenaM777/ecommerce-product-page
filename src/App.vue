<script setup>
import { ref } from "vue";
import TheHeader from "./components/TheHeader.vue";
import ProductGallery from "./components/ProductGallery.vue";
import ProductDetails from "./components/ProductDetails.vue";
import ProductLightbox from "./components/ProductLightbox.vue";

const isLightboxOpen = ref(false);
</script>

<template>
  <div class="min-h-screen bg-white font-sans antialiased text-very-dark-blue">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <TheHeader class="px-6 md:px-0" />

      <main
        class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 pt-8 md:pt-20 pb-16 md:items-center"
      >
        <ProductGallery
          class="md:px-0"
          :show-arrows="false"
          @main-click="isLightboxOpen = true"
        />
        <ProductDetails />
      </main>
    </div>

    <ProductLightbox
      v-if="isLightboxOpen"
      @close="isLightboxOpen = false"
      class="hidden md:flex"
    />
  </div>
</template>
