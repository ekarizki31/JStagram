var intervallo = 0;

function autoflw() {
	//Ottengo il container dei followers
	var containerFollowers = document.getElementsByClassName("isgrP")[0];
	var idx = 0;
	
	intervallo = setInterval(function () {
	var bottoneFlw = containerFollowers.getElementsByTagName("button")[idx];
		giaSeguito = true;
		
		while(giaSeguito)
		{
			if(!(bottoneFlw.innerText.indexOf("gi") >= 0 || bottoneFlw.innerText.indexOf("eff") >= 0)) {
				//Click sul bottone se non seguo già o non ho effettuato la richiesta
				bottoneFlw.click();	
				console.log("Seguo...");
				giaSeguito = false;
			}
			
			else {
				console.log("Già seguto. Skippo...");
			}
			
			idx++;
			
			if(idx % 10 == 0) {
				//Ogni 10 follow scrollo
				containerFollowers.scrollTop += 2000
				giaSeguito = false;
			}
		}
	}, 10 * 1000);
}