var casenumber = document.getElementById("myPointer")
document.getElementById("event").innerHTML = "On this day, this group is formed..."
//switch case to identify event
casenumber.oninput = function () {
  var timeline;
    switch (casenumber.value) {
      case "1":
        timeline = "On this day, this group is formed..."
        break;
      case "2":
        timeline = "I forgot what has happened haha"
        break;
      default:
        timeline = "nothing"
    }
    document.getElementById("event").innerHTML = timeline;
}



