export const getToken = () => {

    fetch("http://localhost:4200/api/getToken")
    .then(resp => resp.json())
    .then(token => {
        localStorage.setItem("token", token.access_token)
    });
}

export const ApiAuth = () => {

   
}