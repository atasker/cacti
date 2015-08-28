function changeContent() {

  var liveUsers = { text: "Live Users (60 min delay)", image: "<img id='graph' src='http://cacti.playrific.com/graph_image.php?local_graph_id=71&rra_id=5&graph_width=1500&graph_height=200&graph_nolegend='>"};
  var platformViews = { text: "Platform views", image: "<img id='graph' src='http://cacti.playrific.com/graph_image.php?local_graph_id=106&rra_id=2&graph_width=1500&graph_height=200&graph_nolegend='>"};
  var apacheProcs = { text: "Apache processes", image: "<img id='graph' src='http://cacti.playrific.com/graph_image.php?local_graph_id=120&rra_id=0&graph_width=1500&graph_height=200&graph_nolegend='>"};

  // Removed liveUsers & platformViews for guest visit
  // Put both back in to return to normal
  var myArray = [apacheProcs];

  var sample = Math.floor(Math.random() * myArray.length) + 0;

  // To return to normal replace myArray[0] with myArray[sample] to access all graphs
  document.getElementById("header-container").innerHTML = myArray[0].text;
  document.getElementById("graph-container").innerHTML = myArray[0].image;

  setTimeout(changeContent, 10000);

}

window.onload = changeContent;
