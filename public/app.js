const app = function(){


  const mainDiv = document.createElement('div');
  document.body.appendChild(mainDiv);

  const topDiv = document.createElement('header');
  mainDiv.appendChild(topDiv);

  const displayDetailsAndImgDiv = document.createElement('div');
  mainDiv.appendChild(displayDetailsAndImgDiv);

  const searchBarAndButtonTitleDiv = document.createElement('div');
  topDiv.appendChild(searchBarAndButtonTitleDiv);

  const searchBarTitleDiv = document.createElement('input')
  searchBarTitleDiv.placeholder = "Type a movie title";
  const searchButtonTitleDiv = document.createElement('button');
  searchBarAndButtonTitleDiv.appendChild(searchBarTitleDiv);
  searchBarAndButtonTitleDiv.appendChild(searchButtonTitleDiv);

  const displayDetailsDiv = document.createElement('div');
  const displayImageDiv = document.createElement('div');
  displayDetailsAndImgDiv.appendChild(displayDetailsDiv);
  displayDetailsAndImgDiv.appendChild(displayImageDiv);

  const detailsUl = document.createElement('ul');
  displayDetailsDiv.appendChild(detailsUl);

  mainDiv.id = "mainDiv";
  topDiv.id = "topDiv";
  displayDetailsAndImgDiv.id = "displayDetailsAndImgDiv";
  displayDetailsDiv.id = "displayDetailsDiv";
  displayImageDiv.id = "displayImageDiv"
  searchBarAndButtonTitleDiv.id = "searchBarAndButtonTitleDiv";
  searchBarTitleDiv.id = "searchBarTitleDiv";
  searchButtonTitleDiv.id = "searchButtonTitleDiv";




























  searchButtonTitleDiv.innerHTML = "Search";
  searchButtonTitleDiv.addEventListener('click', function(){
    const moviesTitle = searchBarTitleDiv.value
    const space = / /gi;
    const moviesTitleModifier = moviesTitle.replace(space, "+");
    const url = 'http://www.omdbapi.com/?s=' + moviesTitleModifier + '&apikey=' + API_KEY;
    console.log(url);
    const requestDetails = new XMLHttpRequest();
    requestDetails.open("Get", url);
    requestDetails.addEventListener('load', function () {
      const moviesDetailsRetrieved = JSON.parse(requestDetails.responseText);
      const moviesDetails = moviesDetailsRetrieved.Search;
      extractMoviesDetails(moviesDetails);
    });
    requestDetails.send();
  });
  //
  // searchButtonType.innerHTML = "Search";
  // searchButtonType.addEventListener('click', function(){
  //   const movieType = searchBarType.value
  //   const space = / /gi;
  //   const movieTypeModifier = movieType.replace(space, "+");
  //   const url2 = 'http://www.omdbapi.com/?type=' + movieTypeModifier + '&apikey=24cd73c2';
  //   console.log(url2);
  //   const requestType = new XMLHttpRequest();
  //   requestType.open("Get", url2);
  //   requestType.addEventListener('load', function () {
  //     const moviesTypeRetrieved = JSON.parse(requestType.responseText);
  //     const moviesTypes = moviesTypeRetrieved.Search;
  //     extractMoviesByType(moviesTypes);
  //   });
  //   requestType.send();
  // });

  const extractMoviesDetails = function(moviesDetails){
    if (moviesDetails !== undefined) {
      moviesDetails.forEach(function(movie){
        displayTitle(movie.Title);
        displayYear(movie.Year);
        displayType(movie.Type);
        displayPoster(movie.Poster);

        console.log(movie);
      });
    };
  };

  const displayTitle = function(title){
    const titleLi = document.createElement('Li')
    titleLi.innerText = title;
    detailsUl.appendChild(titleLi);
  }

  const displayYear = function(year){
    const yearLi = document.createElement('Li')
    yearLi.innerText = year;
    detailsUl.appendChild(yearLi);
  }

  const displayType = function(type){
    const typeLi = document.createElement('Li')
    typeLi.innerText = type;
    detailsUl.appendChild(typeLi);
  }

  const displayPoster = function(poster){
    const image = document.createElement('img')
    image.src = poster;
    displayImageDiv.appendChild(image);


  }
  // const extractMoviesByType = function(moviesTypes){
  //   if (moviesTypes !== undefined) {
  //     moviesTypes.forEach(function(movie){
  //       movie
  //       console.log(movie);
  //     });
  //   };
  // };

}






// titleResults.forEach(function(title){}








// const displayDetailsAndImgDiv = document.createElement('div');
// const displayDetails = document.createElement('div');
// const companyLogoDiv = document.createElement('div');
// mainDiv.appendChild(displayDetailsAndImgDiv);
// displayDetailsAndImgDiv.appendChild(displayDetails);
// displayDetailsAndImgDiv.appendChild(companyLogoDiv);











// const topContentImg= document.createElement('img');
// topContentImg.src = "http://cdn.droidviews.com/wp-content/uploads/2016/10/4-Retro-Games-Android.jpg"
// stopContentImg.alt = "TOP IMAGE CONTENT IS NOT LINKED"

// const topContentParagraph = document.createElement('p');
// topContentParagraph.innerText = "FILM SEARCH WEEKEND PROJECT"
// // topContentParagraph.appendChild(topContentImg);
// topDiv.appendChild(topContentParagraph);


// const displayDetailsAndImgDiv = document.createElement('div');
//
// const displayDetails = document.createElement('div');
// const companyLogoDiv = document.createElement('div');
//
//
// mainDiv.appendChild(displayDetailsAndImgDiv);
// displayDetailsAndImgDiv.appendChild(displayDetails);
// displayDetailsAndImgDiv.appendChild(companyLogoDiv);






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
