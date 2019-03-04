
chrome.runtime.sendMessage({fromPopup: true}, function(response) {
  console.log('after I sent the getWord message, I got the response', response);
  document.getElementById('word').innerHTML = response;
})

window.onload = function(){
  document.getElementById('saveWords').onclick = function(){
    let value = document.getElementById("saveMyWords").value;
    //alert(value);

    chrome.storage.sync.set({'myWords':value},function(){
      alert("success!");
    });
  }
  document.getElementById('getWords').onclick = function() {
    chrome.storage.sync.get('myWords', function(data){
      alert(data.myWords);
    });
  }
}
