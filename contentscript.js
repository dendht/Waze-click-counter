setTimeout(function(){
    console.log("Inject started!");
    function getElementByXpath(path) {
      return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }
    // getElementByXpath("//*[@id='save-popover-container']").addEventListener('change', function () {
        // alert("asd");
        // console.log(parseInt(getElementByXpath("//*[@id='save-popover']").innerHTML));
    // });
    $('#save-popover-container').bind('DOMNodeInserted', function(event) {
        var text = $('#save-popover-container .save-popover .change-count').text();
        var success_text = $('#save-popover-container').text();
        console.log(text);
        if (text){
            text = text.replace(' place','');
            if(localStorage["click_count"]){
                console.log(parseInt(text));
                if(parseInt(text) && parseInt(text)>0){//editing points mark
                    localStorage["click_count"]=parseInt(localStorage["click_count"])+parseInt(text);
                }
                else{
                    console.log(success_text);
                    if(success_text.indexOf("Successful") > -1){//removing points mark
                        console.log("change saved! removing action");
                        localStorage["click_count"]=parseInt(localStorage["click_count"])+1;
                    }
                }
            }
            else {localStorage["click_count"]=0+parseInt(text);}
            console.log(localStorage["click_count"]);
            console.log("Increment!");
            //$('#save-popover-container').unbind();
        }
    })
    getElementByXpath("//div[contains(@class,'toolbar-button') and contains(@class,'WazeControlSave')]").addEventListener('click', function () {
        // $('#save-popover-container').bind('DOMNodeInserted DOMSubtreeModified DOMNodeRemoved', function(event) {
            // var text = $('#save-popover-container .save-popover .change-count').text();
            // console.log(text);
            // if (text){
                // text = text.replace(' place','');
                // if(localStorage["click_count"]){
                    // console.log(parseInt(text));
                    // localStorage["click_count"]=parseInt(localStorage["click_count"])+parseInt(text);
                // }
                // else {localStorage["click_count"]=0+parseInt(text);}
                // console.log(localStorage["click_count"]);
                // console.log("Increment!");
                // $('#save-popover-container').unbind();
            // }
        // })
        // $('#save-popover-container').bind('DOMNodeInserted DOMSubtreeModified DOMNodeRemoved', function(event) {
            // var text = $('#save-popover-container .save-popover .change-count').text();
            // if (text){
                // text = text.replace(/.*?(\d+)\splace.*/,'\1');
                // if(localStorage["click_count"]){
                    // console.log(text);
                    // localStorage["click_count"]=parseInt(localStorage["click_count"])+parseInt(text);
                // }
                // else {localStorage["click_count"]=0;}
                // console.log(localStorage["click_count"]);
                // console.log("Increment!");
                // $('#save-popover-container').unbind();
            // }
        // })
        
        // if(localStorage["click_count"]){
            // console.log(parseInt(getElementByXpath("//div[contains(@class,'toolbar-button') and contains(@class,'WazeControlSave')]//*[@class='counter']").innerHTML));
            // localStorage["click_count"]=parseInt(localStorage["click_count"])+parseInt(getElementByXpath("//div[contains(@class,'toolbar-button') and contains(@class,'WazeControlSave')]//*[@class='counter']").innerHTML);
        // }
        // else {localStorage["click_count"]=0;}
        // console.log(localStorage["click_count"]);
        // console.log("Increment!");
    });
    console.log("Inject finished!");
}, 5000);


// document.getElementById('im_send').addEventListener('click', function () {
	// if(localStorage["click_count"]){
		// localStorage["click_count"]=parseInt(localStorage["click_count"])+1;
	// }
	// else {localStorage["click_count"]=0;}
	// console.log(localStorage["click_count"]);
	// console.log("Increment!");
// });