# Variables
- key = access key for the api
- mainDiv = get id from the one div that you will append everything too
- zipCode = "" empty string where you will push the zipCode too
- page = 0 
# functions
- createAndAddElement()
  - create a function with parameters that when the function is called it uses those parameters to create that element
- createStaticElements()
  - create the button, inputBox, and H1 using createAndAddElement()
    - have an event listener on the inputBox so that it constantly updates the zipCode
- createCity()
  - create the div, h2, h3 and adds classes to them
- createTemperature()
  - create the div's, h2's, and h3's along with the classes
- createCondition()
  -create the div's and h2 along with styling
- createOtherInfo()
  - create the div, img, and h2
- UpdatePage()
  - calls the api then grabs the id's of all the elements i need to append then appends all of the data from the api to the elements created in createCity(), createTemperature(), createCondition(), createOtherInfo() 
- getValue
  - uses .value on the input box to grab the data that was typed inside of it then pushes that to zipCode where its used as a string literal in the api call 
- generatePage()
  - will call getValue(), updatePage()
    - then will have an if statement
    ~~~
    IF page === 0
      page = 1
      createCity()
      createTemperature()
      createCondition()
      createOtherInfo()
    END IF
    ~~~

# Process
<!-- two ways of doing the element creation. 1. have them all load on page load and all just be hidden and then you reveal them on button click. 2. you make them all be created on the get weather button click. -->
- THIS IS THE FIRST INITIAL PAGE LOAD
  - first grab main div by id. 
  - then create the elements that are static( I.E the div row, header, button, button input).
  - once the elements have been created wait for the user to input their zipCode
  - when the user presses get weather it will make all of the elements hidden
  once the user puts in their zip code and presses "get weather" it runs a function that makes the rest of the element on the page load.
- ON "get weather" press
  - set all inner text inside (city, condition, kelvin, celsius, fahrenheit, and add an image to other info)

- If the zip code was bad don't run anything and display an error message

There will be an event listener for a press of the get weather button
if will first see if that zip code is valid if not it will show an error
if it's true the function BtnClick will run. The BtnClick function will reference all of the needed createElement() references. the createElement function will use perimeters to create the function