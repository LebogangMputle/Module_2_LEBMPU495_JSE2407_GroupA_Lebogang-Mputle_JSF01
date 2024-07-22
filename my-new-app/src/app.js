const productApp = {
    categories: [],
    products: [],
    selectedCategory: 'all',
    searchQuery: '',
    sortOrder: 'default',
    loading: true,
    selectedProduct: null,

    async getCategories() {
        try {
            const response = await fetch('https://fakestoreapi.com/products/categories');
            this.categories = await response.json();
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    },

    async getProducts() {
        this.loading = true;
        try {
            let url = 'https://fakestoreapi.com/products';
            if (this.selectedCategory !== 'all') {
                url += `/category/${this.selectedCategory}`;
            }
            const response = await fetch(url);
            this.products = await response.json();
            this.filterProducts();
            this.sortProducts();
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            this.loading = false;
        }
    },

    filterProducts() {
        this.products = this.products.filter(product =>
            product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
    },

    sortProducts() {
        if (this.sortOrder === 'price-asc') {
            this.products.sort((a, b) => a.price - b.price);
        } else if (this.sortOrder === 'price-desc') {
            this.products.sort((a, b) => b.price - a.price);
        }
    },

    handleProductClick(product) {
        this.selectedProduct = product;
    },

    addToCart(product) {
        console.log('Added to cart:', product);
    },

    init() {
        this.getCategories();
        this.getProducts();
    }
};

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    productApp.init();
});
