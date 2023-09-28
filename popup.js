document.getElementById("editModeButton").addEventListener("click", function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: "openEditMode"});
  });
});

// Add more event listeners for other buttons

