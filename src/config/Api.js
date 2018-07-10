

var url = "http://moapa.xyz/tokojajan/api";

export function login(emai,pass,deviceToken,callback = () => {}) {
    fetch(url+"/auth/login",{
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body : JSON.stringify({
            email : emai,
            password : pass,
            device_token : deviceToken
        })
    }).then((res) => {
        return res.json();
    }).then((json) => {
        callback(json);
    })
}