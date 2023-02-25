import api from "./api";

const setAuthToken = (token)=>{
console.log(token); 
if (token){
    api.defaults.headers.common["x-auth-token"];
    localStorage.setItem("token", token);
    } else {
    delete api.defaults.headers.common["x-auth-token"];

    localStorage.removeItem("token");
    }
};

export default setAuthToken;