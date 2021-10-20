/*
// qst 1 et 2
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.details').forEach(details=>{
        details.style.display="none";
    });   
    
});
document.addEventListener('click', event => {
    const element = event.target;
    if(element.className==='click') {
       
        element.style.display="none";
        element.nextElementSibling.style.display="block";
    };
    document.querySelectorAll('.details').forEach(details=>{
        if(details!=element.nextElementSibling) {
            details.style.display="none";
             
details.previousElementSibling.style.display = "block";
            
        }
    });  
});
*/


// qst 3 (code final pour la partie Apparition des descriptions détaillées – 1)
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.details').forEach(details=>{
        details.style.display="none";
    });    
});


document.addEventListener('click', event => {
    const element = event.target;
    if(element.className==='click') {
        element.style.display="none";
        element.nextElementSibling.style.display="block";
        let offsetHeight =parseFloat(element.nextElementSibling.offsetHeight);
        element.nextElementSibling.style.height=0;
        element.nextElementSibling.style.opacity=0;
        element.nextElementSibling.style.lineHeight=0;
        let height=opacity=lineHeight=0;
        let v = setInterval(function() { 
           if(height<offsetHeight)
               height++;
            
            if(opacity<1)
                opacity=opacity+0.05;

            if(lineHeight<1)
                lineHeight=lineHeight+0.05;

        element.nextElementSibling.style.height=""+height+"px";
        element.nextElementSibling.style.opacity=parseFloat(opacity);
        element.nextElementSibling.style.lineHeight=parseFloat(lineHeight);

        if(element.nextElementSibling.style.height==offsetHeight && element.nextElementSibling.style.opacity==1 && element.nextElementSibling.style.lineHeight==1)
            clearInterval(v);
     }, 30);
     
    };
         
    document.querySelectorAll('.details').forEach(details=>{
        if(details!=element.nextElementSibling) {
            details.style.display="none";
            details.previousElementSibling.style.display = "block";
        }
    });  
});


// code final pour la partie Apparition des descriptions détaillées – 2
  $(function() {
    $( document ).tooltip({
      track: true
    });
  });