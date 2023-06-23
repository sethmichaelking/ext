
console.log('background script listnening');

chrome.tabs.onCreated.addListener(function(tab){
    console.log('the tab', tab)
})