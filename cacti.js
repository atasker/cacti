$(document).ready(function(){

  var popMedia = "http://test1.playrific.com/page_views/page_views.cgi";
  var allTime = "http://test1.playrific.com/all_time_views/views.cgi";
  var allTimeGender = "http://test1.playrific.com/all_time_gender/views.cgi";
  var fiveToEight = "http://test1.playrific.com/ages_5_8/views.cgi";
  var eightToTwelve = "http://test1.playrific.com/ages_8_12/views.cgi";
  var liveUsers = "http://test1.playrific.com/graphs/graph1.cgi";
  var platformViews = "http://test1.playrific.com/graphs/graph2.cgi";
  var apacheProcs = "http://test1.playrific.com/graphs/graph3.cgi";

  var frameArray = [popMedia, allTime, allTimeGender, fiveToEight,
                    eightToTwelve, liveUsers, platformViews, apacheProcs];
  var len = frameArray.length;
  var iframe = $('#frame');
  var i = 0;

  setInterval(function () {
    var sample = frameArray[++i % len];
    iframe.attr('src', sample);
  }, 10000);

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
