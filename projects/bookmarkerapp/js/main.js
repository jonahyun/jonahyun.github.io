//Listen for form submit

document.getElementById('myForm').addEventListener('submit', saveBookmark);

//Save Bookmark
function saveBookmark(e) {
  //Get form values
  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;
  //console.log(siteName);



  var bookmark = {
    name: siteName,
    url: siteUrl
  }

  if(!validateForm(siteName, siteUrl)){
    return false;
  }


  if(localStorage.getItem('bookmarks') === null) {

    var bookmarks = [];  //Init array
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks)); //Set to localStorage

  } else {

    var bookmarks = JSON.parse(localStorage.getItem('bookmarks')); // Get bookmarks from localStorage
    bookmarks.push(bookmark); //Add bookmark to array
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks)); //Re-set to back to local Storage

  }

  //clear form
  document.getElementById('myForm').reset();

  //re-fetch bookmakrs();
  fetchBookmarks();

  //Prevent form from submitting
  e.preventDefault();

  /*
    // Local Storage Test
    localStorage.setItem('test', 'hello world');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));
  */

}

//Delete bookmarks
function deleteBookmark(url) {
  //Get bookmark from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  for (var i =0;i < bookmarks.length;i++) {
    if(bookmarks[i].url == url) {
      //remove from array
      bookmarks.splice(i,1);
    }
  }

  // Reset back to localStorage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  //re-fetch bookmakrs();
  fetchBookmarks();

}



// Fetch bookmarks
function fetchBookmarks() {
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Get output id
  var bookmarksResults = document.getElementById('bookmarksResults');

  //build output
  bookmarksResults.innerHTML = '';

  for(var i=0; i < bookmarks.length; i++){
      var name = bookmarks[i].name;
      var url = bookmarks[i].url;

      bookmarksResults.innerHTML += '<div class="well">' +
                                    '<h3>' + name +
                                    '<a class="btn btn-default" target="_blank" href="'+url+'">Visit<a>  '+
                                    '<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete<a>  '+
                                    '</h3>' +
                                    '</div>';
   }

}

function validateForm(siteName, siteUrl) {

    if(!siteName || !siteUrl) {
      alert('Please fill in the form');
      return false;
    }

    var expression = '^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$';
    var regex = new RegExp(expression);

    if(!siteUrl.match(regex)){
      alert('Please use a valid Url');
      return false;
    }

    return true;

}
