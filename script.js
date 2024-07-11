var istatus=document.querySelector("h5")

var add=document.querySelector("button")

var img=document.querySelector("img")

var i=0

add.addEventListener("click",function(){
    if(i==0){
        istatus.innerHTML="Friends";
        istatus.style.color="green";
        add.innerHTML="Remove Friend"
        add.style.backgroundColor="Red"
        i=1;
    }
    else{
        istatus.innerHTML="Stranger";
        istatus.style.color="red"
        add.innerHTML="Add"
        add.style.backgroundColor="cadetblue"
        i=0;
    }
})



add.addEventListener("mouseover", function() {
    this.style.transform = "scale(1.2)"; // Increase size by 20%
  });
  
  add.addEventListener("mouseout", function() {
    this.style.transform = "scale(1)"; // Reset size on mouseout
  });


  img.addEventListener("mouseover", function() {
    this.style.transform = "scale(1.07)"; // Increase size by 20%
    this.style.borderRadius="40px";
    this.border="4px"
  });
  
  img.addEventListener("mouseout", function() {
    this.style.transform = "scale(1)"; // Reset size on mouseout
    this.style.borderRadius="50%";
    this.border="none"
  });



