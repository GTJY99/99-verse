var pointer = document.getElementById("myPointer")
var output = document.getElementById("myValue")
output.innerHTML = pointer.value;

pointer.oninput = function() {
    output.innerHTML = this.value;
    filterEvent(this.value);
}



//functions from filter
function filterEvent(pointervalue) {
    var x, i;
    x = document.getElementsByClassName("event");
    for (i = 0; i < x.length; i++){
        eventRemove(x[i], "show");
        if (x[i].className.indexOf(pointervalue) > -1) eventAdd(x[i], "show");
    }
}

function eventAdd(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function eventRemove(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}
