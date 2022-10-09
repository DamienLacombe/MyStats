export const getToken = () => {

    return fetch("http://localhost:4200/api/getApi")
        .then(resp => resp.json())
        .then(token => {
            return token
        });
}

export const getProfil = (e, token, pseudo) => {

    e.preventDefault()

    const body = {
        token: token,
        pseudo: pseudo
    }

    return fetch("http://localhost:4200/api/getApi", {

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "post",
        body: JSON.stringify(body)
    })
    .then(resp => resp.json())
    .then(profil => {
        
        return profil;
    });
}

export const getBestScores = (token, userId) => {

    const body = {
        token: token,
        userId: userId
    }

    return fetch("http://localhost:4200/api/getApi/scores", {

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "post",
        body: JSON.stringify(body)
    })
    .then(resp => resp.json())
    .then(scores => {
        
        return scores;
    });
}