
async function fun() {
    let res = await fetch('https://ipapi.co/json/', {"method": "GET"})
    let json =await res.json()
    let city = json.city;
    console.log(city);    
}