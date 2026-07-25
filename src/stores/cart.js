import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cartQuantity = ref(0)
  const productPrice = 125.00
  const totalPrice = computed(() => cartQuantity.value * productPrice)
  const addToCart = (amount) => {
    if (amount > 0) {
      cartQuantity.value += amount
    }
  }

  const removeFromCart = () => {
    cartQuantity.value = 0
  }

  return {
    cartQuantity,
    productPrice,
    totalPrice,
    addToCart,
    removeFromCart
  }
})
