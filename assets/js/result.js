const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://dogbreeddb.p.rapidapi.com/?search=alaskan",
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



// Add modal HTML to the DOM
const modalHTML = `

<div id="modal" class="modal">
	<div class="modal-content">
		<span class="close-modal">&times;</span>
		<p id="modal-text"></p>
	</div>
</div>`;
document.body.insertAdjacentHTML("beforeend", modalHTML);
// Get modal elements
const modal = document.querySelector("#modal");
const closeModal = document.querySelector(".close-modal");
const modalText = document.querySelector("#modal-text");

// Show modal when a breed is clicked
const tbody = document.querySelector("#user-result tbody");
tbody.addEventListener("click", function (event) {
	if (event.target.tagName === "TD") {
		modalText.textContent = event.target.textContent;
		modal.style.display = "block";
	}
});

// Close modal when close icon is clicked
closeModal.addEventListener("click", function () {
	modal.style.display = "none";
});

// Close modal when background is clicked
modal.addEventListener("click", function (event) {
	if (event.target === modal) {
		modal.style.display = "none";
	}
});

// With this code, the user can now click on a breed in the table to see more details in the modal. The modal can be closed by clicking the close icon or outside the modal background.

// Scroll to top of page when breed is clicked in the modal
tbody.addEventListener("click", function (event) {
	if (event.target.tagName === "TD") {
		modalText.textContent = event.target.textContent;
		modal.style.display = "block";
		window.scrollTo(0, 0);
	}
});

	// With this code, the user will be automatically scrolled back to the top of the page when they click on a breed in the modal.