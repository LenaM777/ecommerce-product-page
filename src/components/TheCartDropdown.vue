<script setup>
import { useCartStore } from "@/stores/cart";
import deleteIcon from "@/assets/icons/icon-delete.svg";
import productThumb from "@/assets/images/image-product-1-thumbnail.jpg";

const cartStore = useCartStore();
</script>

<template>
  <div
    class="absolute top-20 md:top-28 right-0 w-[calc(100%-2rem)] mx-4 md:mx-0 md:w-[360px] bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-200 z-50"
    role="dialog"
    aria-label="Shopping cart contents"
  >
    <div class="border-b border-grayish-blue/20 p-6">
      <h3 class="text-very-dark-blue font-bold text-base">Cart</h3>
    </div>
    <div
      class="p-6 min-h-[180px] flex items-center justify-center"
      aria-live="polite"
    >
      <p
        v-if="cartStore.cartQuantity === 0"
        class="text-dark-grayish-blue font-bold text-base text-center"
      >
        Your cart is empty
      </p>
      <div v-else class="w-full flex flex-col gap-6">
        <div class="flex items-center justify-between gap-4">
          <img
            :src="productThumb"
            alt=""
            aria-hidden="true"
            class="w-12 h-12 rounded-md object-cover"
          />

          <div
            class="flex flex-col text-[15px] text-dark-grayish-blue flex-1"
            :aria-label="`Product: Fall Limited Edition Sneakers. Price: 125 dollars, quantity: ${cartStore.cartQuantity}, total price: ${cartStore.totalPrice} dollars`"
          >
            <span class="truncate" aria-hidden="true"
              >Fall Limited Edition Sneakers</span
            >
            <div aria-hidden="true">
              <span>$125.00 x {{ cartStore.cartQuantity }}</span>
              <span class="text-very-dark-blue font-bold ml-2"
                >${{ cartStore.totalPrice.toFixed(2) }}</span
              >
            </div>
          </div>

          <button
            @click="cartStore.removeFromCart"
            class="p-2 cursor-pointer hover:opacity-60 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-primary rounded-md"
            aria-label="Remove Fall Limited Edition Sneakers from cart"
          >
            <img :src="deleteIcon" alt="" aria-hidden="true" />
          </button>
        </div>

        <button
          class="w-full bg-orange-primary hover:bg-orange-primary/70 text-very-dark-blue font-bold h-14 rounded-xl cursor-pointer transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-very-dark-blue"
        >
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>
