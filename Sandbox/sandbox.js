// * all of my id's
// ! mainDiv inputBox weatherBtn cityName kelvin fahrenheit celsius condition img
// 



let key = '3db863ffa8cb3cc541bf887258b911c9'
let zipCode = '40511'//keeping 40511 for test purposes
let weatherObj = []
let mainDiv = document.getElementById('mainDiv')
mainDiv.setAttribute('container')
function createDiv (parent, element ) {
    let div = document.createElement("div")
    
}

async function getData() {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${key}`);
    let data = response.data
    console.log(data);
    weatherObj.push(data)
    let name = data.name
    let p = document.createElement("p")
    mainDiv.appendChild(p)
    p.textContent = name
    



}
getData()
console.log(weatherObj)

// {
//     "coord":{
//         "lon":-0.1257,
//         "lat":51.5085
//      },
//      "weather":[
//         {
//            "id":803,
//            "main":"Clouds",
//            "description":"broken clouds",
//            "icon":"04d"
//         }
//      ],
//      "base":"stations",
//      "main":{
//         "temp":286.59,
//         "feels_like":285.58,
//         "temp_min":284.51,
//         "temp_max":287.72,
//         "pressure":999,
//         "humidity":61
//      },
//      "visibility":10000,
//      "wind":{
//         "speed":3.09,
//         "deg":270
//      },
//      "clouds":{
//         "all":77
//      },
//      "dt":1664386126,
//      "sys":{
//         "type":2,
//         "id":268730,
//         "country":"GB",
//         "sunrise":1664344553,
//         "sunset":1664387187
//      },
//      "timezone":3600,
//      "id":2643743,
//      "name":"London",
//      "cod":200
//   }

// let login = data.data
// console.log(login)
// TODO (285.79K − 273.15) × 9/5 + 32 = 54.752°F  USE THIS FOR CONVERSION
