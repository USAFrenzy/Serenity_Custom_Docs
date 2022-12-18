
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

function RotateTriangle(tri) {
  const triangles = document.getElementsByClassName('right-facing-arrow');
  triangles[tri].style.transform = "rotate(90deg)";
  const div = document.getElementsByClassName('dropdown-content');
  div[tri].style.display = 'block';
}

function ResetTriangle(tri) {
  const triangles = document.getElementsByClassName('right-facing-arrow');
  triangles[tri].style.transform = "rotate(360deg)";
  const div = document.getElementsByClassName('dropdown-content');
  div[tri].style.display = 'none';
}

function ToggleTriangle(tri) {
  const triangles = document.getElementsByClassName('right-facing-arrow');
  let triangle = triangles[tri];
  if (triangle.style.display === 'block') {
    triangle.style.display = 'none';
  } else {
    triangle.style.display = 'block';
  }
}

function ToggleContent(content, index){
  const cont = document.getElementsByClassName(content);
  let item = cont[index];
  if (content.style.display === 'block') {
    content.style.display = 'none';
  } else {
    content.style.display = 'block';
  }
}