export default () => ({
    categories: [],
    async fetchCategories() {
        // Fetch categories logic here
    },
    init() {
        this.fetchCategories();
    }
});
