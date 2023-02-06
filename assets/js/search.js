var webSearchEl = document.getElementById("web-search");
var submitBtnEl = document.getElementById("submit-btn");

submitBtnEl.addEventListener("click", function (event) {
  event.preventDefault();

  var query = webSearchEl.value;
  var url = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=${query}&pageNumber=1&pageSize=10&autoCorrect=true`;

  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => console.error(err));
});

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e550cee4f9msh7a1c81a2af99233p1ab958jsn10c436fb5af0',
    'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
  }
};

