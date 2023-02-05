const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://dogbreeddb.p.rapidapi.com/paginated/",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "a9177b2819mshc7f150cf568bfc1p160e39jsnccdc2f6da663",
		"X-RapidAPI-Host": "dogbreeddb.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

$.ajax({
    url: "https://dogbreeddb.p.rapidapi.com/paginated/",
    method: "GET"
}).then(function(response) {
    console.log(response);

    var tr = $("<tr>");

    var breedName = $("<td>").text(response.Breed);
    var breedType = $("<td>").text(response.Type);
    var breedDescription = $("<td>").text(response.Description);

    tr.append(breedName, breedType, breedDescription);

    $("tbody").append(tr);
})