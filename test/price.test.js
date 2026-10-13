'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { applyDiscount } = require('../src/price');

test('applies a 10% coupon', () => {
  assert.strictEqual(applyDiscount({ items: [{ price: 10, qty: 2 }] }, { percent: 10 }), 18);
});
