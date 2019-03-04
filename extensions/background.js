console.log('background running!');

// chrome.browserAction.onClicked.addListener(buttonClicked);
//
// function buttonClicked(tab){
//   let msg = {
//     txt: "Hi I am icebear"
//   }
//   chrome.tabs.sendMessage(tab.id, msg);
//   console.log(tab);
// }

chrome.runtime.onMessage.addListener(receiver);

 window.word = 'hacking the browser';

function receiver (request, sender, sendResponse) {
  console.log(request);
  if (request.text) {
    window.word = request.text;
  } else if (request.fromPopup) {
    // send the word to the popup
    sendResponse(window.word);
  }
  window.word = request.text;
}
