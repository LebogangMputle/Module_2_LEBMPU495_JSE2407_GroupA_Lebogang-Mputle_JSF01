export default () => ({
    user: {
        name: '',
        isLoggedIn: false
    },
    login(name) {
        this.user.name = name;
        this.user.isLoggedIn = true;
    },
    logout() {
        this.user.name = '';
        this.user.isLoggedIn = false;
    }
});
