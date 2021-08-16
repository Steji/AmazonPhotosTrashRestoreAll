var restoreSelectionLoop = 0;

function selectMyStuffToRestore(){
	if(restoreSelectionLoop != 0){
		for(var j = 0; j < 5; j++){
			window.scrollTo(0, window.scrollY + window.innerHeight * .9);
		}
	}
	
	setTimeout(function() { 
		var list;
		list = document.querySelectorAll('.selector:not(.selected)');
		for (var i = 0; i < list.length; ++i) {
			list[i].click()
		}
		
		if((restoreSelectionLoop <= 50 || document.querySelectorAll('.count')[0].innerHTML >= 2950) && !(document.querySelectorAll('.options .button')[0]?.innerHTML == 'Refresh')){
			restoreSelectionLoop++;
			selectMyStuffToRestore();
		}
		else {
			//finish, can't get restore to click automatically
			alert("done");
		}
	}, 4000);	
}

selectMyStuffToRestore();
