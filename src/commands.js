(function() {

    "use strict";

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

        switch (request.action) {
            case "play-pause":
                playPause();
                break;
            case "jump-forward":
                jumpForward();
                break;
            case "jump-back":
                jumpBack();
                break;
            default:
                console.log("No action registered with action: " + request.action);
        }

    });

    function playPause() {
        var btn = document.querySelector(".play_pause_button");
        clickElement(btn);
    }

    function jumpForward() {
        var btn = document.querySelector(".skip_forward_button");
        clickElement(btn);
    }

    function jumpBack() {
        var btn = document.querySelector(".skip_back_button");
        clickElement(btn);
    }

    function clickElement(el) {
        if (el.onclick) {
           el.onclick();
        } else if (el.click) {
           el.click();
        }
    }

}());
