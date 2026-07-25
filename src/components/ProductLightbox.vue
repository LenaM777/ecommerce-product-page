<script setup>
import { ref, onMounted } from "vue";
import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";
import ProductGallery from "./ProductGallery.vue";
import closeIcon from "@/assets/icons/icon-close.svg";

defineEmits(["close"]);

const lightboxRef = ref(null);

const { activate } = useFocusTrap(lightboxRef, {
  immediate: true,
  escapeDeactivates: true,
});

onMounted(() => {
  activate();
});
</script>

<template>
  <div
    class="fixed inset-0 bg-black/75 z-50 flex items-center justify-center flex-col gap-2"
    role="dialog"
    aria-modal="true"
    aria-label="Product Image Gallery Lightbox"
  >
    <div
      ref="lightboxRef"
      class="relative w-full max-w-[445px] flex flex-col gap-4 px-4 md:px-0"
    >
      <button
        @click="$emit('close')"
        class="self-end w-11 h-11 flex items-center justify-center text-white hover:color-orange-primary transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-primary rounded-sm"
        aria-label="Close gallery"
      >
        <img
          :src="closeIcon"
          alt=""
          aria-hidden="true"
          class="brightness-0 invert"
        />
      </button>

      <ProductGallery :show-arrows="true" @main-click.prevent />
    </div>
  </div>
</template>
