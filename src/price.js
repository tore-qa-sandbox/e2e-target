'use strict';

/**
 * Applies a percentage discount to a cart total.
 * @param {{ items: { price: number, qty: number }[] }} cart
 * @param {{ percent: number } | null} coupon
 */
function applyDiscount(cart, coupon) {
  const subtotal = cart.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = coupon ? subtotal * (coupon.percent / 100) : 0;
  return Math.round((subtotal - discount) * 100) / 100;
}

module.exports = { applyDiscount };
