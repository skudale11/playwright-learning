import { test, expect } from '@playwright/test';

test('products API returns 200', async ({ request }) => {
  const response = await request.get('https://api.practicesoftwaretesting.com/products');
  expect(response.status()).toBe(200);
});

test('products API returns a list of products', async ({ request }) => {
  const response = await request.get('https://api.practicesoftwaretesting.com/products');
  const body = await response.json();
  expect(body.data).toBeDefined();
  expect(body.data.length).toBeGreaterThan(0);
});

test('each product has a name and price', async ({ request }) => {
  const response = await request.get('https://api.practicesoftwaretesting.com/products');
  const body = await response.json();
  const firstProduct = body.data[0];
  expect(firstProduct.name).toBeDefined();
  expect(firstProduct.price).toBeDefined();
});