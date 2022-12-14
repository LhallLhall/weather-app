// * all of my id's
// ! mainDiv inputBox weatherBtn cityName kelvin fahrenheit celsius condition img
// STATE
let data = null;
let page = 0
let key = '3db863ffa8cb3cc541bf887258b911c9';
let zipCode = '';
let weatherObj;
let mainDiv = document.getElementById('mainDiv');
mainDiv.classList.add('container');
// END OF STATE

// INIT
addEventListener('load',createStaticElements); // 

// * CREATES THE BASIC ELEMENTS THAT WILL STATICALLY STAY ON THE PAGE
function createStaticElements(){
    let weatherRow = createAndAddElement(mainDiv, 'div', ['row', 'text-center'], '', '')
    
    let weatherNameDiv = createAndAddElement(weatherRow, 'div', ['col-12', 'p-3'], '', '')
    
    let weatherName = createAndAddElement(weatherNameDiv, 'h1', ['p-1'], '', 'Weather App')
    
    let weatherInputBox = createAndAddElement(weatherRow, 'div', ['col-sm-6'], '', '')
    
    let inputBox = createAndAddElement(weatherInputBox, 'input', ['p-1'], 'inputBox', '')
    inputBox.setAttribute('type', 'text')
    inputBox.setAttribute('placeholder', 'Zip-Code')
    inputBox.setAttribute('maxlength', '5')

    inputBox.addEventListener('keypress', (e) => {
        zipCode = e.target.value;
    })
    // listen for keypress
    
    let weatherBtnBox = createAndAddElement(weatherRow, 'div', ['col-sm-6'], '', '')
    
    let weatherBtn = createAndAddElement(weatherBtnBox, 'button', ['btn', 'btn-success'], 'weatherBtn', 'Get Weather')
    weatherBtn.setAttribute('type', 'button')
    // * GRABS THE BUTTON AND INPUT ID'S AFTER THEY HAVE BEEN CREATED
    weatherBtn.addEventListener('click', zipCodeButtonClick); //
}



// * CREATES THE CITY PORTION OF THE PAGE
function createCity () {
    
    let cityRow =createAndAddElement(mainDiv, 'div', ['row', 'p-4'], 'cityContainer', '')
    let cityNameBox = createAndAddElement(cityRow, 'div', ['col-12','text-center','border-top','border-end','border-start','border-success','rounded-top','p-4'], '','' )
    let cityName = createAndAddElement(cityNameBox, 'h2', ['p-1'], '', 'City')
    let cityNameDiv = createAndAddElement(cityRow, 'div', ['col-12', 'text-center', 'border', 'border-success', 'rounded-bottom', 'p-3'], '','')
    let city = createAndAddElement(cityNameDiv, 'h3', ['p-1'], 'cityName', '')

}





// * CREATES THE TEMPERATURE PORTION OF THE PAGE
function createTemperature () {

let tempRow = createAndAddElement(mainDiv, 'div', ['row', 'p-3'], 'tempContainer', '')


let tempDiv = createAndAddElement(tempRow, 'div', ['col-12', 'text-center', 'border', 'rounded-top', 'border-success', 'p-4'])
let tempName = createAndAddElement(tempDiv, 'h2', ['p-1'], '', 'Temperature')


let kelvinDiv = createAndAddElement(tempRow, 'div', ['col-4', 'text-center', 'border-bottom', 'rounded-bottom', 'border-start', 'border-end', 'border-success', 'p-3'])
let kelvin = createAndAddElement(kelvinDiv, 'h3', ['p-1'], 'kelvin', 'K')


let fahrenheitDiv = createAndAddElement(tempRow, 'div', ['col-4', 'text-center', 'border-bottom', 'rounded-bottom', 'border-success', 'p-3'], '', '')
let fahrenheit = createAndAddElement(fahrenheitDiv, 'h3', ['p-1'], 'fahrenheit', 'F')


let celsiusDiv = createAndAddElement(tempRow, 'div', ['col-4', 'text-center', 'border-bottom', 'rounded-bottom', 'border-start', 'border-end', 'border-success', 'p-3'], '', '')
let celsius = createAndAddElement(celsiusDiv, 'h3', ['p-1'], 'celsius', 'C')
}




