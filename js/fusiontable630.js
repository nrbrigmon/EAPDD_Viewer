
  var where = "";
  //****This section is declaring the table IDs ***//
  var boundaryTable = "1qRvxdz39EShuruJy3YXqF3BbfXLZYaNd4D9-1UVb";
  //CRIME
  var fireTable = "18be1mKs33mrqnayTnVqjqqtXJdpPswWX8DEoaI0D";
  var policeTable = "1_rG77iqslLY2AebdLOWeEubA3tnfM05REHR2_k0v";
  //DEMOGRAPHICS
  var censusTable = "1L-KESccU0d6a6FYZpX8GuMcGHPgrrYHca7HnHDr9"; //POPULATION / EDUCATION / INCOME table id
  var blockGroupTable = "1dgI_iSc6km2H64cH6vzwjnvSMA08-cUpsHLUktVy";
  var blocksTable = "1Nm-Wi72eDqw0CED0ylwizPiQ0y93V3hLOj374Q7-";
  var tractsTable = "1bnU9uy9rwn57zL_aJRITg1L4SRErCuEyNydtIlZ6";
  var zctasTable = "1IHiq6ZbUOIcEJDTcnGBSeY7MTDWEl-R_bEhpFmvj";
  //EDUCATION
  var schoolsTable = "1qFlaLhdDyboBG0_X6n2aVG-ELpVC24lsUpjpKxE9";
  //ENV HEALTH
  var brownfieldsTable = "1hqvmp5p7p79W9vRGJN0P3Nvba9mDKmHNHrP9_b2A";
  var criticalHabitatTable = "1wf1mUWaQPBq538Ys10HG1TXKWImFmz5US3zwBFu-";
  var sensitiveStreamsTable = "1Y7ZxPVLXEYHnUMbazO9nxPRcd8H_j6U6grCGsm0H";
  var statsSoilsTable = "1Hkl4nXjdG_OG6Ky0e_DVdCMq9CDyfE7ivJ2jREqx";
  var mgmtDistrictsTable = "1OCsPa-OjJ6wayr8j7ZuO_uPAMAao4iC3gGy15Knw";
  //INFRA DEV
  var emergingProjectTable = "102ZcPuAx3XQ8EZhXxjz9TU8VJxiNYB6VVSJkA0LN"; 
  var airportTable = "1EAHy46KB9AQkF7-eKUCANVFKhK41k5B8GZLLn_tE"; 
  var railStopTable = "1W1EdiG-H7l2m9xFBWNjhVMTZ2O2dlQTrdchGriLG"; 
  var interstateTable = "13qL8GPdUQgdNeP22QJ_uW_-hc02Ln9wzXjsMEAay"; 
  var portsTable = "1Pd7dPI5yDp2oxfGswIJMqJMKVSJUw5ATGqYmSPHZ"; 
  var railRoadTable = "1_Pru4FnxfcxBQGYqcUBtp8Gx3CuypZtvAjiuSvCw"; 
  //LU PLANNING
  var tazsTable = "1avBwYMT3gPVf-xd_s0a_uySayPcdkpoK_Wpld8lY";
  var countiesTable = "16mOieypquzOAotwxY06wZtDdNU3eTVd9fR59LTWi";
  var schoolDistrictsTable = "1z32mA1xZtcKk9k-8lz3lAcsmx-Yxu3L5qP4ExlE5";
  var cityLimitsTable = "1J0xwcoFPYjSIeWIWCiH3i66RQHf4dx1agE47hTy6";
  //PARKS AND REC
  var wetlandsTable = "18l5s_ipzrymIWNan-dc9vODOdAFpk6cfiwITeMht";
  var allStreamsTable = "1LOdz4vpHNc7vTgxwkJ7_aNRYG3TqtyOOuMBSJ4sp";
  var aquiferTable = "1BuHzMZK1zm65Y5Ya4foIN5GiXcKWEScOPsV95_QW";
  var parkLandTable = "16-AuqR9e7vGoHEvGhHR5pk2fdxBC9xEP74WMs5x_";
	
  
  //****This section is declaring the layers ready to visualize ***//
  var layerArray = [];
  var map;
  var EAPDDCentroid = new google.maps.LatLng(35.25072766487885, -90.49282873828129);
  function initialize() {
    
    var defaultZoom = 8;
    var geocoder = new google.maps.Geocoder();
    google.maps.visualRefresh = true;

    var isMobile = (navigator.userAgent.toLowerCase().indexOf('android') > -1) ||
      (navigator.userAgent.match(/(iPod|iPhone|iPad|BlackBerry|Windows Phone|iemobile)/));
    
    var mapDiv = document.getElementById('googft-mapCanvas');
    mapDiv.style.width = isMobile ? '50%' : '925px';
    mapDiv.style.height = isMobile ? '50%' : '600px';
    map = new google.maps.Map(mapDiv, {
      center: EAPDDCentroid,
      zoom: defaultZoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    layer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: boundaryTable,
        where: ""
      },
      options: {
        styleId: 3,
        templateId: 3
      }
    });
	layer.setMap(map);
      var zoomToAddress = function() {
          var address = document.getElementById('address').value;
          geocoder.geocode({
            address: address
          }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              map.setCenter(results[0].geometry.location);
              map.setZoom(11);

              // OPTIONAL: run spatial query to find results within bounds.
              // var sw = map.getBounds().getSouthWest();
              // var ne = map.getBounds().getNorthEast();
              // var where = 'ST_INTERSECTS(' + locationColumn +
              //     ', RECTANGLE(LATLNG' + sw + ', LATLNG' + ne + '))';
              // layer.setOptions({
              //   query: {
              //     select: locationColumn,
              //     from: tableId,
              //     where: where
              //   }
              // });
            } else {
              window.alert('Address could not be located: ' + status);
            }
          });
        };

