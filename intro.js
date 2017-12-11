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
