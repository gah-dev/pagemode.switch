chrome.browserAction.onClicked.addListener(function (activeTab) {
  if (activeTab.url.includes('?wcmmode=edit')) {
    // Page is already in edit mode; you can implement a different action
    console.log('Page is in edit mode.');
    // Add your logic for handling edit mode here
  } else {
    // Open page in edit mode
    chrome.tabs.update(activeTab.id, { url: activeTab.url + '?wcmmode=edit' });
  }
});

// chrome.browserAction.onClicked.addListener((tab) => {
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     const tab = tabs[0];
//     if (tab && tab.url) {
//       if (!tab.url.includes('?wcmmode=edit')) {
//         chrome.tabs.update(tab.id, { url: tab.url + '?wcmmode=edit' });
//       }
//     }
//   });
// });
