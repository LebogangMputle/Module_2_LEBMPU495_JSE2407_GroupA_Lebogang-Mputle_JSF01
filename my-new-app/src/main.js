// // import './style.css'
// import Alpine from 'alpinejs'
// import Focus from '@alpinejs/focus'
// import persist from '@alpinejs/persist'
// import products from './data/getProducts'
// import categories from '.data/categories'
// import user from '.data/userData'
// import cart from './components/cart'
// import toasts from './components/toasts'

// import { getProducts, setupProductList } from './data/getProducts'
// import { setupCounter } from './setupCounter.js'

// window.Alpine = Alpine
// Alpine.plugin(focus)
// Alpine.plugin(persist)

// document.addEventListener ('alpine:init' , () => {
//    Alpine.data('products', products)
//    Alpine.data('categories', categories)
//    Alpine.data('user', user)
//    Alpine.data('cart', cart)
//    Alpine.data('toasts', toasts)
//    Alpine.serve('user', user)
// });

// Alpine.start();

// // main.js or index.js (entry point of your Vite project)



// document.addEventListener('DOMContentLoaded', async () => {
//   const products = await getProducts()
//   const productListElement = document.getElementById('product-list')
  
//   if (productListElement) {
//     setupProductList(products, productListElement)
//   }

//   const counterElement = document.getElementById('counter')
//   if (counterElement) {
//     setupCounter(counterElement)
//   }
// })
