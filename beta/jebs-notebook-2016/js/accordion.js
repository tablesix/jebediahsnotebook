
/*
Insert the following into the html:
for the body tag, set a onload property as "init()"
ex: <body onload="init()">...</body>

Code that contains the accordion:
<div class="accordionItem">
  <h2>About accordions</h2>
  <div>
    <p>JavaScript accordions let you squeeze a lot of content into a small space in a Web page.</p>
    <p>This simple accordion degrades gracefully in browsers that don't support JavaScript or CSS.</p>
  </div>
</div>
*/

//global variable for use between functions
var accordionItems = new Array();


//sets up basic accordion and class toggling stucture, and to hide items on page load

function init() {

	// Grab the accordion items from the page
	var divs = document.getElementsByTagName( 'div' );
	for ( var i = 0; i < divs.length; i++ ) {
		if ( divs[i].className == 'accordionItem' ) accordionItems.push( divs[i] );
	}

	// Assign onclick events to the accordion item headings
	for ( var i = 0; i < accordionItems.length; i++ ) {
		var h2 = getFirstChildWithTagName( accordionItems[i], 'H2' );
		h2.onclick = toggleItem;
	}

	// Hide all accordion item bodies except the first
	for ( var i = 1; i < accordionItems.length; i++ ) {
		accordionItems[i].className = 'accordionItem hide';
	}
}




//function to toggle accordions open/closed:

function toggleItem() {
	var itemClass = this.parentNode.className;

	// Hide all items
	for ( var i = 0; i < accordionItems.length; i++ ) {
		accordionItems[i].className = 'accordionItem hide';
	}

	// Show this item if it was previously hidden
	if ( itemClass == 'accordionItem hide' ) {
		this.parentNode.className = 'accordionItem';

	}
}



/*
The function is very simple. It loops through each of the child nodes of the supplied element until it finds a node with the supplied tag name. When it finds such a node, it returns it.
*/
function getFirstChildWithTagName( element, tagName ) {
	for ( var i = 0; i < element.childNodes.length; i++ ) {
		if ( element.childNodes[i].nodeName == tagName ) return element.childNodes[i];
	}
}
