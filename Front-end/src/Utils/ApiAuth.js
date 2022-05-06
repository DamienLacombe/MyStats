export const getToken = () => {

    return fetch("http://localhost:4200/api/getToken")
        .then(resp => resp.json())
        .then(token => {
            return token
        });
}

export const getProfil = (e, token, pseudo) => {

    console.log(token);
    e.preventDefault()

    const body = {
        token: token,
        pseudo: pseudo
    }

    return fetch("http://localhost:4200/api/getToken", {

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "post",
        body: JSON.stringify(body)
    })
    .then(resp => resp.json())
    .then(profil => {
        
        return profil
    });
}