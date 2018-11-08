// ADD NEW ITEM TO END OF LIST
var list =  document.getElementsByTagName("UL")[0];

var li =  document.createElement("li");
li.appendChild(document.createTextNode("cream"));
list.appendChild(li);


// ADD NEW ITEM START OF LIST
li = document.createElement("li");
li.appendChild(document.createTextNode("kale"));
list.insertBefore(li, list.childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var i;
let List = document.querySelectorAll('li');

for(i = 0; i < List.length; i++){
	List[i].className = 'cool';
}



// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

var itemsTotal = List.length;
var heading = document.querySelector("h2");
var el = document.createElement("span");
var text = document.createTextNode(itemsTotal);
el.appendChild(text);
heading.appendChild(el);
