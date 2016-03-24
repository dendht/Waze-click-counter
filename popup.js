function clickHandler(e) {
	// alert("asd");
	chrome.extension.sendMessage({directive: "popup-click"}, function(response) {
		this.close(); // close the popup when the background finishes processing request
	});
}

document.addEventListener('DOMContentLoaded', function () {
	// document.getElementById('inject_code').addEventListener('click', clickHandler);
	// document.getElementById('inject').addEventListener('click', function () {
		// chrome.tabs.executeScript(null, {code: 'localStorage["click_count"]'},function(results){ document.getElementById("counter").value=results; });
	// });
	document.getElementById('cleaner').addEventListener('click', function () {
		chrome.tabs.executeScript(null, {code: 'localStorage.clear()'});
        // chrome.tabs.executeScript(null, {code: 'localStorage["click_count"]=0'},function(results){});
		console.log("Clean!");
	});
})

chrome.tabs.executeScript(null, {code: 'localStorage["click_count"]'},function(results){ document.getElementById("counter").value=results; });
// document.getElementById("counter").value=localStorage["click_count"];