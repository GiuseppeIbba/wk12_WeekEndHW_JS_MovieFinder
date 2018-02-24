  const app = function(){


  const mainDiv = document.createElement('div');
  document.body.appendChild(mainDiv);

  const topDiv = document.createElement('div');
  const searchBar = document.createElement('input')
  searchBar.placeholder = "Type a movie title";

  const searchButton = document.createElement('button');
  mainDiv.appendChild(topDiv);
  mainDiv.appendChild(searchBar);
  mainDiv.appendChild(searchButton);

  searchButton.innerHTML = "Search";
  searchButton.addEventListener('click', function(){
  const movieTitle = searchBar.value
  const space = / /gi;
  const movieTitleModifier = movieTitle.replace(space, "+");
  // movieTitleModifier = movieTitle.split(" ");
  // console.log(movieTitleModifier);
  const url = 'http://www.omdbapi.com/?s=' + movieTitleModifier + '&apikey=24cd73c2';
  // const url2 = 'http://www.omdbapi.com/?type=' + movieTitleModifier + '&apikey=24cd73c2';
  console.log(url);
  // console.log(url2);
  const request = new XMLHttpRequest();
  const request2 = new XMLHttpRequest();
  request.open("Get", url);
  // request.open("Get", url);
  request.addEventListener('load', function () {
  const moviesRetrieved = JSON.parse(request.responseText);
  const movies = moviesRetrieved.Search;
  // console.log(movies);
  extractMovies(movies);

  // request.send();
  // console.log(movies);
  })
  request.send();
})

const extractMovies = function(movies){
  if (movies !== undefined) {
  movies.forEach(function(movie){
    movie
      console.log(movie);
});
}
}
}




    // titleResults.forEach(function(title){}








  // const searchTextAndLogoDiv = document.createElement('div');
  // const searchTextDiv = document.createElement('div');
  // const companyLogoDiv = document.createElement('div');
  // mainDiv.appendChild(searchTextAndLogoDiv);
  // searchTextAndLogoDiv.appendChild(searchTextDiv);
  // searchTextAndLogoDiv.appendChild(companyLogoDiv);











  // const topContentImg= document.createElement('img');
  // topContentImg.src = "http://cdn.droidviews.com/wp-content/uploads/2016/10/4-Retro-Games-Android.jpg"
  // stopContentImg.alt = "TOP IMAGE CONTENT IS NOT LINKED"

  // const topContentParagraph = document.createElement('p');
  // topContentParagraph.innerText = "FILM SEARCH WEEKEND PROJECT"
  // // topContentParagraph.appendChild(topContentImg);
  // topDiv.appendChild(topContentParagraph);


  // const searchTextAndLogoDiv = document.createElement('div');
  //
  // const searchTextDiv = document.createElement('div');
  // const companyLogoDiv = document.createElement('div');
  //
  //
  // mainDiv.appendChild(searchTextAndLogoDiv);
  // searchTextAndLogoDiv.appendChild(searchTextDiv);
  // searchTextAndLogoDiv.appendChild(companyLogoDiv);






  // console.log('funziona')


  /////////////////////////////////////////////////
  ///USER INPUT
  //////////////////////////////

  // searchBar.innerText = ;


  // searchButton.addEventListener('click', handleButtonClick);


  //
  // const handleButtonClick = function(){
  //   const search = searchBar.innerText;
  //   document.querySelector('input').innerHTML = search;
  //   const url = 'http://www.omdbapi.com/?t=' + title + '&apikey=24cd73c2';
  //   makeRequest(url, requestComplete);
  // }

// const makeRequest = function(url, callback){
//   const request = new XMLHttpRequest();
//   request.open("Get",url);
//   // request.setRequestHeader("user-key", API_KEY);
//   // request.setRequestHeader("Accept", 'application/json');
//   request.addEventListener('load', callback);
//   request.send();
// }

// const requestComplete = function(){
//   if(this.status !== 200) return;
//   const jsonString = this.responseText;
//   const movies = JSON.parse(jsonString);
//   // console.log(moviesMatchingSearch);
//   filmsData(movies);
// }





document.addEventListener("DOMContentLoaded", app);



 // -----------------------


  // finished html and start with js
