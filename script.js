var imageList = document.querySelector('img')
var imageButton = document.getElementById('fetch-giphys')

function getAPI() {
var requestUrl ="https://api.giphy.com/v1/gifs/search?api_key=8myTaJql3ipBvoX8WqUnEzBlIDW3ZKJm&q=books&limit=10&rating=pg"

fetch(requestUrl)
.then(function (response) {
  return response.json();
})
.then(function (popcorn) {
    for (var i = 0; i < popcorn.data.length; i++) {
    var img = document.createElement('img');
    img.src = popcorn.data[i].images.downsized.url;
    document.body.appendChild(img);
  }})
}
 
 imageButton.addEventListener('click', getAPI); 

 