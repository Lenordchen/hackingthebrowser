function myBtnClickHandler(){
  let newDoc = window.open().document;
  newDoc.body.innerHTML = 'Look at your feet';
};

let shouldChangeColor = true;

function changeColor(){
  if (shouldChangeColor) {
    let changeColorYouWant = prompt('What color you want to change?');
    let text = document.getElementsByTagName('p');
    for (let i = 0; i < text.length; i++){
      text[i].style.color = changeColorYouWant;
    }
    shouldChangeColor = false;
  } else {
    let text = document.getElementsByTagName('p');
    for (let i = 0; i < text.length; i++){
      text[i].style.color = 'black';
    }
    shouldChangeColor = true;
  }
}
