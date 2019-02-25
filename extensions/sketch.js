function setup(){
  let userinput = document.createElement("INPUT");
  x.setAttribute("type");
  x.setAttribute("value");
  document.body.appendChild(x);
  userinput.input(newText);

  function newText(){

    chrome.tabs.getCurrent(gotTab);

    function gotTab(){
    let message = userinput.value();
    let msg = {
      txt: "Hi I am icebear"
    }
    chrome.tabs.sendMessage(tab.id, msg);
  }
}
}
