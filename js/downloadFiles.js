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
  
function downloadKmls(frm)
{
	kmlArray = [];
	//loop through elements and identify checked layers
	for (var i = 0; i < frm.elements.length; i++){
		if (frm.elements[i].checked)
		{ //then create an array
			kmlArray.push(frm.elements[i].value);
		}
	}
	//loop through kml array and create downloadable link array 
	//there is an easier way, but I haven't gotten there yet...
	kmlDownloadLinkArray = [];
	kmlLinkPart1 = "https://www.google.com/fusiontables/exporttable?query=select+col2+from+";
	kmlLinkPart2 = "&o=kml&g=col2&styleId=2&templateId=2";
	
	for (var i = 0; i < kmlArray.length; i++){ //then create an array
		if (kmlArray[i] == "CB_Fire")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + fireTable + kmlLinkPart2);	}
		if (kmlArray[i] == "CB_Police")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + policeTable + kmlLinkPart2);	}
		if (kmlArray[i] == "CB_CensusBlocks")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + blocksTable + kmlLinkPart2);	}
		if (kmlArray[i] == "CB_CensusBlockGroups")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + blockGroupTable + kmlLinkPart2);	}
		if (kmlArray[i] == "CB_CensusTracts")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + tractsTable + kmlLinkPart2);	}
		if (kmlArray[i] == "CB_CensusZCTAs")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + zctasTable + kmlLinkPart2);	}
		if (kmlArray[i] == "CB_Population")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + censusTable + kmlLinkPart2);	} //different styles
		if (kmlArray[i] == "CB_PublicSchools")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + schoolsTable + kmlLinkPart2);	}
		if (kmlArray[i] == "CB_Education")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + censusTable + kmlLinkPart2);	} //different styles
		if (kmlArray[i] == "CB_Brownfields")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + brownfieldsTable + kmlLinkPart2);	}
		if (kmlArray[i] == "CB_FWS_Habitat")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + criticalHabitatTable + kmlLinkPart2);	}
		if (kmlArray[i] == "CB_EcoStreams")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + sensitiveStreamsTable + kmlLinkPart2);	}
		if (kmlArray[i] == "CB_STATSGOSoils")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + statsSoilsTable + kmlLinkPart2);	}
		if (kmlArray[i] == "CB_WildlifeMgmt")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + mgmtDistrictsTable + kmlLinkPart2);	}
		if (kmlArray[i] == "CB_RailStop")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + railStopTable + kmlLinkPart2);	}
		if (kmlArray[i] == "CB_Airports")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + airportTable + kmlLinkPart2);	}
		if (kmlArray[i] == "CB_Interstate")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + interstateTable + kmlLinkPart2);	}
		if (kmlArray[i] == "CB_Ports")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + portsTable + kmlLinkPart2);	}
		if (kmlArray[i] == "CB_Railroads")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + railRoadTable + kmlLinkPart2);	}
		if (kmlArray[i] == "CB_CityLimits")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + cityLimitsTable + kmlLinkPart2);	}
		if (kmlArray[i] == "CB_SchoolDistricts")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + schoolDistrictsTable + kmlLinkPart2);	}
		if (kmlArray[i] == "CB_CensusCounties")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + countiesTable + kmlLinkPart2);	}
		if (kmlArray[i] == "CB_CensusTAZs")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + tazsTable + kmlLinkPart2);	}
		if (kmlArray[i] == "CB_Income")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + censusTable + kmlLinkPart2);	} //different styles
		if (kmlArray[i] == "CB_Boundary")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + boundaryTable + kmlLinkPart2);	}
		if (kmlArray[i] == "CB_ParkLands")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + parkLandTable + kmlLinkPart2);	}
		if (kmlArray[i] == "CB_RiversStreams")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + allStreamsTable + kmlLinkPart2);	}
		if (kmlArray[i] == "CB_Aquifers")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + aquiferTable + kmlLinkPart2);	}
		if (kmlArray[i] == "CB_Wetlands")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + wetlandsTable + kmlLinkPart2);	}
	}
	

	for (var i = 0; i < kmlDownloadLinkArray.length; i++){ //then use array to download
		window.location.assign(kmlDownloadLinkArray[i]);
	}
}