//need to switch to key up later..
    google.maps.event.addDomListener(document.getElementById('search'),
            'click', zoomToAddress);
    google.maps.event.addDomListener(window, 'keypress', function(e) {
          if (e.keyCode == 13) {
            zoomToAddress();
          }
        });
    google.maps.event.addDomListener(document.getElementById('reset'),
            'click', function() {
              map.setCenter(EAPDDCentroid);
              map.setZoom(defaultZoom);
              // layer.setOptions({
              //   query: {
              //     select: locationColumn,
              //     from: tableId
              //   }
              // });
    });
    
}
function maxCheckboxes(){
	var checkboxes = document.getElementsByTagName('input');
	var numSelected = 0;
	var current;

	for (var i=checkboxes.length;i--;) {
		current = checkboxes[i];

		if (current.type.toLowerCase() == "checkbox" && current.checked) {
			current++;
			console.log(current);

		};
	};
	if (current > 5) {
		alert("You've got " + current + " selected! :(");
	}
}
	/* layer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: tabledID,
        where: ""
      },
      options: {
        styleId: 3,
        templateId: 3
      }
    }); */


//**Toggle Function for the checkbox**///
  function ToggleLayer(tableSelection){
		maxCheckboxes();
		 if (tableSelection == "CB_Fire")
		{
		  if (document.getElementById("FireCheckbox").checked == true)
		  {
			if (layer3.getMap() == null) {layer3.setMap(map);}
		  }
		  if (document.getElementById("FireCheckbox").checked == false) {layer3.setMap(null);}
		}
		
		if (tableSelection == "CB_Police")
		{
		  if (document.getElementById("PoliceCheckbox").checked == true)
		  {
			if (layer2.getMap() == null) {layer2.setMap(map); }
		  }
		  if (document.getElementById("PoliceCheckbox").checked == false) {layer2.setMap(null);}
		}
		
	}

  //COUNTY CENTROIDS
  var clayCentroid = new google.maps.LatLng(36.3496385,-90.4346745);
  var craigheadCentroid = new google.maps.LatLng(35.8481639,-90.661836);
  var crittendenCentroid  = new google.maps.LatLng(35.1373664,-90.2884164);
  var crossCentroid = new google.maps.LatLng(35.2965394,-90.7724196);
  var greeneCentroid = new google.maps.LatLng(36.11635,-90.5250738);
  var lawrenceCentroid = new google.maps.LatLng(36.0693844,-91.0523505);
  var leeCentroid = new google.maps.LatLng(34.7714201,-90.755243);
  var mississippiCentroid = new google.maps.LatLng(35.6952102,-89.9679089);
  var phillipsCentroid = new google.maps.LatLng(34.528277,-90.586122);
  var poinsettCentroid = new google.maps.LatLng(35.5735647,-90.6628149);
  var randolphCentroid = new google.maps.LatLng(36.3067456,-91.07791);
  var stfrancisCentroid = new google.maps.LatLng(35.0080211,-90.7765263);

  //If value from dropdown menu equals given value, sets map cetroid and zoom to correct county
  function countyZoom(value){
    if (value == "clay"){ map.setCenter(clayCentroid); map.setZoom(10);}
    if (value === "craighead"){ map.setCenter(craigheadCentroid); map.setZoom(10);}
    if (value === "crittenden"){ map.setCenter(crittendenCentroid); map.setZoom(10);}
    if (value === "cross"){ map.setCenter(crossCentroid); map.setZoom(10);}
    if (value === "greene"){ map.setCenter(greeneCentroid); map.setZoom(10);}
    if (value === "lawrence"){ map.setCenter(lawrenceCentroid); map.setZoom(10);}
    if (value === "lee"){ map.setCenter(leeCentroid); map.setZoom(10);}
    if (value === "mississippi"){ map.setCenter(mississippiCentroid); map.setZoom(10);}
    if (value === "phillips"){ map.setCenter(phillipsCentroid); map.setZoom(10);}
    if (value === "poinsett"){ map.setCenter(poinsettCentroid); map.setZoom(10);}
    if (value === "randolph"){ map.setCenter(randolphCentroid); map.setZoom(10);}
    if (value === "stfrancis"){ map.setCenter(stfrancisCentroid); map.setZoom(10);}

  }
  google.maps.event.addDomListener(window, 'load', initialize);
  
  
  
  
  
  
  
  
  
  
  