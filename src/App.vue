<script setup>
import TheHeader from "./components/TheHeader.vue";
import ProductGallery from "./components/ProductGallery.vue";
</script>

<template>
  <div class="min-h-screen bg-white font-sans antialiased text-very-dark-blue">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <TheHeader />

      <main
        class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 pt-8 md:pt-20 pb-16 items-center"
      >
        <ProductGallery />
      </main>
    </div>
  </div>
</template>
