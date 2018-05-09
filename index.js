const urlGIS = "https://data.cityofnewyork.us/api/views/xyye-rtrs/rows.json";
const urlGeo = "https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson"
const urlCrimes = "https://data.cityofnewyork.us/resource/9s4h-37hy.json"
const urlHouse = "https://data.cityofnewyork.us/api/views/hg8x-zxpr/rows.json"
var map;

function updateTable(){
  tableR=$("#tableContent")[0]
  var newRow, borough, district;
  $.getJSON(urlGIS, function(dataOriginal){
    for (var i = 0; i < dataOriginal.data.length; i++) {
      newRow = tableR.insertRow(tableR.rows.length)
      district = newRow.insertCell(0);
      borough = newRow.insertCell(1);
      borough.innerHTML = dataOriginal.data[i][10]
      district.innerHTML = dataOriginal.data[i][dataOriginal.data[i].length-1]
    }
  })
}

function callData(){
  $.getJSON(urlGIS, function(dataOriginal){
    console.log(dataOriginal);;
  })
  $.getJSON(urlGeo, function(dataOriginal){
    console.log(dataOriginal);;
  })
  $.getJSON(urlCrimes, function(dataOriginal){
    console.log(dataOriginal);;
  })
  $.getJSON(urlHouse, function(dataOriginal){
    console.log(dataOriginal);;
  })
}

$(document).ready(function(){
  $("#updateTableButton").on("click", updateTable);
})

$(document).ready(function(){
  $("#getDataButton").on("click", callData);
})

<!-- Google Maps -->

function onGoogleMapResponse(){
  var NYUStern = {lat: 40.7291, lng: -73.9965};
  map = new google.maps.Map(document.getElementById('googleMapDisplay'), {
    zoom: 17,
    center: NYUStern
  });

addMarker(NYUStern);

  function addMarker(coordinates){
    var marker = new google.maps.Marker({
      position: coordinates,
      map: map
    });
  }
}



//Planning

// var metricsURLs={
//   "https://data.cityofnewyork.us/api/views/xyye-rtrs/rows.json?accessType=DOWNLOAD":"GIS",
//   "https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson": "Geoshapes",
//   "https://data.cityofnewyork.us/resource/9s4h-37hy.json" : "Crimes",
//   "https://data.cityofnewyork.us/api/views/hg8x-zxpr/rows.json?accessType=DOWNLOAD": "Housing by building data"
// }

// function obtainDataURL(URL){
//   var data = $.get(URL, function(){
//     console.log(URL)
//   })
//   .done(function(){
//     console.log(data);
//   })
//   .fail(function(){
//     console.error(error);
//   })
// }

// var querieURLs = Object.keys(metricsURLs);
// function updateQueries(){
//   for(var querieURL of querieURLs){
//     obtainDataURL(querieURL);
//   }
// }

// function updateTable2(){
//   $.getJSON(urlGIS, function(dataOriginal){
//     console.log(dataOriginal.data[1][10]);
//     console.log(dataOriginal.data[1][dataOriginal.data[1].length-1]);
//   })
// }

// $(document).ready(function(){
//   $("#getDataButton").on("click", updateQueries);
// })

//   $.getJSON(urlGIS, function(dataOriginal){
//     for (var i = 0; i < dataOriginal.data.length; i++) {
//       var coord = dataOriginal.data[i][9];
//       //console.log(fixCoord(coord));
//       //addMarker(fixCoord(coord));
//     }
//   });
//
// }
//
// function fixCoord(coord, i){
//     coord = "{lat:"+coord.slice(7,coord.length-1)+"}"
//     var coordF = coord.replace(" ",",lng:");
//     return coordF;
// }