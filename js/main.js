// Selector sidebar
function openNav() {
    document.getElementById("selectorSidebar").style.width = "600px";
}

function closeNav() {
    document.getElementById("selectorSidebar").style.width = "0px";
}

// Layers sidebar
function openLayerNav() {
  document.getElementById("layersSidebar").style.width = "600px";
}

function closeLayerNav() {
  document.getElementById("layersSidebar").style.width = "0px";
}

// Search sidebar
function openSearchNav() {
  document.getElementById("searchSidebar").style.width = "600px";
}

function closeSearchNav() {
  document.getElementById("searchSidebar").style.width = "0px";
}

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }