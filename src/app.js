//app.js

const API_KEY = '716aea8abaf66f4c36427d3b563774fc';
let city_name = 'seoul';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`;
let selectEl = document.getElementById('select')

let liEl = document.querySelectorAll('li');

selectEl.addEventListener('change',cityselect)
function cityselect() {
    let cityName = document.getElementById('select').value
    getweatherData(cityName)
}

function getweatherData(cityName='seoul') {
    
    city_name = cityName;
    console.log(city_name)
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`;

    fetch(API_URL)
    .then(function(res) {
    return res.json();
    })
    .then(function(data) {
    console.log(data);
    weather(data);
    })
}
getweatherData() 

function weather(data) {
    const weather_main = data.weather[0].main; //날씨상태 설명
    const weather_icon =  `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="그림">`; // 아이콘
    const temp = `${parseInt(data.main.temp-273.15)}&deg;C`; // 현재온도
    const name = data.name; //도시명 
    let weather_array = [];
    weather_array.push(name,weather_icon,temp,weather_main);
        for (i=0; i<4; i++) {
        liEl[i].innerHTML = weather_array[i];
    }
}