// * CREATES THE CONDITION PORTION OF THE PAGE
function createCondition () {
    let conditionRow = createAndAddElement(mainDiv, 'div', ['row', 'p-4'], 'conditionContainer', '')
    let conditionNameDiv = createAndAddElement(conditionRow, 'div', ['col-12', 'text-center', 'border', 'border-success', 'rounded-top', 'p-4'], '', '')
    let conditionName = createAndAddElement(conditionNameDiv, 'h2', ['p-1'], '', 'Condition')
    let conditionDiv = createAndAddElement(conditionRow, 'div', ['col-12', 'text-center', 'border-bottom', 'border-start', 'border-end', 'border-success', 'rounded-bottom', 'p-3'])
    let condition = createAndAddElement(conditionDiv, 'h3', ['p-1'], 'condition', '')
}



// * CREATES THE IMG
function createOtherInfo () {
let otherInfoRow = createAndAddElement(mainDiv, 'div', ['row','p-4'], 'otherInfoContainer','')


let otherInfoNameDiv = createAndAddElement(otherInfoRow, 'div', ['col-12', 'text-center', 'border', 'border-success', 'rounded-top', 'p-4'], '', '')
let otherInfoName = createAndAddElement(otherInfoNameDiv, 'h2', ['p-1'], '','Other Info')


let otherInfoImgDiv = createAndAddElement(otherInfoRow, 'div', ['col-12', 'text-center', 'border-bottom', 'border-start', 'border-end', 'border-success', 'rounded-bottom', 'p-4'], '','')
let otherInfoImg = createAndAddElement(otherInfoImgDiv, 'img', ['p-1'], 'img','')

}

// * grabs the api and initiates a try catch
async function getWeatherData () {
   
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${key}`);
        return response.data;
    }catch (error) {
        alert('Zip-Code Does Not Work')
        console.log('hi')
    }
    return null;
}

// * GENERATES THE PAGE WHEN THE GET WEATHER BTN IS CLICKED ALSO CALLS THE API FUNCTION AND INPUTS THE ZIP CODE
// TODO this is erroring out. need to revise it.
async function zipCodeButtonClick() {
    // let hasGoodZipCode = false;
    
    zipCode = getZipCode()
    data = await getWeatherData()

    
    if(data !== null && zipCode !== '') {
        if(page === 0){
            createCity()
            createTemperature()
            createCondition()
            createOtherInfo()
            page = 1
        }

        generateWeatherData()
        inputBox.value = ''
    } else {
        removeWeatherInfo();
        zipCode = '';
        inputBox.value = ''
    }
    
}

// * return the value of inputBox
function getZipCode () {
    return inputBox.value.toString();
}

function createAndAddElement(parent, elementType, classes, elementID = '', contents = '', isHTML = false) {
    let el = document.createElement(elementType);
    if(elementID != ''){
        el.id = elementID;
    }
    for(var i = 0; i < classes.length; i++){
        el.classList.add(classes[i]);
    }
    if(contents != ''){
        el.textContent = contents;
        if(isHTML){
            el.innerHTML = contents;
        }
    }
    parent.appendChild(el);
    return el;
}

function removeWeatherInfo (){
    if(document.getElementById('cityContainer') !== null){
        document.getElementById('cityContainer').remove();
        document.getElementById('tempContainer').remove();
        document.getElementById('conditionContainer').remove();
        document.getElementById('otherInfoContainer').remove();
    }
}

function generateWeatherData (){
        weatherObj = data;
        let city = document.getElementById('cityName')
        let fahrenheit = document.getElementById('fahrenheit')
        let celsius = document.getElementById('celsius')
        let kelvin = document.getElementById('kelvin')
        let condition = document.getElementById('condition')
        let img = document.getElementById('img')
    
        let cityName = weatherObj.name
        let kelvinApi = weatherObj.main.temp
        let fahrenheitApi = weatherObj.main.temp
        let celsiusApi = weatherObj.main.temp
        let conditionApi = weatherObj.weather[0].description
        let imgSrc = weatherObj.weather[0].icon
        let imgApi =  `https://openweathermap.org/img/wn/${imgSrc}@2x.png`
        
        img.src = imgApi
        kelvinApi = Math.floor(kelvinApi)
        celsiusApi = Math.floor(kelvinApi -273)
        fahrenheitApi = Math.floor( celsiusApi * (9/5) + 32)
        
        city.textContent = cityName
        kelvin.textContent = kelvinApi
        fahrenheit.textContent = fahrenheitApi
        celsius.textContent = celsiusApi
        condition.textContent = conditionApi[0].toUpperCase() + conditionApi.substring(1);
        
        console.log(conditionApi)
        console.log(kelvinApi)
        console.log(celsiusApi)
        console.log(fahrenheitApi)
}



console.log(weatherObj)

