
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
  var emergingProjectTable = "102ZcPuAx3XQ8EZhXxjz9TU8VJxiNYB6VVSJkA0LN"; //EMERGING PROJECTS id
  var airportTable = "1EAHy46KB9AQkF7-eKUCANVFKhK41k5B8GZLLn_tE"; //AIRPORTS tableid 
  var railStopTable = "1W1EdiG-H7l2m9xFBWNjhVMTZ2O2dlQTrdchGriLG"; //RAILSTATION tableid
  var interstateTable = "13qL8GPdUQgdNeP22QJ_uW_-hc02Ln9wzXjsMEAay"; //INTERSTATE tableid 
  var portsTable = "1Pd7dPI5yDp2oxfGswIJMqJMKVSJUw5ATGqYmSPHZ"; //PORTS tableid
  var railRoadTable = "1_Pru4FnxfcxBQGYqcUBtp8Gx3CuypZtvAjiuSvCw"; //RAILROAD tableid 
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
    //CRIME
  var fireLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: fireTable,
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
	
  var policeLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: policeTable,
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
    //DEMOGRAPHICS
  var populationLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: censusTable,
        where: ""
      },
      options: {
        styleId: 3,
        templateId: 3
      }
    });
  /* 
  var blockGroupLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: blockGroupTable,
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
 
  var blocksLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: blocksTable,
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
  
  var tractsLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: tractsTable,
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
  var zctasLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: zctasTable,
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
  var incomeLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: censusTable,
        where: ""
      },
      options: {
        styleId: 4,
        templateId: 4
      }
    });
 //EDUCATION
  var schoolsLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: schoolsTable,
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
    var educationLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: censusTable,
        where: ""
      },
      options: {
        styleId: 5,
        templateId: 5
      }
    });
  //ENV HEALTH
  var brownfieldsLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: brownfieldsTable,
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
  
  var criticalHabitatLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: criticalHabitatTable,
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
  
  var sensitiveStreamsLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: sensitiveStreamsTable,
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
  
  var statsSoilsLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: statsSoilsTable,
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
  
  var mgmtDistrictsLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: mgmtDistrictsTable,
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
  
  //INFRA DEV
  var emergingProjectLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: emergingProjectTable,
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
  var airportLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: airportTable,
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
  
  var railStopLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: railStopTable,
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
  
  var interstateLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: interstateTable,
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
	
  var portsLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: portsTable,
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
  var railRoadLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: railRoadTable,
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
  //LU PLANNING
  var tazsLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: tazsTable,
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
  var countiesLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: countiesTable,
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
  var schoolDistrictsLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: schoolDistrictsTable,
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
  var cityLimitsLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: cityLimitsTable,
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
  //PARKS AND REC
  var wetlandsLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: wetlandsTable,
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
  var allStreamsLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: allStreamsTable,
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
  var aquiferLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: aquiferTable,
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
  var parkLandLayer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: parkLandTable,
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
	 */

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
	
	fireLayer.setMap(null);
	policeLayer.setMap(null);
	populationLayer.setMap(null);
/* 	blockGroupLayer.setMap(null);
	blocksLayer.setMap(null);
	tractsLayer.setMap(null);
	zctasLayer.setMap(null);
	incomeLayer.setMap(null);
	schoolsLayer.setMap(null);
	educationLayer.setMap(null);/*
	brownfieldsLayer.setMap(null);
	criticalHabitatLayer.setMap(null);
	sensitiveStreamsLayer.setMap(null);
	statsSoilsLayer.setMap(null);
	mgmtDistrictsLayer.setMap(null);
	emergingProjectLayer.setMap(null);
	airportLayer.setMap(null);
	railStopLayer.setMap(null);
	interstateLayer.setMap(null);
	portsLayer.setMap(null);
	railRoadLayer.setMap(null);
	tazsLayer.setMap(null);
	countiesLayer.setMap(null);
	schoolDistrictsLayer.setMap(null);
	cityLimitsLayer.setMap(null);
	wetlandsLayer.setMap(null);
	allStreamsLayer.setMap(null);
	aquiferLayer.setMap(null);
	parkLandLayer.setMap(null); */
	
	
	
	
	
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
	

    
  }
  
	function ZoomRegion(){
		map.setCenter(EAPDDCentroid);
		map.setZoom(8);
		return
	}
	
