console.log('background running!');

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
  let msg = {
    txt: "Hi I am icebear"
  }
  chrome.tabs.sendMessage(tab.id, msg);
  console.log(tab);
}
