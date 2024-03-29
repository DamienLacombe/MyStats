const fetch = require("node-fetch")

exports.getToken = (req,res,next) => {
    
    const url = new URL(
        "https://osu.ppy.sh/oauth/token"
    );


    
    let headers = {
      
        "Content-Type": "application/json"
    };
    
    let body = {
        "client_id": 14224,
        "client_secret": "DK9Eh1GO5H8EtU4zWY7rEitr9kKhyLWfOnz9lJp6",
        "grant_type": "client_credentials",
        "scope": "public"
    }
    
    fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
    })
    .then(response => response.json())
    .then(token => {
        res.status(200).json(token)
    })
    
}

exports.getProfil = (req,res,next) => {
    const {token, pseudo} = req.body;
   
    const url = new URL(
        `https://osu.ppy.sh/api/v2/users/${pseudo}`
    );
      
    let headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`,
    };
    
    fetch(url, {
        method: "GET",
        headers,
    })
    .then(response => response.json())
    .then(profil => {
        
        res.status(200).json(profil)
    })   
}

exports.getBestScores = (req,res,next) => {
    const {token, userId} = req.body;
    console.log(token, userId);
    const url = new URL(
        `https://osu.ppy.sh/api/v2/users/${userId}/scores/best/`
    );
    
   
    let headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    let params = {
        "mode": "osu",
        "limit": "100",
    };
    
    Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));
    
    fetch(url, {
        method: "GET",
        headers,
    })
    .then(response => response.json())
    .then(profil => {
        console.log(profil);
        res.status(200).json(profil)
    })   
}