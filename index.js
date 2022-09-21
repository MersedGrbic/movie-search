

//Function  handleSearch() handles the search button when clicked.
// It takes the value from input later used as api endpoint in function handleApiCall() that is called inside the function handleSearch().

function handleSearch(){
   let inputValue = document.getElementById('input-value').value
   handleApiCall(inputValue);
    
}
function handleHTML(movieData){
   document.getElementById('movie').innerHTML+= `
            
   <div class="wrapper">
    <div class="movie--img">
       <img src="${movieData.Poster}" alt="Movie cover poster">
    </div>
   
   
    <div class="movie--about">
      <div class="movie-name">
        <h2>${movieData.Title}</h2>
       </div>
   
    <div class="movie--info">
       <p class="runtime--rating">${movieData.Runtime}<span class="rating-star">&#9733;  </span>${movieData.Ratings[0].Value}</p>
       
       <p>${movieData.Genre}</p>
       <button class="watchlist">+ Watchlist</button>
    </div>
     <div class="movie--plot">
       <p>${movieData.Plot}</p>
     </div>
    </div>
   </div>

   <div class="line"></div>

   `
}
//Function handleApiCall() is invoced instide of handleSeach() functio to get data from api OMDb and update html with that data.
function handleApiCall(endpoint){
   fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=d09ad0f3&s=${endpoint}`)
    .then(res=>res.json())
    .then(data=>{
      //clearing inner html when we call function
      document.getElementById('movie').innerHTML= ''
   for(let i =0;i<data.Search.length;i++){
      fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=d09ad0f3&t=${data.Search[i].Title}`)
         .then(res=>res.json())
         .then(movieData=>{
            
           handleHTML(movieData);
         })}
      })
   }
document.getElementById('btn-search').addEventListener('click', handleSearch)

