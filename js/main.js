var data = {
  "products" :  "3D Printings",
  "product" : [
    {
      "name" : "Motorcyle",
      "price" : "$20",
      "author" : "Holly Davidson",
      "image" : "images/logo.png"
    }, 
    {
      "name" : "Car",
      "price" : "$30",
      "author" : "Brad Pitt",
      "image" : "../images/3d/car.png"
    },
    {
      "name" : "Dragon",
      "price" : "$60",
      "author" : "Angelina Jolie",
      "image" : "../images/3d/dragon.jpg"
    },  
    {
      "name" : "Tower",
      "price" : "$40",
      "author" : "Ray Lewis",
      "image" : "../images/3d/tower.jpg"
    },
    {
      "name" : "Train",
      "price" : "$30",
      "author" : "Will Smith",
      "image" : "../images/3d/train.jpg"
    },
    {
      "name" : "Ship",
      "price" : "$45",
      "author" : "Tom Cruise",
      "image" : "../images/3d/ship.jpg"
    } 
  ]
}

var header = document.querySelector('#json1');
var section = document.querySelector('#json2');

var requestURL = 'js/products.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();
request.onload = function() {
  var productsText = request.response;
  var products = JSON.parse(productsText);
  showProducts(products);
}


// display the information

function showProducts(jsonObj) {
  var threeD = jsonObj['product'];
  
  for(i = 0; i < threeD.length; i++) {
    var myArticle = document.createElement('article');

    var myPara1 = document.createElement('h3');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('img');

    myPara1.textContent = threeD[i].name;
    myPara2.textContent = 'Author: ' + threeD[i].author;
    myPara3.textContent = 'Price: ' + threeD[i].price;
    myPara4.textContent = threeD[i].image;


    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);

    section.appendChild(myArticle);
  }
}

data.product.forEach( function(obj) {
  var img = new Image();
  img.src = obj.image;
  img.setAttribute("class", "banner-img");
  img.setAttribute("alt", "effy");
  document.getElementById("img-container").appendChild(img);
});

