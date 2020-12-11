
const AuthProvider = {
    isAuthenticated : localStorage.getItem('auth'),
    username : localStorage.getItem('user'),
    authenticate(username) {
        this.isAuthenticated = true;
        this.username=username;
    },
    logout(){
        this.isAuthenticated = false;
        localStorage.removeItem('auth');
        localStorage.removeItem('user');
    },
    getAuth() {
        return this.isAuthenticated;
    },
    getUser(){
        return this.username;
    }
}

export default AuthProvider