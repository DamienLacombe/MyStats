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