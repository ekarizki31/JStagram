var intervallo = 0;
var idx = 200;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function autounflw() {
	//Ottengo il container dei followers
	var containerFollowers = document.getElementsByClassName("isgrP")[0];
	
	intervallo = setInterval(async function () {
		giaSeguito = true;	//Setto preventivamente a true, così se non lo fosse, lo modifico dopo, altrimenti mi balzo il timer
		
		while(giaSeguito)
		{
			//Ottengo il bottone all'indice idx
			var bottoneFlw = containerFollowers.getElementsByTagName("button")[idx];
			
			var isFollowed = false
			isFollowed |= (bottoneFlw.innerText.indexOf("gi") >= 0);	//Già seguito in italiano
			isFollowed |= (bottoneFlw.innerText.indexOf("eff") >= 0);	//Richiesta effettuata in italiano
			isFollowed |= (bottoneFlw.innerText.indexOf("ing") >= 0);	//Già seguito in inglese
			isFollowed |= (bottoneFlw.innerText.indexOf("ted") >= 0);	//Richiesta effettuata in inglese
			
			/** Sentitevi liberi di aggiungere condizioni al vostro codice, soprattutto se non siete italiani o inglesi **/
			/** Feel free to add conditions to your code, especially if you're not english or italian **/
			
			if(isFollowed) {
				//Click sul bottone se non seguo già o non ho effettuato la richiesta
				bottoneFlw.click();	
				await sleep(500);
				var dialog = document.getElementsByClassName("piCib")[0];
				dialog.getElementsByTagName("button")[0].click();
				console.log("Smetto di seguire...");
				giaSeguito = false;
			}
			
			else {
				console.log("Già smesso di seguire. Skippo...");
			}
			
			idx++;
			
			if(idx % 10 == 0) {
				//Ogni 10 profili analizzati scrollo
				containerFollowers.scrollTop += 2000
				giaSeguito = false;
			}
		}
	}, 5 * 1000);
}