function myMap() {
    myCenter=new google.maps.LatLng(33.9617, -118.3531);
    var mapOptions= {
      center:myCenter,
      zoom:12, scrollwheel: false, draggable: false,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);
  
    var marker = new google.maps.Marker({
      position: myCenter,
    });
    marker.setMap(map);
  }
  
  // Used to toggle the menu on small screens when clicking on the menu button
  function toggleFunction() {
      var x = document.getElementById("navOnSmall");
      if (x.className.indexOf("onSmallLinks") == -1) {
          x.className += " onSmallLinks";
      } else {
          x.className = x.className.replace(" onSmallLinks", "");
      }
  }
  function toggleOff() {
    var x = document.getElementById("navOnSmall");
    if(x.className.indexOf("onSmallLinks") > 0) {
      x.className = x.className.replace("onSmallLinks", "");
    }
  }
  
  
  
  myMap();