 
	function popupZone(){
		for(i=1;i<=popupItemCount;i++){
			if(popupZoneTmpVal!=1) {
				popupZoneVal = popupZoneTmpVal;
				popupZoneTmpVal = 1;
			}
			if(popupZoneVal == popupItemCount+1)	popupZoneVal = 1;
			if(popupZoneVal==0) popupZoneVal = 1;
			id1 = "popnum"+i
			id2 = "popBanner_"+i
			if(popupZoneVal==i){
				document.getElementById(id1).setAttribute('src',"images/ale_btn"+i+"_on.gif");
				document.getElementById(id2).style.display	= "";
			}else{
				document.getElementById(id1).setAttribute('src',"images/ale_btn"+i+".gif");
				document.getElementById(id2).style.display	= "none";
			}
		}
		popupZoneVal = popupZoneVal + 1;
		autocontrolvar=setTimeout("popupZone()",1000);
	}
	function popupZoneStop(chk){
		if(chk){
			clearTimeout(autocontrolvar);
		}else{
			clearTimeout(autocontrolvar);
			popupZone();
		}
	}	
	function popupZoneStop2(chk){		
		if(chk == "p"){
			clearTimeout(autocontrolvar);
		}else{
			clearTimeout(autocontrolvar);
			popupZone();
		}
	}
	function popupZoneMove(num){
		for(i=1;i<=popupItemCount;i++){
			id1 = "popnum"+i
			id2 = "popBanner_"+i
			if(num==i){
				document.getElementById(id1).setAttribute('src',"images/ale_btn"+i+"_on.gif");
				document.getElementById(id2).style.display	= "";
			}else{
				document.getElementById(id1).setAttribute('src',"images/ale_btn"+i+".gif");
				document.getElementById(id2).style.display	= "none";
			}
		}
		popupZoneVal = num;
		popupZoneTmpVal = num;
		popupZoneStop(1);
	} 	


	function mainPopup(url,width,height){						
		window.open(url,"main_popup","width="+width+",height="+height+",toolbar=no,scrollbars=no,status=no,fullscreen=0");
	} 