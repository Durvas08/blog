function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById('img').classList.toggle("toggle");
    document.getElementById('box').classList.toggle("box_new");
    }
    
    
    
    window.onclick = function(event) {
    
    var img = document.getElementById('img')
    var box = document.getElementById('box')
    
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        img.classList.remove('toggle');
        box.classList.remove('box_new');
        
      }
    }
    }
    }


 


  setInterval(function(){

var text = document.getElementById("line-1")
text.id = 'line'
  },4000);




  setTimeout(()=> {
    document.getElementById('para').classList.toggle('switch')
 }
 ,5800);
 
