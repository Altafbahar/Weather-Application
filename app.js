let result = document.querySelector(".result");
let searchBtn = document.querySelector(".btn");
let cityRef = document.querySelector("#city");

let getWeather = () =>{
    
let cityValue = cityRef.value;
if (cityValue.length == 0) {
    result.innerHTML = `<h3>please enter a city name</h3>`;
    
}
else{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
      fetch(url)
      .then((resp) => resp.json())
      .then((data) =>{
        console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.name);
        console.log(data.main);
        console.log(data.main.temp_min);
        console.log(data.main.temp_max);
        result.innerHTML =  `<h2>${data.name}</h2>
        <img src= "https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp}&#176</h1>
        <div>
        <h4 class = "title">min</h4>
        <h4 class = "temp">${data.main.temp_min}</h4>
    
         <h4 class = "title">max</h4>
        <h4 class = "temp">${data.main.temp_max}</h4>
        </div>
        `;
      }).catch(() =>{
        result.innerHTML = `<h3>city not found</h3>`
      })
     
}

};
searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);