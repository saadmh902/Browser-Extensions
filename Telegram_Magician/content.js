if(document.URL.indexOf("https://web.telegram.org/") >= 0){ 
	console.log("Loaded Telegram Tool");
}

document.title = "Telegram Magician";
let root = document.documentElement;

chrome.storage.sync.get("colorTheme", function (obj) {//Get Color from saved extension data

    newColor = obj["colorTheme"];

    if(newColor == null || newColor == undefined){newColor = "#8774E1"} //if extension data isn't saved load default color (usually on fresh install)
    root.style.setProperty('--primary-color', newColor);//Set theme colors
	root.style.setProperty('--message-out-background-color', newColor);
});


chrome.storage.sync.get("fontColor", function (obj) {//Get font Color from saved extension data

    fontColor = obj["fontColor"];


    if(fontColor == null || fontColor == undefined){fontColor = "#000";} //if extension data isn't saved load default color (usually on fresh install)

	root.style.setProperty('--primary-text-color', fontColor);

});

