
function OpenDocTree() {
  document.getElementById("doc_tree").style.width = "300px";
  document.getElementById("doc_tree").style.paddingLeft = "1%";
  document.getElementById("main-body").style.marginLeft = "300px";
}

function CloseDocTree() {
  document.getElementById("doc_tree").style.width = "0";
  document.getElementById("doc_tree").style.paddingLeft = "0";
  document.getElementById("main-body").style.marginLeft = "10%";
}

function ToggleNSLinks() {
  CollapseAllLinks();
  var div = document.getElementsByClassName("namespace_link");
  for (let i = 0; i < div.length; i++) {
    div[i].style.display = 'block';
  }
}

function ToggleClassLinks() {
  CollapseAllLinks();
  var div = document.getElementsByClassName("classes_link");
  for (let i = 0; i < div.length; i++) {
    div[i].style.display = 'block';
  }
}

function ToggleStructLinks() {
  CollapseAllLinks();
  var div = document.getElementsByClassName("structs_link");
  for (let i = 0; i < div.length; i++) {
    div[i].style.display = 'block';
  }
}


function CollapseAllLinks() {
  var div = document.getElementsByClassName("classes_link");
  for (let i = 0; i < div.length; i++) {
    div[i].style.display = 'none';
  }
  div = document.getElementsByClassName("namespace_link");
  for (let i = 0; i < div.length; i++) {
    div[i].style.display = 'none';
  }
  div = document.getElementsByClassName("structs_link");
  for (let i = 0; i < div.length; i++) {
    div[i].style.display = 'none';
  }
}