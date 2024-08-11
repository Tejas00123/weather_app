const input = document.getElementById("city-name");
const button = document.getElementById("search-button");
const cityName = document.getElementById("name");
const cityTime = document.getElementById("time");
const cityTemp = document.getElementById("temp");
const cityCond = document.getElementById("cond");
const airQuality = document.getElementById("air-quality");
async function getData(cityName){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=b7fc1246b04c42db8a7130600241108&q=${cityName}&aqi=yes`);
    return await promise.json();
  }


  button.addEventListener("click",async ()=>{
     const value = input.value;
     const result = await getData(value);
     cityName.innerText = `${result.location.name} , ${result.location.region} , ${result.location.country}`
     cityTemp.innerText = `${result.current.temp_c}`;
     cityTime.innerText = `${result.location.localtime}`;
     cityCond.innerText = `${result.current.condition.text}`;
     airQuality.innerText = `Co : ${result.current.air_quality.co}
                                 | No2 : ${result.current.air_quality.no2}
                                 | O3 : ${result.current.air_quality.o3}
                                 | So2 : ${result.current.air_quality.so2}`
 })
