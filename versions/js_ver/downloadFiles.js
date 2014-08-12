
function downloadKmls(frm)
{
	var kmlArray = [];
	//loop through elements and identify checked layers
	for (i = 0; i < frm.elements.length; i++){
		if (frm.elements[i].checked)
		{ //then create an array
			kmlArray.push(frm.elements[i].value);
		}
	}
	//loop through kml array and create downloadable link array 
	//there is an easier way, but I haven't gotten there yet...
	var kmlDownloadLinkArray = [];
	kmlLinkPart1 = "https://www.google.com/fusiontables/exporttable?query=select+col2+from+";
	kmlLinkPart2 = "&o=kml&g=col2&styleId=2&templateId=2";
	
	for (i = 0; i < kmlArray.length; i++){ //then create an array
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
        if (kmlArray[i] == "CB_SmallBiz")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + smallBizTable + kmlLinkPart2);	}
        if (kmlArray[i] == "CB_HigherEd")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + higherEdTable + kmlLinkPart2);	}
	}

    console.log(kmlArray);
    console.log(kmlDownloadLinkArray.length);

	if (kmlDownloadLinkArray.length > 0){ //then use array to download //the below is the best way to download multiple files
        if (kmlDownloadLinkArray.length == 1){
            window.location.assign(kmlDownloadLinkArray[0]);
            console.log("one selected");
        }
        if (kmlDownloadLinkArray.length == 2){
            window.location.assign(kmlDownloadLinkArray[0]);
            window.setInterval(console.log("waiting11111"),11111);
            window.location.assign(kmlDownloadLinkArray[1]);
            console.log("2 selected");
        }
        if (kmlDownloadLinkArray.length == 3){
            window.open(kmlDownloadLinkArray[0], "_self");
            window.open(kmlDownloadLinkArray[1], "_self");
            window.open(kmlDownloadLinkArray[2], "_self");
            console.log("3 selected");
        }
        if (kmlDownloadLinkArray.length == 4){
            window.open(kmlDownloadLinkArray[0], "_self");
            window.open(kmlDownloadLinkArray[1], "_self");
            window.open(kmlDownloadLinkArray[2], "_self");
            window.open(kmlDownloadLinkArray[3], "_self");
            console.log("4 selected");
        }
        if (kmlDownloadLinkArray.length == 5){
            window.open(kmlDownloadLinkArray[0], "_self");
            window.open(kmlDownloadLinkArray[1], "_self");
            window.open(kmlDownloadLinkArray[2], "_self");
            window.open(kmlDownloadLinkArray[3], "_self");
            window.open(kmlDownloadLinkArray[4], "_self");
            console.log("5 selected");
        }
	}

}