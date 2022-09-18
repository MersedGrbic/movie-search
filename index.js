

//Function  handleSearch() handles the search button when clicked.
// It takes the value from input later used as api endpoint in function handleApiCall() that is called inside the function handleSearch().

function handleSearch(){
   let inputValue = document.getElementById('input-value').value
   handleApiCall(inputValue);
    
}

//Function to get data from api call
function handleApiCall(endpoint){
   fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=d09ad0f3&s=${endpoint}`)
    .then(res=>res.json())
    .then(data=>{
   for(let i =0;i<data.Search.length;i++){
      fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=d09ad0f3&t=${data.Search[i].Title}`)
         .then(res=>res.json())
         .then(movieData=>{
            document.getElementById('movie').innerHTML+= `
            
            <div class="movie--img">
                <img src="${movieData.Poster}" alt="Movie cover poster">
            </div>
            <div class="movie--about">
            <div class="movie-name">
                <h2>${movieData.Title}</h2>
                <p class="rating"><span class="rating-star">&#9733;</span>${movieData.Ratings[0].Value}</p>
            </div>
            <div class="movie--info">
                <p>${movieData.Runtime}</p>
                <p>${movieData.Genre}</p>
                <button>+ Watchlist</button>
            </div>
            <div class="movie--plot">
                <p>${movieData.Plot}</p>

            </div>
            
            <div class="line"></div>
            `

         })}
      })
   }
document.getElementById('btn-search').addEventListener('click', handleSearch)

