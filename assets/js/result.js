var breedNameEl = document.getElementById("dog-breed");
var breedTypeEl = document.getElementById("dog-type");
var breedDescriptionEl = document.getElementById("dog-description");
var userResultEl = document.getElementById("user-result");

var query = breedNameEl.value;
var url = '';

userResultEl.addEventListener('click', function(event) {
    event.preventDefault();
    const breed = breedNameEl.value;
    const type = breedTypeEl.value;
    const description = breedDescriptionEl.value;
    fetch('https://dogbreeddb.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
})

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a9177b2819mshc7f150cf568bfc1p160e39jsnccdc2f6da663',
		'X-RapidAPI-Host': 'dogbreeddb.p.rapidapi.com'
	}
};

console.log(breedNameEl.value);
