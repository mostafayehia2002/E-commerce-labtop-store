
let win=  document.getElementById("window");





let btn=document.getElementsByTagName("button");
for(let i=0;i<btn.length;i++){
btn[i].onclick=function ff(){

  if(win.style.display=="none")  {
         win.style.display="block";
         win.className="window";
        
       }
      else{
        win.style.display="none";
       }
}

}

function method2(){
  window.alert("Congratulations dear, you will receive the product within a day",null);
}

// function method(){
//   if(win.style.display=="none")  {
//     win.style.display="block";
//   }
//   else{
//     win.style.display="none";
//   }


// }


