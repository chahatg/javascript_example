// ADD NEW ITEM TO END OF LIST
var list =  document.getElementsByTagName("UL")[0];
var li =  document.createElement("LI");
li.appendChild(document.createTextNode("cream"));
list.appendChild(li);


// ADD NEW ITEM START OF LIST
li = document.createElement("LI");
li.appendChild(document.createTextNode("kale"));
list.insertBefore(li, list.childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var i;

for(i = 0; i < list.childNodes.length; i++){
	document.getElementsByTagName("LI")[i].setAttribute("class", "cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var itemsTotal = list.childNodes.length;
var heading = document.getElementsByNameTag("H2")[0];
li = document.createElement("span");
span.appendChild(document.createTextNode(itemsTotal));
heading.appendChild(span);

