# Variables
- key = access key for the api
- mainDiv = get id from the one div that you will append everything too
- zipCode = "" empty string where you will push the zipCode too
- 
# functions
- createElements()
  - create a function with parameters that when the function is called it uses those parameters to create that element
    - I.E 
- BtnClick()
- tempConvert()
- clearData() <!-- not so sure about this????-->
# objects

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