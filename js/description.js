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

 
// code final pour la partie Auto-évaluation des connaissances
  document.addEventListener('DOMContentLoaded', function() { 
    let data=[];
    document.querySelectorAll('td').forEach(function (td, j) {
        let number = td.getAttribute("id");
        if(number != null)
        {
            number = parseInt(number);
        let content="";
        
        
        
        for(let i=0; i<number; i++)
        {
            content+=`&nbsp;<i class="fas fa-star"></i>&nbsp;`;
            
        }
        td.innerHTML=content;
        }
        data[j]=number;
       


    }); 
    for(let i = 0; i < data.length; i++)
   {
       if(!data[i])
           data.splice(i,1);  
   }
console.log(data); 
// Get the canvas
var canvas = document.getElementById('myCanvas');
// Set the context
var ctx = canvas.getContext('2d');
// draws the histogram
for(var i=0; i <= data.length; i++){
 drawHistogram([i]+10,0,30,data[i]*20,"#008080");
}
// function to construct the histogram 
function drawHistogram(x,y,w,h,color) {
//   Good pratice save context
  ctx.save();
  
  ctx.fillStyle=color;
  ctx.fillRect(x,y,w,h);
//   Good pratice restore context
  ctx.restore();
}  


}); 



    





