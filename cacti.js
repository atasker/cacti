$(document).ready(function(){

  var popMedia = "http://test1.playrific.com/page_views/page_views.cgi";
  var liveUsers = "http://cacti.playrific.com/graph_image.php?local_graph_id=71&rra_id=5&graph_width=1300&graph_height=400&graph_nolegend=";
  var platformViews = "http://cacti.playrific.com/graph_image.php?local_graph_id=106&rra_id=2&graph_width=1300&graph_height=400&graph_nolegend=";
  var apacheProcs = "http://cacti.playrific.com/graph_image.php?local_graph_id=120&rra_id=0&graph_width=1300&graph_height=400&graph_nolegend=";

  var frameArray = [popMedia, liveUsers, platformViews, apacheProcs];
  var len = frameArray.length;
  var iframe = $('#frame');
  var i = 0;

  setInterval(function () {
    iframe.attr('src', frameArray[++i % len]);
  }, 5000);

});

//function changeContent() {

  //var liveUsers = { text: "Live Users (60 min delay)", image: "<img id='graph' src='http://cacti.playrific.com/graph_image.php?local_graph_id=71&rra_id=5&graph_width=1500&graph_height=200&graph_nolegend='>"};
  //var platformViews = { text: "Platform views", image: "<img id='graph' src='http://cacti.playrific.com/graph_image.php?local_graph_id=106&rra_id=2&graph_width=1500&graph_height=200&graph_nolegend='>"};
  //var apacheProcs = { text: "Apache processes", image: "<img id='graph' src='http://cacti.playrific.com/graph_image.php?local_graph_id=120&rra_id=0&graph_width=1500&graph_height=200&graph_nolegend='>"};
  //var myArray = [liveUsers, platformViews, apacheProcs];
  //var sample = Math.floor(Math.random() * myArray.length) + 0;
  //document.getElementById("header-container").innerHTML = myArray[sample].text;
  //document.getElementById("graph-container").innerHTML = myArray[sample].image;
  //setTimeout(changeContent, 10000);

//}

//window.onload = changeContent;
