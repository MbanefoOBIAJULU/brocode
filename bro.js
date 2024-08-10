
 const lowerbtn = document.getElementById("lowerbtn")
 const resetbtn = document.getElementById("resetbtn")
 const higherbtn = document.getElementById("higherbtn")
 const countlabel = document.getElementById("countlabel")
 
 
 lowerbtn.onclick = function(){
    count--;
    countlabel.textContent= count;
 }
 higherbtn.onclick = function(){
    count++;
    countlabel.textContent= count;
 }
 resetbtn.onclick = function(){
    count = 0;
    countlabel.textContent= count;
 }