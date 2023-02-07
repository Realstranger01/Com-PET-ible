var dog = "Breed";
var queryURL = "https://dogbreeddb.p.rapidapi.com/?search" + dog + "&apikey=breed";

import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://dogbreeddb.p.rapidapi.com/',
  params: {id: '47'},
  headers: {
    'X-RapidAPI-Key': 'a9177b2819mshc7f150cf568bfc1p160e39jsnccdc2f6da663',
    'X-RapidAPI-Host': 'dogbreeddb.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


$.ajax({
    url: "https://dogbreeddb.p.rapidapi.com/?search=alaskan",
    method: "GET"
}).then(function(response) {
    console.log(response[0]);

var tr = $("<tr>");

  var breedNameEl = $("<td>").text(response.Name);
  var breedTypeEl = $("<td>").text(response.Type);
  var breedDescriptionEl = $("<td>").text(response.Description);

  tr.append(breedNameEl, breedTypeEl, breedDescriptionEl);
  
  $("tbody").append(tr);
});