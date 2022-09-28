let key = '3db863ffa8cb3cc541bf887258b911c9'
let zipCode = '40511' //keeping 40511 for test purposes
let mainDiv = document.getElementById('mainDiv')
let weatherObj = []
async function getData() {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${key}`);
    let data = response.data
    console.log(data);
}
getData()

let login = data.data
console.log(login)