// // src/app.js
// import Alpine from 'alpinejs';
// import focus from '@alpinejs/focus';
// import persist from '@alpinejs/persist';
// import { getProducts, setupProductList } from './data/getProducts';
// import categories from './data/categories';
// import user from './data/userData';
// import cart from './components/cart';
// import toasts from './components/toasts';

// import { setupCounter } from './setupCounter';

// window.Alpine = Alpine;
// Alpine.plugin(focus);
// Alpine.plugin(persist);

// document.addEventListener('alpine:init', () => {
//    Alpine.data('categories', categories);
//    Alpine.data('user', user);
//    Alpine.data('cart', cart);
//    Alpine.data('toasts', toasts);
// });

// Alpine.start();

// document.addEventListener('DOMContentLoaded', async () => {
//   const productsData = await getProducts();
//   const productListElement = document.getElementById('product-list');
  
//   if (productListElement) {
//     setupProductList(productsData, productListElement);
//   }

//   const counterElement = document.getElementById('counter');
//   if (counterElement) {
//     setupCounter(counterElement);
//   }
// });
