
  var where = "";
  //****This section is declaring the table IDs ***//
  var boundaryTable = "1qRvxdz39EShuruJy3YXqF3BbfXLZYaNd4D9-1UVb";
  //CRIME
  var fireTable = "18be1mKs33mrqnayTnVqjqqtXJdpPswWX8DEoaI0D";
  var policeTable = "1_rG77iqslLY2AebdLOWeEubA3tnfM05REHR2_k0v";
  //DEMOGRAPHICS
  var blockGroupTable = "1dgI_iSc6km2H64cH6vzwjnvSMA08-cUpsHLUktVy";
  var blocksTable = "1Nm-Wi72eDqw0CED0ylwizPiQ0y93V3hLOj374Q7-";
  var tractsTable = "1bnU9uy9rwn57zL_aJRITg1L4SRErCuEyNydtIlZ6";
  var zctasTable = "1IHiq6ZbUOIcEJDTcnGBSeY7MTDWEl-R_bEhpFmvj";
  //EDUCATION
  var schoolsTable = "1qFlaLhdDyboBG0_X6n2aVG-ELpVC24lsUpjpKxE9";
  var higherEdTable = "1Q98D88ABUIOlTyc1EpWEmuxbx9VZ5QbIvza3FKGx";
  //ENV HEALTH
  var brownfieldsTable = "1hqvmp5p7p79W9vRGJN0P3Nvba9mDKmHNHrP9_b2A";
  var criticalHabitatTable = "1wf1mUWaQPBq538Ys10HG1TXKWImFmz5US3zwBFu-";
  var sensitiveStreamsTable = "1Y7ZxPVLXEYHnUMbazO9nxPRcd8H_j6U6grCGsm0H";
  var statsSoilsTable = "1Hkl4nXjdG_OG6Ky0e_DVdCMq9CDyfE7ivJ2jREqx";
  var mgmtDistrictsTable = "1OCsPa-OjJ6wayr8j7ZuO_uPAMAao4iC3gGy15Knw";
  //INFRA DEV
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
//Business Development
  var smallBizTable = "1e1LMrXDJuUce1K9XYtpxBIbIkqnBe5Qr-552bFWK";

  
  //****This section is declaring the layers ready to visualize ***//
  var map;
  var tableTitles = [];
  var EAPDDCentroid = new google.maps.LatLng(35.25072766487885, -90.49282873828129);
  var layer1 = new google.maps.FusionTablesLayer();
  var layer2 = new google.maps.FusionTablesLayer();
  var layer3 = new google.maps.FusionTablesLayer();
  var layer4 = new google.maps.FusionTablesLayer();
  var layer5 = new google.maps.FusionTablesLayer();
  google.load('visualization', '1', {packages:['table']});
  
  function initialize() {
    
    var defaultZoom = 8;
    var geocoder = new google.maps.Geocoder();
    google.maps.visualRefresh = true;

 
    
    var mapDiv = document.getElementById('googft-mapCanvas');
    mapDiv.style.width = '90%';
    mapDiv.style.height = '600px';
    map = new google.maps.Map(mapDiv, {
      center: EAPDDCentroid,
      zoom: defaultZoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

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
      addLegend(map);

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

//**Toggle Function for the checkbox**///
  function ToggleLayer(tableSelection){
      var legendWrapper = document.getElementById("legendWrapper");
      updateLegend(legendWrapper);
      updateMapLayers();
  }

  function addLegend(map) {
      var legendWrapper = document.createElement('div');
      var legend = document.createElement('div');
      legendWrapper.id = 'legendWrapper';
      legendWrapper.index = 1;
      legendWrapper.appendChild(legend);
      map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
          legendWrapper);
      legendContent(legendWrapper);
      
      $("#tableResults1").hide();
      $("#tableResults2").hide();
      $("#tableResults3").hide();
      $("#tableResults4").hide();
      $("#tableResults5").hide();
      $("p#noTable").show();
  }

  // Generate the content for the legend
  function updateLegend(){
      var legendWrapper = document.getElementById('legendWrapper');
      var legend = document.getElementById('legend');
      legendWrapper.removeChild(legend);
      legendContent(legendWrapper);
  }

  function legendContent(legendWrapper){
      var legend = document.createElement('div');
      legend.id = 'legend';
	   
      
      var layerList = [];
      tableTitles = [];
	    layerList.push("<h4>Visible Map Layers</h4>");
	  
  		if (document.getElementById("FireCheckbox").checked == true)     	     {
  				layerList.push("<p>Fire Stations</p>"); 
          tableTitles.push("<h4 class='tableTitles'>Fire Stations</h4>");       					}
  		if (document.getElementById("PoliceCheckbox").checked == true)           {
  				layerList.push("<p>Law Enforcement Locations</p>"); 
          tableTitles.push("<h4 class='tableTitles'>Law Enforcement Locations</h4>");             }
  		
  		if (document.getElementById("CensusBlocksCheckbox").checked == true)     {
  				layerList.push("<p>US Census Blocks</p>");
          tableTitles.push("<h4 class='tableTitles'>US Census Blocks</h4>");          			     }
  		if (document.getElementById("CensusBlockGroupsCheckbox").checked == true){
  				layerList.push("<p>US Census Block Groups</p>");
          tableTitles.push("<h4 class='tableTitles'>US Census Block Groups</h4>");          		 }
  		if (document.getElementById("CensusTractsCheckbox").checked == true)     {
  				layerList.push("<p>US Census Tracts</p>");
          tableTitles.push("<h4 class='tableTitles'>US Census Tracts</h4>");           			 }
  		if (document.getElementById("CensusZCTAsCheckbox").checked == true)      {
  				layerList.push("<p>US Census ZCTAs</p>");
          tableTitles.push("<h4 class='tableTitles'>US Census ZCTAs</h4>");         			     }

  				
  		if (document.getElementById("PublicSchoolsCheckbox").checked == true)    {
  				layerList.push("<p>Public School Locations</p>");
          tableTitles.push("<h4 class='tableTitles'>Public School Locations</h4>");          		 }	
  		if (document.getElementById("HigherEdCheckbox").checked == true)         {
  				layerList.push("<p>Places of Higher Education</p>");
          tableTitles.push("<h4 class='tableTitles'>Places of Higher Education</h4>");             }	
  				
  		if (document.getElementById("BrownfieldsCheckbox").checked == true)        {
  				layerList.push("<p>Brownfield Locations</p>");
          tableTitles.push("<h4 class='tableTitles'>Brownfield Locations</h4>");              }	
  		if (document.getElementById("FWS_HabitatCheckbox").checked == true)        {
  				layerList.push("<p>Critical Habitats</p>");
          tableTitles.push("<h4 class='tableTitles'>Critical Habitats</h4>");              }	
  		if (document.getElementById("EcoStreamsCheckbox").checked == true)        {
  				layerList.push("<p>Eco-Sensitive Streams</p>");
          tableTitles.push("<h4 class='tableTitles'>Eco-Sensitive Streams</h4>");              }	
  		if (document.getElementById("STATSGOSoilsCheckbox").checked == true)        {
  				layerList.push("<p>STATSGO Soils Layer</p>");
          tableTitles.push("<h4 class='tableTitles'>STATSGO Soils Layer</h4>");              }	
  		if (document.getElementById("WildlifeMgmtCheckbox").checked == true)        {
  				layerList.push("<p>Wildlife Management Districts</p>");
          tableTitles.push("<h4 class='tableTitles'>Wildlife Management Districts</h4>");              }
  				
  		if (document.getElementById("AirportsCheckbox").checked == true)        {
  				layerList.push("<p>Airport Locations</p>");
          tableTitles.push("<h4 class='tableTitles'>Airport Locations</h4>");              }	
  		if (document.getElementById("RailStopCheckbox").checked == true)        {
  				layerList.push("<p>Passenger Rail Stations</p>");
          tableTitles.push("<h4 class='tableTitles'>Passenger Rail Stations</h4>");              }	
  		if (document.getElementById("InterstateCheckbox").checked == true)        {
  				layerList.push("<p>Interstate System</p>");
          tableTitles.push("<h4 class='tableTitles'>Interstate System</h4>");              }
  		if (document.getElementById("PortsCheckbox").checked == true)        {
  				layerList.push("<p>Port Locations</p>");
          tableTitles.push("<h4 class='tableTitles'>Port Locations</h4>");              }	
  		if (document.getElementById("RailroadsCheckbox").checked == true)        {
  				layerList.push("<p>Rail-road System</p>");
          tableTitles.push("<h4 class='tableTitles'>Rail-road System</h4>");              }
  				
  		if (document.getElementById("CityLimitsCheckbox").checked == true)        {
  				layerList.push("<p>City Limits</p>");
          tableTitles.push("<h4 class='tableTitles'>City Limits</h4>");              }	
  		if (document.getElementById("SchoolDistrictsCheckbox").checked == true)        {
  				layerList.push("<p>School Districts</p>");
          tableTitles.push("<h4 class='tableTitles'>School Districts</h4>");              }		
  		if (document.getElementById("CensusCountiesCheckbox").checked == true)        {
  				layerList.push("<p>EAPDD Counties</p>");
          tableTitles.push("<h4 class='tableTitles'>EAPDD Counties</h4>");              }	
  		if (document.getElementById("CensusTAZsCheckbox").checked == true)        {
  				layerList.push("<p>Traffic Analysis Zones</p>");
          tableTitles.push("<h4 class='tableTitles'>Traffic Analysis Zones</h4>");              }		
  		if (document.getElementById("BoundaryCheckbox").checked == true)        {
  				layerList.push("<p>EAPDD Boundary</p>");
          tableTitles.push("<h4 class='tableTitles'>EAPDD Boundary</h4>");              }	
  				
  		if (document.getElementById("ParkLandsCheckbox").checked == true)        {
  				layerList.push("<p>Parks and Public Land</p>");
          tableTitles.push("<h4 class='tableTitles'>Parks and Public Land</h4>");              }	
  		if (document.getElementById("RiversStreamsCheckbox").checked == true)        {
  				layerList.push("<p>Rivers and Streams</p>");
          tableTitles.push("<h4 class='tableTitles'>Rivers and Streams</h4>");              }	
  		if (document.getElementById("AquifersCheckbox").checked == true)        {
  				layerList.push("<p>Aquifers</p>");
          tableTitles.push("<h4 class='tableTitles'>Aquifers</h4>");              }	
  		if (document.getElementById("WetlandsCheckbox").checked == true)        {
  				layerList.push("<p>Wetlands</p>");
          tableTitles.push("<h4 class='tableTitles'>Wetlands</h4>");              }		
  		
  		if (document.getElementById("SmallBizCheckbox").checked == true)        {
  				layerList.push("<p>Businesses - Manufacturing</p>");
          tableTitles.push("<h4 class='tableTitles'>Businesses - Manufacturing</h4>");              }			
        legend.innerHTML = layerList.join('');
        legendWrapper.appendChild(legend);
  }


  function updateMapLayers(){
      if ($('input[type="checkbox"]:checked').length > 5) {
          alert("This viewer can only view 5 layers at a time. Please select 5 layers or less. Sorry!");

      }
      else 
      {
          initialize();
          var tableSelection = [];
          var tableArray = [];
          $('input[type="checkbox"]:checked').each(function (index, elem) {
              tableSelection.push($(elem).val());
              
          });

          for (i = 0; i < tableSelection.length; i++) {
              if (tableSelection[i] == "fireTable") {
                  tableArray.push(fireTable);
              }
              if (tableSelection[i] == "policeTable") {
                  tableArray.push(policeTable);
              }

              if (tableSelection[i] == "blockGroupTable") {
                  tableArray.push(blockGroupTable);
              }
              if (tableSelection[i] == "blocksTable") {
                  tableArray.push(blocksTable);
              }
              if (tableSelection[i] == "tractsTable") {
                  tableArray.push(tractsTable);
              }
              if (tableSelection[i] == "zctasTable") {
                  tableArray.push(zctasTable);
              }

              if (tableSelection[i] == "schoolsTable") {
                  tableArray.push(schoolsTable);
              }
              if (tableSelection[i] == "higherEdTable") {
                  tableArray.push(higherEdTable);
              }

              if (tableSelection[i] == "brownfieldsTable") {
                  tableArray.push(brownfieldsTable);
              }
              if (tableSelection[i] == "criticalHabitatTable") {
                  tableArray.push(criticalHabitatTable);
              }
              if (tableSelection[i] == "sensitiveStreamsTable") {
                  tableArray.push(sensitiveStreamsTable);
              }
              if (tableSelection[i] == "statsSoilsTable") {
                  tableArray.push(statsSoilsTable);
              }
              if (tableSelection[i] == "mgmtDistrictsTable") {
                  tableArray.push(mgmtDistrictsTable);
              }


              if (tableSelection[i] == "airportTable") {
                  tableArray.push(airportTable);
              }
              if (tableSelection[i] == "railStopTable") {
                  tableArray.push(railStopTable);
              }
              if (tableSelection[i] == "interstateTable") {
                  tableArray.push(interstateTable);
              }
              if (tableSelection[i] == "portsTable") {
                  tableArray.push(portsTable);
              }
              if (tableSelection[i] == "railRoadTable") {
                  tableArray.push(railRoadTable);
              }

              if (tableSelection[i] == "tazsTable") {
                  tableArray.push(tazsTable);
              }
              if (tableSelection[i] == "countiesTable") {
                  tableArray.push(countiesTable);
              }
              if (tableSelection[i] == "schoolDistrictsTable") {
                  tableArray.push(schoolDistrictsTable);
              }
              if (tableSelection[i] == "cityLimitsTable") {
                  tableArray.push(cityLimitsTable);
              }
              if (tableSelection[i] == "boundaryTable") {
                  tableArray.push(boundaryTable);
              }

              if (tableSelection[i] == "wetlandsTable") {
                  tableArray.push(wetlandsTable);
              }
              if (tableSelection[i] == "allStreamsTable") {
                  tableArray.push(allStreamsTable);
              }
              if (tableSelection[i] == "aquiferTable") {
                  tableArray.push(aquiferTable);
              }
              if (tableSelection[i] == "parkLandTable") {
                  tableArray.push(parkLandTable);
              }

              if (tableSelection[i] == "smallBizTable") {
                  tableArray.push(smallBizTable);
              }
          }
        }
        tableViewer(tableArray);

          if (tableSelection.length == 1){
              
              layer1 = new google.maps.FusionTablesLayer({
                  map: map,
                  heatmap: { enabled: false },
                  query: {
                      select: "col2",
                      from: tableArray[0],
                      where: ""
                  },
                  options: {
                      styleId: 2,
                      templateId: 2
                  }
              });

              layer1.setMap(map);
              layer2.setMap(null);
              layer3.setMap(null);
              layer4.setMap(null);
              layer5.setMap(null);
           }
          if (tableSelection.length == 2){
              
              layer1 =  new google.maps.FusionTablesLayer({
                  map: map,
                  heatmap: { enabled: false },
                  query: {
                      select: "col2",
                      from: tableArray[0],
                      where: ""
                  },
                  options: {
                      styleId: 2,
                      templateId: 2
                  }
              })

              layer2 =  new google.maps.FusionTablesLayer({
                  map: map,
                  heatmap: { enabled: false },
                  query: {
                      select: "col2",
                      from: tableArray[1],
                      where: ""
                  },
                  options: {
                      styleId: 2,
                      templateId: 2
                  }
              });

              layer1.setMap(map);
              layer2.setMap(map);
              layer3.setMap(null);
              layer4.setMap(null);
              layer5.setMap(null);
          }
          if (tableSelection.length == 3){
              layer1 =  new google.maps.FusionTablesLayer({
                  map: map,
                  heatmap: { enabled: false },
                  query: {
                      select: "col2",
                      from: tableArray[0],
                      where: ""
                  },
                  options: {
                      styleId: 2,
                      templateId: 2
                  }
              })

              layer2 =  new google.maps.FusionTablesLayer({
                  map: map,
                  heatmap: { enabled: false },
                  query: {
                      select: "col2",
                      from: tableArray[1],
                      where: ""
                  },
                  options: {
                      styleId: 2,
                      templateId: 2
                  }
              });
              layer3 =  new google.maps.FusionTablesLayer({
                  map: map,
                  heatmap: { enabled: false },
                  query: {
                      select: "col2",
                      from: tableArray[2],
                      where: ""
                  },
                  options: {
                      styleId: 2,
                      templateId: 2
                  }
              });
              layer1.setMap(map);
              layer2.setMap(map);
              layer3.setMap(map);
              layer4.setMap(null);
              layer5.setMap(null);
          }
      if (tableSelection.length == 4){
          layer1 =  new google.maps.FusionTablesLayer({
              map: map,
              heatmap: { enabled: false },
              query: {
                  select: "col2",
                  from: tableArray[0],
                  where: ""
              },
              options: {
                  styleId: 2,
                  templateId: 2
              }
          })

          layer2 =  new google.maps.FusionTablesLayer({
              map: map,
              heatmap: { enabled: false },
              query: {
                  select: "col2",
                  from: tableArray[1],
                  where: ""
              },
              options: {
                  styleId: 2,
                  templateId: 2
              }
          });
          layer3 =  new google.maps.FusionTablesLayer({
              map: map,
              heatmap: { enabled: false },
              query: {
                  select: "col2",
                  from: tableArray[2],
                  where: ""
              },
              options: {
                  styleId: 2,
                  templateId: 2
              }
          });
          layer4 =  new google.maps.FusionTablesLayer({
              map: map,
              heatmap: { enabled: false },
              query: {
                  select: "col2",
                  from: tableArray[3],
                  where: ""
              },
              options: {
                  styleId: 2,
                  templateId: 2
              }
          });
          layer1.setMap(map);
          layer2.setMap(map);
          layer3.setMap(map);
          layer4.setMap(map);
          layer5.setMap(null);
      }
      if (tableSelection.length == 5){
          layer1 =  new google.maps.FusionTablesLayer({
              map: map,
              heatmap: { enabled: false },
              query: {
                  select: "col2",
                  from: tableArray[0],
                  where: ""
              },
              options: {
                  styleId: 2,
                  templateId: 2
              }
          })

          layer2 =  new google.maps.FusionTablesLayer({
              map: map,
              heatmap: { enabled: false },
              query: {
                  select: "col2",
                  from: tableArray[1],
                  where: ""
              },
              options: {
                  styleId: 2,
                  templateId: 2
              }
          });
          layer3 =  new google.maps.FusionTablesLayer({
              map: map,
              heatmap: { enabled: false },
              query: {
                  select: "col2",
                  from: tableArray[2],
                  where: ""
              },
              options: {
                  styleId: 2,
                  templateId: 2
              }
          });
          layer4 =  new google.maps.FusionTablesLayer({
              map: map,
              heatmap: { enabled: false },
              query: {
                  select: "col2",
                  from: tableArray[3],
                  where: ""
              },
              options: {
                  styleId: 2,
                  templateId: 2
              }
          });
          layer5 =  new google.maps.FusionTablesLayer({
              map: map,
              heatmap: { enabled: false },
              query: {
                  select: "col2",
                  from: tableArray[4],
                  where: ""
              },
              options: {
                  styleId: 2,
                  templateId: 2
              }
          });
          layer1.setMap(map);
          layer2.setMap(map);
          layer3.setMap(map);
          layer4.setMap(map);
          layer5.setMap(map);
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
    if (value === "clay"){ map.setCenter(clayCentroid); map.setZoom(10);}
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
  
  
  
  
  
  
  
  
  
  
  