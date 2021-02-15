const child = document.getElementById('child');
const body = document.getElementById('body');
function addAnimation(){
   // const child = document.getElementById('child');
   if(verifyClass()){
      // debugger
      removeClass();
   }else{
      // debugger
      addClass();
   }
};
function verifyClass(){
   // debugger
   if(child.classList.contains('exists')){
      return true;
   }else{
      return false;
   }
}
function addClass(){
   child.classList.add('exists');
   body.classList.add('body--dark')
}
function removeClass(){
   child.classList.remove('exists');
   body.classList.remove('body--dark')
}
// debugger
child.addEventListener('click', addAnimation);