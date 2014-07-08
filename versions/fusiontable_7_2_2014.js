  var type = 'Projects';
  var where = "";
	boundaryTable = "1qRvxdz39EShuruJy3YXqF3BbfXLZYaNd4D9-1UVb";
  //CRIME
	fireTable = "18be1mKs33mrqnayTnVqjqqtXJdpPswWX8DEoaI0D";
	policeTable = "1_rG77iqslLY2AebdLOWeEubA3tnfM05REHR2_k0v";
  //DEMOGRAPHICS
    censusTable = "1L-KESccU0d6a6FYZpX8GuMcGHPgrrYHca7HnHDr9"; //POPULATION / EDUCATION / INCOME table id
	blockGroupTable = "1dgI_iSc6km2H64cH6vzwjnvSMA08-cUpsHLUktVy";
	blocksTable = "1Nm-Wi72eDqw0CED0ylwizPiQ0y93V3hLOj374Q7-";
	tractsTable = "1bnU9uy9rwn57zL_aJRITg1L4SRErCuEyNydtIlZ6";
	zctasTable = "1IHiq6ZbUOIcEJDTcnGBSeY7MTDWEl-R_bEhpFmvj";
  //EDUCATION
	schoolsTable = "1qFlaLhdDyboBG0_X6n2aVG-ELpVC24lsUpjpKxE9";
  //ENV HEALTH
	brownfieldsTable = "1hqvmp5p7p79W9vRGJN0P3Nvba9mDKmHNHrP9_b2A";
	criticalHabitatTable = "1wf1mUWaQPBq538Ys10HG1TXKWImFmz5US3zwBFu-";
	sensitiveStreamsTable = "1Y7ZxPVLXEYHnUMbazO9nxPRcd8H_j6U6grCGsm0H";
	statsSoilsTable = "1Hkl4nXjdG_OG6Ky0e_DVdCMq9CDyfE7ivJ2jREqx";
	mgmtDistrictsTable = "1OCsPa-OjJ6wayr8j7ZuO_uPAMAao4iC3gGy15Knw";
  //INFRA DEV
	emergingProjectTable = "102ZcPuAx3XQ8EZhXxjz9TU8VJxiNYB6VVSJkA0LN"; //EMERGING PROJECTS id
	airportTable = "1EAHy46KB9AQkF7-eKUCANVFKhK41k5B8GZLLn_tE"; //AIRPORTS tableid 
	railStopTable = "1W1EdiG-H7l2m9xFBWNjhVMTZ2O2dlQTrdchGriLG"; //RAILSTATION tableid
	interstateTable = "13qL8GPdUQgdNeP22QJ_uW_-hc02Ln9wzXjsMEAay"; //INTERSTATE tableid 
	portsTable = "1Pd7dPI5yDp2oxfGswIJMqJMKVSJUw5ATGqYmSPHZ"; //PORTS tableid
	railRoadTable = "1_Pru4FnxfcxBQGYqcUBtp8Gx3CuypZtvAjiuSvCw"; //RAILROAD tableid 
  //LU PLANNING
	tazsTable = "1avBwYMT3gPVf-xd_s0a_uySayPcdkpoK_Wpld8lY";
	countiesTable = "16mOieypquzOAotwxY06wZtDdNU3eTVd9fR59LTWi";
	schoolDistrictsTable = "1z32mA1xZtcKk9k-8lz3lAcsmx-Yxu3L5qP4ExlE5";
	cityLimitsTable = "1J0xwcoFPYjSIeWIWCiH3i66RQHf4dx1agE47hTy6";
  //PARKS AND REC
	wetlandsTable = "18l5s_ipzrymIWNan-dc9vODOdAFpk6cfiwITeMht";
	allStreamsTable = "1LOdz4vpHNc7vTgxwkJ7_aNRYG3TqtyOOuMBSJ4sp";
	aquiferTable = "1BuHzMZK1zm65Y5Ya4foIN5GiXcKWEScOPsV95_QW";
	parkLandTable = "16-AuqR9e7vGoHEvGhHR5pk2fdxBC9xEP74WMs5x_";
	
  styleType = 2;
  var tableType = emergingProjectTable;
  var EAPDDCentroid = new google.maps.LatLng(35.25072766487885, -90.49282873828129);
  var map;
  
  function initialize() {
    google.maps.visualRefresh = true;
    var isMobile = (navigator.userAgent.toLowerCase().indexOf('android') > -1) ||
      (navigator.userAgent.match(/(iPod|iPhone|iPad|BlackBerry|Windows Phone|iemobile)/));
    if (isMobile) {
      var viewport = document.querySelector("meta[name=viewport]");
      viewport.setAttribute('content', 'initial-scale=1.0, user-scalable=no');
    }
    var mapDiv = document.getElementById('googft-mapCanvas');
    mapDiv.style.width = isMobile ? '50%' : '900px';
    mapDiv.style.height = isMobile ? '50%' : '680px';
    map = new google.maps.Map(mapDiv, {
      center: new google.maps.LatLng(35.25072766487885, -90.49282873828129),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('googft-legend-open'));
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('googft-legend'));

    projectlayer = new google.maps.FusionTablesLayer({
      map: map,
      query: {
        select: "geometry",
        from: tableType,
        where: where
      },
      options: {
        styleId: styleType,
        templateId: styleType
      }
    });
    
	EAPDDBoundaryLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: boundaryTable,
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
	
    if (isMobile) {
      var legend = document.getElementById('googft-legend');
      var legendOpenButton = document.getElementById('googft-legend-open');
      var legendCloseButton = document.getElementById('googft-legend-close');
      legend.style.display = 'none';
      legendOpenButton.style.display = 'block';
      legendCloseButton.style.display = 'block';
      legendOpenButton.onclick = function() {
        legend.style.display = 'block';
        legendOpenButton.style.display = 'none';
      }
      legendCloseButton.onclick = function() {
        legend.style.display = 'none';
        legendOpenButton.style.display = 'block';
      }
    }
	
    google.maps.event.addDomListener(document.getElementById('search_func'), 'click',
            function(){
                var type = document.getElementById('Category').value;
                updateLayerQuery(projectlayer, type);
                applyStyle(map, projectlayer, type);
              });
    
  }


  function updateLayerQuery(projectlayer, type){
    ZoomRegion();
   // var county = document.getElementById('County').value;
    where = "TYPE CONTAINS IGNORING CASE '" + type + "' ";
	//CRIME
	if (type == 'Fire'){tableType = fireTable; where = "";}
	if (type == 'Police'){tableType = policeTable; where = "";}
	//DEMOGRAPHICS
	if (type == 'Population'){ styleType = 3;tableType = censusTable;}
    if (type == 'Income'){ styleType = 4;tableType = censusTable;}
	if (type == 'CensusBlocks'){tableType = blocksTable; where = "";}
	if (type == 'CensusBlockGroups'){tableType = blockGroupTable; where = "";}
	if (type == 'CensusTracts'){tableType = tractsTable; where = "";}
	if (type == 'CensusZCTAs'){tableType = zctasTable; where = "";}
	//EDUCATION
	if (type == 'PublicSchools'){tableType = schoolsTable; where = "";}
    if (type == 'Education'){styleType = 5;tableType = censusTable;}
	//ENV HEALTH
	if (type == 'Brownfields'){tableType = brownfieldsTable; where = "";}
	if (type == 'FWS_Habitat'){tableType = criticalHabitatTable; where = "";}
	if (type == 'EcoStreams'){tableType = sensitiveStreamsTable; where = "";}
	if (type == 'STATSGOSoils'){tableType = statsSoilsTable; where = "";}
	if (type == 'WildlifeMgmt'){tableType = mgmtDistrictsTable; where = "";}
	//INFRA DEV
	if (type == 'Projects'){styleType = 2; tableType = emergingProjectTable; where = "";}
	if (type == 'Airports'){tableType = airportTable; where = "";}
	if (type == 'RailStop'){tableType = railStopTable; where = "";}
	if (type == 'Interstate'){tableType = interstateTable; where = "";}
	if (type == 'Ports'){tableType = portsTable; where = "";}
	if (type == 'Railroads'){tableType = railRoadTable; where = "";}
	//LU PLANNING
	if (type == 'CityLimits'){tableType = cityLimitsTable; where = "";}
	if (type == 'SchoolDistricts'){tableType = schoolDistrictsTable; where = "";}
	if (type == 'CensusCounties'){tableType = countiesTable; where = "";}
	if (type == 'CensusTAZs'){tableType = tazsTable; where = "";}
	//PARKS AND REC
    if (type == 'ParkLands'){tableType = parkLandTable; where = "";}
	if (type == 'RiversStreams'){tableType = allStreamsTable; where = "";}
	if (type == 'Aquifers'){tableType = aquiferTable; where = "";}
	if (type == 'Wetlands'){tableType = wetlandsTable; where = "";}
	
   // if (county) {
   //   where += " AND ";
   //   where += "County = '" + county + "' ";
  //  }

    projectlayer.setOptions({
      query: {
        select: 'geometry',
        from: tableType,
        where: where
      },
      options: {
        styleId: styleType,
        templateId: styleType
      }
    });
  }
	
	function ZoomRegion(){
		map.setCenter(EAPDDCentroid);
		map.setZoom(8);
		return
	}
  
  google.maps.event.addDomListener(window, 'load', initialize);