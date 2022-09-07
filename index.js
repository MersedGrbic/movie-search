

//Function  handleSearch() handles the search button when clicked.
// It takes the value from input later used as api endpoint in function handleApiCall() that is called inside the function handleSearch().

function handleSearch(){
   let inputValue = document.getElementById('input-value').value
   handleApiCall(inputValue);
    
}

//Function to get data from api call then use that data as parameter in function handleHTML().
function handleApiCall(endpoint){
fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=d09ad0f3&s=${endpoint}`)
.then(res=>res.json())
 .then(data=>{
   console.log(data)
})
}

document.getElementById('btn-search').addEventListener('click', handleSearch)