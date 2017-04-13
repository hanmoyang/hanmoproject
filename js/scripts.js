
var map = L.map('mapContainer').setView([40.745653, -73.989614], 12);
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
}).addTo(map);

L.geoJson(universities,{
  style:function(feature){
    var customColor;

    if(feature.properties.value == 1){
      customColor="orange"
    }

    if(feature.properties.value == 2){
      customColor="blue"
    }

    if(feature.properties.value == 3){
      customColor="purple"
    }    

    if(feature.properties.value == 4){
      customColor="yellow"  
    }    

    return {
      color:customColor,
      fillColor:customColor,
      weight:2,
    };
  }
}).addTo(map);

  var museumIcon = L.icon({
    iconUrl: 'museumicon.png'
  });

  var galleryIcon = L.icon({
    iconUrl:'galleryicon.png'
  })


  var museums=L.geoJson(museums, {
    onEachFeature: function (feature, layer) {
      layer.on('click', function() {

        $('#sidebar h2').text(feature.properties.name)
      })
    },

    pointTolayer:function(feature,latLng){
     return L.marker(latLng,{icon:museumIcon}).addTo(map);
    }
  }).addTo(map);

  var galleries=L.geoJson(galleries, {
      onEachFeature: function (feature, layer) {
        layer.on('click', function() {

        $('#sidebar h2').text(feature.properties.name)
        })
      },
      pointTolayer:function(feature,latLng){
      return L.marker(latLng,{icon:galleryIcon}).addTo(map);
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
    map.flyTo([40.861992, -73.885656],13)
  });

  $('.b').on('click',function(){
    map.flyTo([40.807934, -73.962359],13)
  });

  $('.c').on('click',function(){
    map.flyTo([40.729196, -73.996000],13)
  });

  $('.d').on('click',function(){
    map.flyTo([40.735463, -73.994614],15)
  });

  $('.reset').on('click',function(){
    map.flyTo([40.735021, -73.994787], 11)
  });
