// * all of my id's
// ! mainDiv inputBox weatherBtn cityName kelvin fahrenheit celsius condition img
// 
let key = '3db863ffa8cb3cc541bf887258b911c9';
let zipCode = '40511';//keeping 40511 for test purposes
let weatherObj = [];
let mainDiv = document.getElementById('mainDiv');
mainDiv.classList.add('container')


function createStaticElements(){
    let weatherRow = document.createElement("div")
    weatherRow.classList.add("row", "text-center")
    mainDiv.appendChild(weatherRow)


    let weatherNameDiv = document.createElement('div')
    weatherNameDiv.classList.add('col-12', 'p-3')
    weatherRow.appendChild(weatherNameDiv)

    let weatherName = document.createElement('h1')
    weatherName.textContent = "Weather App"
    weatherNameDiv.appendChild(weatherName)


    let weatherInputBox = document.createElement('div')
    weatherInputBox.classList.add('col-sm-6')
    weatherRow.appendChild(weatherInputBox)

    let inputBox = document.createElement('input')
    inputBox.id = inputBox
    weatherInputBox.appendChild(inputBox)


    let weatherBtnBox = document.createElement('div')
    weatherBtnBox.classList.add('col-sm-6')
    weatherRow.appendChild(weatherBtnBox)

    let weatherBtn = document.createElement('button')
    weatherBtn.id = weatherBtn
    weatherBtn.classList.add('btn', 'btn-primary')
    weatherBtn.innerText = "Get Weather"
    weatherBtnBox.appendChild(weatherBtn)
    
}
createStaticElements()

function createDiv(parent, element, type) {
    let div = document.createElement(element);
    div.classList.add(type);
    parent.appendChild(element);
}
createDiv(mainDiv,'div', 'row');

async function getData() {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${key}`);
    let data = response.data;
    weatherObj.push(data);
    console.log(data);
    
    
    // let name = data.name
    // let p = document.createElement("p")
    // mainDiv.appendChild(p)
    // p.textContent = name
}
getData();
console.log(weatherObj)


// TODO (285.79K − 273.15) × 9/5 + 32 = 54.752°F  USE THIS FOR CONVERSION