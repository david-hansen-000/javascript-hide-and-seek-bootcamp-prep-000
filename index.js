function getFirstSelector(selector) {
  var result=document.querySelector(selector);
  return result;
}

function nestedTarget() {
  const myNode=document.queryElementById("nested").querySelectorAll("div");
  for (let i=0; i<myNode.length; i++) {
    
  }
}
