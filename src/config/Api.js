

var url = "http://tokojajan.com/tokojajan/api";

export function login(emai,pass,deviceToken,callback = () => {}) {
    fetch(url+"/auth/login",{
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body : JSON.stringify({
            email : emai,
            password : pass,
            token_device : deviceToken
        })
    }).then((res) => {
        return res.json();
    }).then((json) => {
        callback(json);
    })
}

export function orderList(token,id,callback = () => {}){
    fetch(url +"/Merchant/getListOrderMerchant?start=5&traveler_id="+id,{
        method : "GET",
        headers: {
            "authorization": "Bearer "+token,
        }
    }).then((res) => {
        return res.json()
    }).then((json) => {
        callback(json)
    })
}