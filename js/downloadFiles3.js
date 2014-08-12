
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
	///this query will have to be broken up into multiple parts
	kmlLinkPart1 = "https://www.google.com/fusiontables/exporttable?query=select+col2+from+";
	//the download query will only come from col#, so this needs to be corrected
	kmlLinkPart2 = "+where+col7+contains+ignoring+case+'marianna'&o=kml&g=col2&styleId=2&templateId=2";
	///this link can also be queried....
	
	for (i = 0; i < kmlArray.length; i++){ //then create an array
		if (kmlArray[i] == "fireTable")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + fireTable + kmlLinkPart2);	}
		if (kmlArray[i] == "policeTable")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + policeTable + kmlLinkPart2);	}
		if (kmlArray[i] == "blocksTable")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + blocksTable + kmlLinkPart2);	}
		if (kmlArray[i] == "blockGroupTable")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + blockGroupTable + kmlLinkPart2);	}
		if (kmlArray[i] == "tractsTable")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + tractsTable + kmlLinkPart2);	}
		if (kmlArray[i] == "zctasTable")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + zctasTable + kmlLinkPart2);	}
		if (kmlArray[i] == "schoolsTable")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + schoolsTable + kmlLinkPart2);	}
		if (kmlArray[i] == "brownfieldsTable")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + brownfieldsTable + kmlLinkPart2);	}
		if (kmlArray[i] == "criticalHabitatTable")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + criticalHabitatTable + kmlLinkPart2);	}
		if (kmlArray[i] == "sensitiveStreamsTable")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + sensitiveStreamsTable + kmlLinkPart2);	}
		if (kmlArray[i] == "statsSoilsTable")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + statsSoilsTable + kmlLinkPart2);	}
		if (kmlArray[i] == "mgmtDistrictsTable")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + mgmtDistrictsTable + kmlLinkPart2);	}
		if (kmlArray[i] == "railStopTable")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + railStopTable + kmlLinkPart2);	}
		if (kmlArray[i] == "airportTable")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + airportTable + kmlLinkPart2);	}
		if (kmlArray[i] == "interstateTable")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + interstateTable + kmlLinkPart2);	}
		if (kmlArray[i] == "portsTable")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + portsTable + kmlLinkPart2);	}
		if (kmlArray[i] == "railRoadTable")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + railRoadTable + kmlLinkPart2);	}
		if (kmlArray[i] == "cityLimitsTable")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + cityLimitsTable + kmlLinkPart2);	}
		if (kmlArray[i] == "schoolDistrictsTable")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + schoolDistrictsTable + kmlLinkPart2);	}
		if (kmlArray[i] == "countiesTable")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + countiesTable + kmlLinkPart2);	}
		if (kmlArray[i] == "tazsTable")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + tazsTable + kmlLinkPart2);	}
		if (kmlArray[i] == "boundaryTable")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + boundaryTable + kmlLinkPart2);	}
		if (kmlArray[i] == "parkLandTable")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + parkLandTable + kmlLinkPart2);	}
		if (kmlArray[i] == "allStreamsTable")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + allStreamsTable + kmlLinkPart2);	}
		if (kmlArray[i] == "aquiferTable")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + aquiferTable + kmlLinkPart2);	}
		if (kmlArray[i] == "wetlandsTable")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + wetlandsTable + kmlLinkPart2);	}
        if (kmlArray[i] == "smallBizTable")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + smallBizTable + kmlLinkPart2);	}
        if (kmlArray[i] == "higherEdTable")		{ 	kmlDownloadLinkArray.push(kmlLinkPart1 + higherEdTable + kmlLinkPart2);	}
	}


	if (kmlDownloadLinkArray.length > 0){ //then use array to download //the below is the best way to download multiple files
        //currently this works on Chrome, but it does not work on Internet Explorer
        if (kmlDownloadLinkArray.length == 1){
            window.location.assign(kmlDownloadLinkArray[0]);
        }
        if (kmlDownloadLinkArray.length == 2){
            $('#download-iframe1').attr('src',kmlDownloadLinkArray[0]);
            $('#download-iframe2').attr('src',kmlDownloadLinkArray[1]);
        }
        if (kmlDownloadLinkArray.length == 3){
            $('#download-iframe1').attr('src',kmlDownloadLinkArray[0]);
            $('#download-iframe2').attr('src',kmlDownloadLinkArray[1]);
        }
        if (kmlDownloadLinkArray.length == 4){
            $('#download-iframe1').attr('src',kmlDownloadLinkArray[0]);
            $('#download-iframe2').attr('src',kmlDownloadLinkArray[1]);
            $('#download-iframe3').attr('src',kmlDownloadLinkArray[2]);
            $('#download-iframe4').attr('src',kmlDownloadLinkArray[3]);
        }
        if (kmlDownloadLinkArray.length == 5){
            $('#download-iframe1').attr('src',kmlDownloadLinkArray[0]);
            $('#download-iframe2').attr('src',kmlDownloadLinkArray[1]);
            $('#download-iframe3').attr('src',kmlDownloadLinkArray[2]);
            $('#download-iframe4').attr('src',kmlDownloadLinkArray[3]);
            $('#download-iframe5').attr('src',kmlDownloadLinkArray[4]);
        }
	}

}