let city = "";

function developContainer(data) {
    let newPc = document.createElement("p");
    let newPf = document.createElement("p");
    newPc.innerHTML = "C&deg;/" + data.temp_c;
    newPf.innerHTML = "F&deg;/" + data.temp_f;
    let con = document.getElementById('info-container');
    con.appendChild(newPc);
    con.appendChild(newPf);
}

async function fun() {
    let input = document.getElementById('input');
    input.value = 'loading...';
    let res = await fetch('https://ipapi.co/json/', {"method": "GET"});
    let json =await res.json();
    city = json.city;
    input.value = city;
    console.log(city);    
}

async function fetchData() {
    if(city === '') return;
    try{
        let res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7afae986719f43e0b91135851240406&q=${city}`,
            {
                "method": "GET"
            }
        );

        let json = await res.json();
        let data = json.current;
        developContainer(data);

        console.log(json.current.temp_c);
    } catch(e) {
        console.log(e);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', fetchData, false);
}, false)

fun();
fetchData();