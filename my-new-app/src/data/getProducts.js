// // src/data/getProducts.js

// export const getProducts = async () => {
//     try {
//       const response = await fetch('https://fakestoreapi.com/products');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Failed to fetch products:', error);
//       return [];
//     }
//   };
  
//   export const setupProductList = (products, element) => {
//     element.innerHTML = products.map(product => `
//       <div class="product bg-white p-4 border rounded shadow">
//         <img src="${product.image}" alt="${product.title}" class="w-full h-48 object-cover mb-4" />
//         <h2 class="text-lg font-semibold">${product.title}</h2>
//         <p class="text-gray-500">${product.description}</p>
//         <div class="flex items-center justify-between mt-4">
//           <span class="text-lg font-bold">$${product.price}</span>
//           <button class="bg-cyan-700 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded">Add To Cart</button>
//         </div>
//       </div>
//     `).join('');
//   };
  