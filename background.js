chrome.browserAction.onClicked.addListener(function(tab) {
    // Open page in edit mode
    chrome.tabs.update(tab.id, {url: tab.url + "?wcmmode=edit"});
  });
  
  
  
  // Open page properties
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.update(tab.id, {url: tab.url + "/jcr:content/properties.html"});
  });