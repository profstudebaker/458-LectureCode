/* 
JAVASCRIPT
- main programming language natibely supported by web browsers
- single threaded and object oriented
- uses DOM (Document Object Model) to interact with HTML and CSS
*/

function randomColor() {
    // generate a random rgb color value
    // by generating 3 numbers between the range 0-255
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    // use backticks for a template string in javascript
    // "rgb(" + r + " " + g + " " + b + ")"
    let colorValue = `rgb(${r} ${g} ${b})`;
    return colorValue;
  }
  // print out the returned value of our function
  // console.log(randomColor());
  
  // select the element that we want to modify
  // selecting the h1 element with the id of page-title
  // save that element to a variable
  let titleElement = document.getElementById("page-title");
  // any time we want to modify an element's css, we can use element.style
  // the line below is equivalent to the following css
  /*
  #page-title {
      color: deeppink
  }
  */
  titleElement.style.color = randomColor();
  
  /* RESPONDING TO USER CLICK EVENTS */
  
  // add an event listener to an element
  // addEventListener takes two params
  // first one - name of the event to listen for
  // second one - function to execute when the event happens
  const RESPONSES = [
    "Maybe",
    "Perhaps",
    "Not a chance",
    "It does not appear that way",
    "If you're lucky",
  ];
  
  document.querySelector("#ask-btn").addEventListener("click", () => {
    // arrow functions are un-named functions that we can use instead of
    // passing in a reference to a function
    let randomIndex = Math.floor(Math.random() * RESPONSES.length);
    let randomResponse = RESPONSES[randomIndex];
    //   console.log(randomResponse);
    document.querySelector("#response").innerText = "Response: " + randomResponse;
  });
  
  /* GETTING VALUES FROM FORM INPUTS */
  let resultElement = document.createElement("p");
  
  function add(n1, n2) {
    console.log("Received " + n1 + " and " + n2);
    document.querySelector(".addition").appendChild(resultElement);
    resultElement.innerText = parseInt(n1) + parseInt(n2);
  }
  
  // selecting the add button and adding an event listener
  // execute the add() function when button is clicked
  // get the current values from each input to pass in to add()
  document.querySelector("#add-btn").addEventListener("click", () => {
    add(document.querySelector("#n1").value, document.querySelector("#n2").value);
  });
  
  document.querySelector("#clear").addEventListener("click", () => {
    document.querySelector(".addition").removeChild(resultElement);
  });
  
  /* IMAGE GALLERY */
  const PHOTOS = [
    "https://www.jacksonsart.com/blog/wp-content/uploads/2014/08/matissethesheaf1953.jpg",
    "https://news.artnet.com/app/news-upload/2014/04/matisse-image-homepage.jpg",
    "https://wilderpaintsplatters.files.wordpress.com/2011/11/kidsmatisse-0021.jpg",
  ];
  
  let index = 0;
  document.querySelector(".painting").src = PHOTOS[index];
  
  document.querySelector("#next").addEventListener("click", () => {
    index += 1;
    document.querySelector("#prev").disabled = false;
    if (index === PHOTOS.length - 1) {
      // disable the button
      document.querySelector("#next").disabled = true;
    }
    document.querySelector(".painting").src = PHOTOS[index];
  });
  
  function goToPrev() {
    index -= 1;
    document.querySelector("#next").disabled = false;
    if (index === 0) {
      document.querySelector("#prev").disabled = true;
    }
    document.querySelector(".painting").src = PHOTOS[index];
  }
  
  document.querySelector("#prev").addEventListener("click", goToPrev);
  