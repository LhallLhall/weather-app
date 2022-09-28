# Variables
- key = access key for the api
- mainDiv = get id from the one div that you will append everything too
- zipCode = "" empty string where you will push the zipCode too
- 
# State

# functions
- createElements()
~~~
createElement h1
createElement 
createElement 
~~~
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
-  
  - 