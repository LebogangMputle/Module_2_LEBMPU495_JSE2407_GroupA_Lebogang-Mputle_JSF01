export default () => ({
    messages: [],
    addMessage(message) {
        this.messages.push(message);
        setTimeout(() => {
            this.removeMessage(message);
        }, 3000);
    },
    removeMessage(message) {
        this.messages = this.messages.filter(m => m !== message);
    }
});
