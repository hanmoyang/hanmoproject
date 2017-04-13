
var map = L.map('mapContainer').setView([40.745653, -73.989614], 12);
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
}).addTo(map);

    var universities=L.geoJson(universities,{
      style:function(feature){
        
        var customColor;

        if(feature.properties.value == 1){
          customColor="orange";
        }

        if(feature.properties.value == 2){
          customColor="blue";
        }

        if(feature.properties.value == 3){
          customColor="purple";
        }    

        if(feature.properties.value == 4){
          customColor="yellow";  
        }    

        return {
          color:customColor,
          fillColor:customColor,
          weight:2,
        };
      },
       onEachFeature: function (feature, layer) {
        layer.on('click', function() {

          var string = '<h2>'
          +feature.properties.name
          +'</h2><h5>'
          +feature.properties.intro
          +'</h5>';

          $('#sidebar h2').html(string)
        })
      },     
    }).addTo(map);

    var museumMarker = {
        radius: 8,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };

    var galleryMarker = {
        radius: 8,
        fillColor: "red",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };

      var museums=L.geoJson(museums,{
        pointToLayer: function (feature, latlng) {
         var geojsonMarkerOptions = {
            radius: 5,
            fillColor: "deepskyblue",
            color: "white",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8,
            z: 1
        };
        return L.circleMarker(latlng, geojsonMarkerOptions);
      },
            
       onEachFeature: function (feature, layer) {
          
          var string = '<h4>'
          +feature.properties.NAME
          +'</h4><h6>'
          +feature.properties.TEL
          +'</h6>';

          layer.bindPopup(string);
        },     

        }).addTo(map);

      var galleries=L.geoJson(galleries,{
        pointToLayer: function (feature, latlng) {
         var geojsonMarkerOptions = {
            radius: 5,
            fillColor: "red",
            color: "white",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8,
            z: 1
        };
        return L.circleMarker(latlng, geojsonMarkerOptions);
      },

       onEachFeature: function (feature, layer) {
          
          var string = '<h4>'
          +feature.properties.NAME
          +'</h4><h6>'
          +feature.properties.TEL
          +'</br>Address:'+feature.properties.ADDRESS1+','
          +feature.properties.CITY+','
          +feature.properties.ZIP
          +'</br>'+feature.properties.URL                              
          +'</h6>';

          layer.bindPopup(string);
          layer.on('mouseover', function() { layer.openPopup(); });
          layer.on('mouseout', function() { layer.closePopup(); });
        },   

      }).addTo(map);


    var museumsLayerGroup= L.layerGroup([museums]);
    var galleriesLayerGroup = L.layerGroup([galleries]);
    var universitiesLayerGroup = L.layerGroup([universities]);

        
     museumsLayerGroup.addTo(map);
     galleriesLayerGroup.addTo(map);
     
     var overlays = {
      "Universities":universities
     }

     var types = {
       "Museums": museumsLayerGroup,
       "Galleries": galleriesLayerGroup,
     }


     L.control.layers(types,overlays, {
      collapsed: false,
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

    var museuminfo = L.geoJson(museums, {
      opacity: 0,
      fillOpacity: 0
    }).bindPopup(function (layer) {
        return (' Museum Name: ' + layer.feature.properties.NAME +
            '</br> Tel: ' + layer.feature.properties.TEL+
            '</br> Address: ' + layer.feature.properties.ADDRESS1  +
            '</br> City: ' + layer.feature.properties.CITY);
    }).addTo(map);
   