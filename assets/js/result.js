const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://dogbreeddb.p.rapidapi.com/?search=breed",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "e550cee4f9msh7a1c81a2af99233p1ab958jsn10c436fb5af0",
		"X-RapidAPI-Host": "dogbreeddb.p.rapidapi.com"
	}
};

// Show loading spinner
const spinner = document.createElement("div");
spinner.setAttribute("class", "spinner-border");
spinner.setAttribute("role", "status");
spinner.innerHTML = '<span class="sr-only">Loading...</span>';
document.querySelector("#user-result").appendChild(spinner);

const xhr = new XMLHttpRequest();
xhr.open(settings.method, settings.url, settings.async);
xhr.setRequestHeader("X-RapidAPI-Key", settings.headers["X-RapidAPI-Key"]);
xhr.setRequestHeader("X-RapidAPI-Host", settings.headers["X-RapidAPI-Host"]);
xhr.onreadystatechange = function () {
	if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
		const response = JSON.parse(this.responseText);

		// store data in local storage
		if (typeof (Storage) !== "undefined") {
			localStorage.setItem("breeds", JSON.stringify(response));
		}

		const tbody = document.querySelector("#user-result tbody");
		tbody.innerHTML = "";
		for (const breed of response) {
			const tr = document.createElement("tr");
			const breedName = document.createElement("td");
			breedName.textContent = breed.breedName;
			const breedType = document.createElement("td");
			breedType.textContent = breed.breedType;
			const breedDescription = document.createElement("td");
			breedDescription.textContent = breed.breedDescription;
			tr.appendChild(breedName);
			tr.appendChild(breedType);
			tr.appendChild(breedDescription);
			tbody.appendChild(tr);
		}

		// Hide loading spinner
		document.querySelector("#user-result").removeChild(spinner);
	}
};
xhr.send();

// retrieve data from local storage
if (typeof (Storage) !== "undefined") {
	const storedResults = JSON.parse(localStorage.getItem("breeds"));
	if (storedResults) {
		const tbody = document.querySelector("#user-result tbody");
		tbody.innerHTML = "";
		for (const breed of storedResults) {
			const tr = document.createElement("tr");
			const breedName = document.createElement("td");
			breedName.textContent = breed.breedName;
			const breedType = document.createElement("td");
			breedType.textContent = breed.breedType;
			const breedDescription = document.createElement("td");
			breedDescription.textContent = breed.breedDescription;
			tr.appendChild(breedName);
			tr.appendChild(breedType);
			tr.appendChild(breedDescription);
			tbody.appendChild(tr);
		}
	}
}


const modal = document.createElement("div");
modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
modal.style.position = "fixed";
modal.style.top = "0";
modal.style.left = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.display = "flex";
modal.style.justifyContent = "center";
modal.style.alignItems = "center";

const modalContent = document.createElement("div");
modalContent.style.backgroundColor = "#fff";
modalContent.style.padding = "20px";
modalContent.style.borderRadius = "10px";

const closeButton = document.createElement("button");
closeButton.textContent = "Close";
closeButton.style.marginTop = "10px";
closeButton.style.display = "block";
closeButton.style.marginLeft = "auto";
closeButton.style.marginRight = "auto";
closeButton.style.backgroundColor = "#fff";
closeButton.style.padding = "10px 20px";
closeButton.style.borderRadius = "5px";
closeButton.style.cursor = "pointer";

closeButton.addEventListener("click", function () {
    modal.style.display = "none";
});

modalContent.appendChild(closeButton);




const modalText = document.createElement("p");
modalText.textContent = "Thank you for using our webpage";
modalText.style.textAlign = "center";

modalContent.appendChild(modalText);
modal.appendChild(modalContent);
document.body.appendChild(modal);