//**Toggle Function for the checkbox**///
  	function ToggleLayer(tableSelection){
	//CRIME
		if (tableSelection == "CB_Fire")
		{
			if (document.getElementById("FireCheckbox").checked == true)
			{
				if (fireLayer.getMap() == null)	{fireLayer.setMap(map);}
			}
			if (document.getElementById("FireCheckbox").checked == false)	{fireLayer.setMap(null);}
		}
		
		if (tableSelection == "CB_Police")
		{
			if (document.getElementById("PoliceCheckbox").checked == true)
			{
				if (policeLayer.getMap() == null) {policeLayer.setMap(map);	}
			}
			if (document.getElementById("PoliceCheckbox").checked == false)	{policeLayer.setMap(null);}
		}
		
	//DEMOGRAPHICS	
		if (tableSelection == "CB_Population")
		{
			if (document.getElementById("PopulationCheckbox").checked == true)
			{
				if (populationLayer.getMap() == null) {populationLayer.setMap(map);}
			}
			if (document.getElementById("PopulationCheckbox").checked == false)	{populationLayer.setMap(null);}
		}
/* 		
	 	if (tableSelection == "CB_CensusBlockGroups")
		{
			if (document.getElementById("CensusBlockGroupsCheckbox").checked == true)
			{
				if (blockGroupLayer.getMap() == null) {blockGroupLayer.setMap(map);}
			}
			if (document.getElementById("CensusBlockGroupsCheckbox").checked == false)	{blockGroupLayer.setMap(null);}
		}
		if (tableSelection == "CB_CensusBlocks")
		{
			if (document.getElementById("CensusBlocksCheckbox").checked == true)
			{
				if (blocksLayer.getMap() == null) {blocksLayer.setMap(map);}
			}
			if (document.getElementById("CensusBlocksCheckbox").checked == false)	{blocksLayer.setMap(null);}
		}
		if (tableSelection == "CB_CensusTracts")
		{
			if (document.getElementById("CensusTractsCheckbox").checked == true)
			{
				if(tractsLayer.getMap() == null) {tractsLayer.setMap(null);}
			}
			if (document.getElementById("CensusTractsCheckbox").checked == true)	{tractsLayer.setMap(null);}
		}
		if (tableSelection == "CB_CensusZCTAs")
		{
			if (document.getElementById("CensusZCTAsCheckbox").checked == true)
			{
				if(zctasLayer.getMap() == null) {zctasLayer.setMap(null);}
			}
			if (document.getElementById("CensusZCTAsCheckbox").checked == true)	{zctasLayer.setMap(null);}
		}
		if (tableSelection == "CB_Income")
		{
			if (document.getElementById("IncomeCheckbox").checked == true)
			{
				if(incomeLayer.getMap() == null) {incomeLayer.setMap(null);}
			}
			if (document.getElementById("IncomeCheckbox").checked == true)	{incomeLayer.setMap(null);}
		}

/*	//EDUCATION
		if (tableSelection == "CB_Education")
		{
			if (document.getElementById("EducationCheckbox").checked == true)
			{
				if(educationLayer.setMap(null); {educationLayer.setMap(null);}
			}
			if (document.getElementById("EducationCheckbox").checked == false) {educationLayer.setMap(null);}
		}
		if (tableSelection == "CB_PublicSchools")
		{
			if (document.getElementById("PublicSchoolsCheckbox").checked == true)
			{
				if(schoolsLayer.setMap(null); {schoolsLayer.setMap(null);}
			}
			if (document.getElementById("PublicSchoolsCheckbox").checked == false) {schoolsLayer.setMap(null);}
		}

 */
	
	/* //ENV HEALTH
	brownfieldsLayer.setMap(null);
	criticalHabitatLayer.setMap(null);
	sensitiveStreamsLayer.setMap(null);
	stastSoilsLayer.setMap(null);
	mgmtDistrictsLayer.setMap(null);
	
	//INFRA DEV
	emergingProjectLayer.setMap(null);
	airportLayer.setMap(null);
	railStopLayer.setMap(null);
	interstateLayer.setMap(null);
	portsLayer.setMap(null);
	railRoadLayer.setMap(null);
	
	//LU PLANNING
	tazsLayer.setMap(null);
	countiesLayer.setMap(null);
	schoolDistrictsLayer.setMap(null);
	cityLimitsLayer.setMap(null);
	
	//PARKS AND REC
	wetlandsLayer.setMap(null);
	allStreamsLayer.setMap(null);
	aquiferLayer.setMap(null);
	parkLandLayer.setMap(null); */
	}
  
  google.maps.event.addDomListener(window, 'load', initialize);
  
  
  
  
  
  
  
  
  
  
  