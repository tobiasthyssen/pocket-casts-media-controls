(function() {

    "use strict";

    // A map of which selector / element the command refers to
    var buttons = {
        "play-pause"   : ".play_pause_button",
        "jump-forward" : ".skip_forward_button",
        "jump-back"    : ".skip-back-button"
    }

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

        executeCommand(request.action);

    });

    function executeCommand(command) {
        var btn = document.querySelector(buttons[command]);

        if (btn !== null && isVisible(btn)) {
            clickElement(btn);
        }
    }

    function clickElement(el) {
        if (el.onclick) {
           el.onclick();
        } else if (el.click) {
           el.click();
        }
    }

    function isVisible(el) {
        return el.offsetWidth > 0 && el.offsetHeight > 0;
    }

}());
