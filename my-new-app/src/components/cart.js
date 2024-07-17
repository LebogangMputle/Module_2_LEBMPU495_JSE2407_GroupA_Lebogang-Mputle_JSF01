export default () => ({
    items: [],
    addItem(item) {
        this.items.push(item);
    },
    removeItem(item) {
        this.items = this.items.filter(i => i.id !== item.id);
    }
});
