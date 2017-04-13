
var map = L.map('mapContainer').setView([40.745653, -73.989614], 12);
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
}).addTo(map);

  var museums=L.geoJson(museums, {
    onEachFeature: function (feature, layer) {
      layer.on('click', function() {

        var string ='<h2>'
        +feature.properties.NAME
        +'<h2></div>'
        +feature.properties.URL
        +feature.properties.ADDRESS1
        +feature.properties.CITY
        +feature.properties.TEL
        +feature.properties.ZIP
        +'<div>';

        $('#sidebar h2').html(string)
      })
  },
  pointTolayer:function(feature,latLng){
    return L.marker(latLng,{icon:greenIcon}).addTo(map);
  }
  }).addTo(map);

  var galleries=L.geoJson(galleries, {
      onEachFeature: function (feature, layer) {
        layer.on('click', function() {

          var string ='<h2>'
          +feature.properties.NAME
          +'<h2></div>'
          +feature.properties.URL
          +feature.properties.ADDRESS1
          +feature.properties.CITY
          +feature.properties.TEL
          +feature.properties.ZIP
          +'<div>';

          $('#sidebar h2').html(string)
        })
      },
      pointTolayer:function(feature,latLng){
      return L.marker(latLng,{icon:greenIcon}).addTo(map);
    }
    }).addTo(map);


  var museumsLayerGroup= L.layerGroup([museums]);
  var galleriesLayerGroup = L.layerGroup([galleries]);

    
   museumsLayerGroup.addTo(map);
   galleriesLayerGroup.addTo(map);

   var types = {
     "Museums": museumsLayerGroup,
     "Galleries": galleriesLayerGroup,
   }

   L.control.layers(null, types, {
    collapsed: false
   }).addTo(map);

  $('.a').on('click',function(){
    map.flyTo([40.861992, -73.885656],15)
  });

  $('.b').on('click',function(){
    map.flyTo([40.807934, -73.962359],13)
  });


  $('.d').on('click',function(){
    map.flyTo([40.739055, -73.982216],15)
  });

  $('.e').on('click',function(){
    map.flyTo([40.729456, -73.996321],15)
  });

  $('.reset').on('click',function(){
    map.flyTo([40.735021, -73.994787], 11)
  });
