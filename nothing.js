var mySeconds;
var intervalHandle;

function resetPage(){
	document.getElementById("inputArea").style.display="none";
    document.getElementById("Ti").style.display="none";
	document.getElementById("last").style.display="flex";

}
function tick(){
	var timeDisplay=document.getElementById("time");	
	var min=Math.floor(mySeconds/60);
	var sec=mySeconds-(min*60);
	if (sec < 10) {
		sec="0"+sec;
	}
	var message=min.toString()+":"+sec;
	timeDisplay.innerHTML=message;
	if(mySeconds===0){
		alert("Done");
		clearInterval(intervalHandle);
		resetPage();      
	}
	mySeconds--;
	
	
}
function startCounter(){
	var myInput=document.getElementById("minutes").value;
	if (isNaN(myInput)){
		alert("Type a valid number please");
		return;
	}
	mySeconds=myInput*60;	
	intervalHandle=setInterval(tick, 1000);
	
}


window.onload=function(){
	var myButton=document.getElementById("start");
	myButton.onclick=function(){
        document.getElementById("Ti").style.visibility="visible";
		document.getElementById("primaryContent").style.display="none";
		startCounter();		
	}		
}