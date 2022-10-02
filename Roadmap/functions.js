
var casenumber = document.getElementById("myPointer").value;

//switch case to identify event
  function showEvent() {
    var timeline;
    switch (casenumber) {
      case "1":
        timeline = "On this day, this group is formed..."
        break;
      case "2":
        timeline = "I forgot what has happened haha"
        break;
      default:
        timeline = "nothing"
    }
    return timeline;
  }
  document.getElementById("event").innerHTML = showEvent();

