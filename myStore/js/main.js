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

    //var myLink = document.createElement('a');
    //myLink.setAttribute('href', threeD[i].link);
    //Need to figure out how to wrap myArticle as anchor tag.

    var myPara1 = document.createElement('h3');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myImg = document.createElement('img');
    myImg.setAttribute('src',threeD[i].image);
    myImg.setAttribute('width','210px');
    myImg.setAttribute('height','140px');

    myPara1.textContent = threeD[i].name;
    myPara2.textContent = 'Author: ' + threeD[i].author;
    myPara3.textContent = 'Price: ' + threeD[i].price;
    myImg.textContent = threeD[i].image;

    myArticle.appendChild(myImg);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    
    section.appendChild(myArticle);
  }
}