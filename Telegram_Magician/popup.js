    	var Slider = document.querySelector('input[name=colorInput]');
    	loadSavedValues();
    	Slider.addEventListener("input", changeColorTheme);

        let newFontText = "";
        let changeFontText = document.querySelectorAll('input[name="fontText"]');

        for (let i = 0; i < changeFontText.length; i++) {
        changeFontText[i].addEventListener("change", function() {
        let val = this.value;
        newFontText = this.value;
        document.getElementById("Example").style.setProperty('color', `${val}`);
        });
        }

        var Reset = document.getElementById("reset");
        Reset.addEventListener("click", clearData);


  
    	function changeColorTheme(){ // Change color on slide
			Slider.style.setProperty('--SliderColor', `hsl(${Slider.value}, 100%, 50%)`);
			document.getElementById("Example").style.setProperty('background-color', `hsl(${Slider.value}, 100%, 50%)`);
    	}


    	document.getElementById("save").addEventListener("click", saveData);
    	function saveData(){
    		newColor = document.getElementById("Example").style.backgroundColor;
    		chrome.storage.sync.set({ colorTheme: newColor });
			chrome.storage.sync.set({ sliderValue: Slider.value });
            chrome.storage.sync.set({ fontColor: newFontText });
            alert(newFontText);
    		chrome.tabs.reload();
    	}


    	function loadSavedValues(){
    		//Get extension storage and set slider values from previous info
    		chrome.storage.sync.get("sliderValue", function (obj) {//Get Color from saved extension data
    			oldValue = obj["sliderValue"];
    			if(oldValue == undefined){ oldValue = 1 };
    			Slider.value = oldValue
				document.getElementById("Example").style.setProperty('background-color', `hsl(${oldValue}, 100%, 50%)`); //Set color at launch
				Slider.style.setProperty('--SliderColor', `hsl(${oldValue}, 100%, 50%)`); //Set color at launch
    			return;
    		});

            chrome.storage.sync.get("fontColor", function (obj) {//Get Color from saved extension data
                oldFontText = obj["fontColor"];
                if(oldFontText == undefined){ oldFontText = "white" };
                document.getElementById("Example").style.setProperty('color', `${oldFontText}`);
                return;
            });


    	}

    	function clearData(){ //reset to default and remove chrome extension storage

    		chrome.storage.sync.set({ colorTheme: null });
			chrome.storage.sync.set({ sliderValue: null });
            chrome.storage.sync.set({ fontColor: null });
            chrome.tabs.reload();
    	}