

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById('img').classList.toggle("toggle");

    }
    
    
    
    window.onclick = function(event) {
    
    var img = document.getElementById('img')
    
    
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        img.classList.remove('toggle');
        
      }
    }
    }
    }