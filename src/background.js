(function(){

    "use strict";

    chrome.commands.onCommand.addListener(function(command) {
        sendCommand(command);
    });

    function sendCommand(action) {
        chrome.tabs.query({
            "url": "https://play.pocketcasts.com/*",
        }, function(tabs) {
            var tab = tabs[0];
            if (tab && tab.id) {
                chrome.tabs.sendMessage(tab.id, { "action": action });
            }
        });
    }

}());
