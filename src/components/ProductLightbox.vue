<script setup>
import { ref, onMounted } from "vue";
import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";
import ProductGallery from "./ProductGallery.vue";
import closeIcon from "@/assets/icons/icon-close.svg";

defineEmits(["close"]);

const lightboxRef = ref(null);
const { activate } = useFocusTrap(lightboxRef);

onMounted(() => {
  activate();
});
</script>

<template>
  <div
    class="fixed inset-0 bg-black/75 z-50 flex items-center justify-center flex-col gap-6"
    role="dialog"
    aria-modal="true"
    aria-label="Product Image Gallery Lightbox"
  >
    <div ref="lightboxRef" class="relative w-full max-w-[445px] flex flex-col">
      <button
        @click="$emit('close')"
        class="absolute -top-12 right-0 w-11 h-11 flex items-center justify-center text-white hover:text-orange-primary transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-primary rounded-sm"
        aria-label="Close gallery"
      >
        <img :src="closeIcon" alt="" aria-hidden="true" />
      </button>

      <ProductGallery :show-arrows="true" />
    </div>
  </div>
</template>
