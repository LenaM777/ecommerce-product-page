<script setup>
import { ref, nextTick, watch } from "vue";
import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";
import logo from "@/assets/icons/logo.svg";
import cartIcon from "@/assets/icons/icon-cart.svg";
import menuIcon from "@/assets/icons/icon-menu.svg";
import closeIcon from "@/assets/icons/icon-close.svg";
import avatar from "@/assets/images/image-avatar.png";

const menuItems = ["Collections", "Men", "Women", "About", "Contact"];
const isMenuOpen = ref(false);

const mobileMenuRef = ref(null);

const { activate, deactivate } = useFocusTrap(mobileMenuRef);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

watch(isMenuOpen, async (isOpen) => {
  if (isOpen) {
    await nextTick();
    activate();
  } else {
    deactivate();
  }
});
</script>

<template>
  <header
    class="flex items-center justify-between border-b border-grayish-blue/30 py-6 md:py-10 relative"
  >
    <div class="flex items-baseline gap-4 md:gap-16">
      <button
        v-if="!isMenuOpen"
        @click="toggleMenu"
        class="block md:hidden z-50 focus-visible:ring-2 focus-visible:ring-orange-primary rounded-sm p-1 focus:outline-none"
        aria-label="Open menu"
      >
        <img :src="menuIcon" alt="" aria-hidden="true" />
      </button>

      <a
        href="/"
        class="cursor-pointer focus-visible:ring-2 focus-visible:ring-orange-primary rounded-sm block"
        aria-label="Sneakers - Home"
      >
        <img :src="logo" alt="" aria-hidden="true" class="h-5" />
      </a>

      <nav class="hidden md:block" aria-label="Main navigation">
        <ul class="flex gap-8 text-dark-grayish-blue">
          <li v-for="item in menuItems" :key="item">
            <a
              href="#"
              class="hover:text-very-dark-blue py-11 border-b-4 border-transparent hover:border-orange-primary transition-all block focus-visible:outline-none focus-visible:border-orange-primary"
            >
              {{ item }}
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div
      id="mobile-menu"
      v-if="isMenuOpen"
      class="fixed inset-0 z-40 md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      <div
        @click="toggleMenu"
        class="absolute inset-0 bg-black/50"
        aria-hidden="true"
      ></div>

      <nav
        ref="mobileMenuRef"
        class="absolute top-0 left-0 h-full w-2/3 bg-white p-6 shadow-2xl"
      >
        <button
          @click="toggleMenu"
          class="block focus-visible:ring-2 focus-visible:ring-orange-primary rounded-sm p-1 focus:outline-none mb-12"
          aria-label="Close menu"
        >
          <img :src="closeIcon" alt="" aria-hidden="true" />
        </button>

        <ul class="flex flex-col gap-5 font-bold text-very-dark-blue mt-16">
          <li v-for="item in menuItems" :key="item">
            <a
              href="#"
              @click="toggleMenu"
              class="block py-2 hover:text-orange-primary transition-colors focus-visible:ring-2 focus-visible:ring-orange-primary rounded-sm"
            >
              {{ item }}
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="flex items-center gap-5 md:gap-11">
      <button
        class="relative cursor-pointer group focus-visible:ring-2 focus-visible:ring-orange-primary rounded-sm p-1"
        aria-label="Shopping cart, 0 items"
      >
        <img
          :src="cartIcon"
          alt=""
          aria-hidden="true"
          class="h-5 w-5 transition-colors group-hover:brightness-50"
        />
      </button>

      <button
        class="rounded-full border-2 border-transparent hover:border-orange-primary transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-orange-primary"
        aria-label="User profile account"
      >
        <img
          :src="avatar"
          alt=""
          aria-hidden="true"
          class="h-6 w-6 md:h-12 md:w-12"
        />
      </button>
    </div>
  </header>
</template>
