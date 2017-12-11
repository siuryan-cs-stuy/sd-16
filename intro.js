var addToList = function() {
  var list = document.getElementById("thelist");
  var li = document.createElement("li");
  list.appendChild(li);
  li.innerHTML = Math.random();
  addListeners(li);
}

var b = document.getElementById("b");
b.addEventListener( "click", addToList );

var changeHeading = function() {
  var h = document.getElementById("h");
  h.innerHTML = this.innerHTML;
}

var revertHeading = function() {
  var h = document.getElementById("h");
  h.innerHTML = "Hello World!";
}

var remove = function() {
  this.remove();
}

var addListeners = function(le) {
  le.addEventListener( "mouseover", changeHeading );
  le.addEventListener( "mouseleave", revertHeading );
  le.addEventListener( "click", remove );
}

var listElement = document.getElementsByTagName("li");
for (le of listElement) {
  addListeners(le);
}

var fibonacci = function(n) {
  var i = 0;
  var j = 1;

  while (n > 1) {
    var temp = j;
    j = i + j;
    i = temp;
    n--;
  }

  return i;
}

var getLenFib = function(list) {
  return document.getElementsByClassName("fib").length;
}

var addFib = function() {
  var list = document.getElementById("list2");
  var li = document.createElement("li");
  li.setAttribute("class", "fib")
  list.appendChild(li);
  li.innerHTML = fibonacci(getLenFib(list));
}

var button2 = document.getElementById("b2");
b2.addEventListener( "click", addFib );

var stern = function(n){
    if (n==0){
	return 0;
    }
    if (n==1){
	return 1;
    }
    if (n%2 == 0){
	return stern(n/2);
    }
    else{
	var newn =((n-1)/2);
	return (stern(newn)+stern(newn+1));
    }
}

var Fractran = function(n){
    return stern(n)/stern(n+1);
}

var getLenStern = function(list) {
  return document.getElementsByClassName("stern").length;
}

var addStern = function() {
  var list = document.getElementById("list3");
  var li = document.createElement("li");
  li.setAttribute("class", "stern")
  list.appendChild(li);
  li.innerHTML = Fractran(getLenStern(list));
}

var button3 = document.getElementById("b3");
b3.addEventListener( "click", addStern );

