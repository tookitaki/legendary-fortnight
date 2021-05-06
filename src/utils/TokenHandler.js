// class TokenHandler {
//     constructor() {
//         this.token = {};
//     }

//     setToken(key, val) {
//         this.token[key] = val;
//     }

//     getToken(key) {
//         this.token[key];
//     }

//     clearToken() {
//         this.token = {};
//     }
// }
// const tokenHandler = new TokenHandler();
// export default tokenHandler;
export const isAuthenticated = () => {
    console.log(localStorage.getItem('token') ? true : false);
    return localStorage.getItem('token') ? true : false
};