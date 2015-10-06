$(document).ready(function(){

  var popMedia = "http://test1.playrific.com/page_views/page_views.cgi";
  var allTime = "http://test1.playrific.com/all_time_views/views.cgi";
  var allTimeGender = "http://test1.playrific.com/all_time_gender/views.cgi";
  var fiveToEight = "http://test1.playrific.com/ages_5_8/views.cgi";
  var eightToTwelve = "http://test1.playrific.com/ages_8_12/views.cgi";
  var twelveToSixteen = "http://test1.playrific.com/ages_12_16/views.cgi";
  var liveUsers = "http://test1.playrific.com/graphs/graph1.cgi";
  var platformViews = "http://test1.playrific.com/graphs/graph2.cgi";
  var apacheProcs = "http://test1.playrific.com/graphs/graph3.cgi";

  var frameArray = [popMedia, allTime, allTimeGender, fiveToEight,
                    eightToTwelve, twelveToSixteen, liveUsers,
                    platformViews, apacheProcs];
  var len = frameArray.length;
  var iframe = $('#frame');
  var i = 0;

  setInterval(function () {
    var sample = frameArray[++i % len];
    var next = iframe.attr('src', sample);
    var loaded = next.load();
    loaded.show();
  }, 10000);

 // setInterval(function () {
 //   var sample = frameArray[++i % len];
 //   iframe.attr('src', sample);
 // }, 10000);

});
