/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function OpenDocTree() {
    document.getElementById("doc_tree").style.width = "250px";
    document.getElementById("main-body").style.marginLeft = "250px";
    document.getElementById("doc_tree").style.paddingLeft = "1%";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function CloseDocTree() {
    document.getElementById("doc_tree").style.width = "0";
    document.getElementById("doc_tree").style.paddingLeft = "0";
    document.getElementById("main-body").style.marginLeft = "10%";
  }