function toggleClass(newClass, elementClicked) {
	"use strict";
	if (elementClicked.classList.contains("enlarged")) {
		elementClicked.classList.remove("enlarged");
	} else {
		elementClicked.classList.add("enlarged");
	}
}

function resizer(elementClicked) {
	"use strict";
	var newClass = "enlarged";
	toggleClass(newClass, elementClicked);
}
