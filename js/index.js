// Your code goes here
const logoHead = document.querySelector('.logo-heading');
logoHead.addEventListener("click",function(){
    logoHead.innerText = "You poked my eye out!";
});



const noAdventure = document.querySelector('.intro h2');
noAdventure.addEventListener('mouseover',function(){
    noAdventure.innerText = "Hey let's not"
});


const adumpsterFire = document.querySelector('.img-content img');
adumpsterFire.addEventListener('dblclick',function(){
    adumpsterFire.src = 'img/dumpsterfire.png'
});



 window.addEventListener('resize',function(){
     if( window.innerWidth < 1000){
         document.querySelector('body').style.display = 'none';
     }
     if( window.innerWidth >1000){
         document.querySelector('body').style.display ='';
     }
 });


 window.addEventListener('wheel',function(){
     document.querySelector('header').style.color = 'rebeccapurple'
 });


//  const navEater = document.querySelector('.main-navigation');
//   navEater.addEventListener('keydown',function(){
// //   navEater.style.display = "none";
//      document.querySelector('.main-navigation').style.backgroundColor ='blue';
//   })

const noSteal = document.querySelector('.content-destination img');
noSteal.addEventListener('contextmenu',function(){
    window.alert('Quit stealing my shit!')
})

window.addEventListener('scroll',function(){
    document.querySelector('body').style.color = 'rebeccapurple'
});


const tutton = document.querySelector('.btn');
tutton.addEventListener("mouseleave",function(event){
event.target.style.color = 'red';
});


window.addEventListener('load',function(){
    this.alert('Hippity Hoppity Get Off My Property!')
});


window.addEventListener("beforeunload",function(){
    this.console.log('No dont leave me!')
},false);

let wheel = document.querySelector('.content-destination img');

wheel.addEventListener('wheel', function zoom(){

    let scale = 1;
    const el = document.querySelector('.content-destination img');
    el.onwheel = zoom; 

    event.preventDefault();

    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;


})






