(function(){

    "use strict";

    chrome.commands.onCommand.addListener(function(command) {

        switch (command) {
            case "play-pause":
                executeAction("play-pause");
                break;
            case "jump-forward":
                executeAction("jump-forward");
                break;
            case "jump-back":
                executeAction("jump-back");
                break;
            default:
                console.log("No action registered with command: " + command)
        }

    });

    function executeAction(action) {
        chrome.tabs.query({
            "url": "https://play.pocketcasts.com/*",
        }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { "action": action });
        });
    }

}());
