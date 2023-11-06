const API_KEY =`9f7e2456a4b1c2b24a3647e961fa4207`
const form= document.querySelector("form")
const search =document.querySelector("#search")
const weather=document.querySelector("#weather")

const gettweather=async(city)=>{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response =await fetch(url);
    console.log(response)
    const data = await response.json()
    return showWeather(data)
}

const showWeather =(data)=>{
    weather.innerHTML=` 
    <div >
          <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div >
          <h2>${data.main.temp} °C</h2> 
          <h4>${data.weather[0].main}</h4>
    </div>`
}
form.addEventListener("submit",function(event){
    gettweather(search.value)
    event.preventDefault(); // stop reoad
})