
// text de titre*****************************************************************

document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.text-not-fix');
    let index = 0;

    function showNextItem() {
        items.forEach(item => item.style.display = 'none');
        items[index].style.display = 'block'; 

        index = (index + 1) % items.length;

        setTimeout(showNextItem, 3000);
    }

    showNextItem(); 
});


// Countdown Timer********************************************************************

let end=new Date("2025-12-31").getTime();
setInterval(()=>{
    let d=end-Date.now();
    const cards= document.querySelectorAll("#timer");
    if(d<=0){
        cards.forEach(ca=>{ca.innerHTML="Sale Ended!";});
        return;
    }
    let days=Math.floor(d/1000/60/60/24);
    let hrs=Math.floor(d/1000/60/60%24);
    let mins=Math.floor(d/1000/60%60);
    let secs=Math.floor(d/1000%60);
    cards.forEach(ca=>{ca.innerHTML=` ${days}d : ${hrs}h :${mins}m : ${secs}s `;});
},1000);


// slider de parts *********************************************************************

let slides= document.querySelectorAll(".slide");
let i=0;
setInterval(()=>{
    slides[i].classList.add("activee");
    i=(i+1)%slides.length;
    slides[i].classList.remove("activee");
    
},5000);


//totopbtn *****************************************************************************

const toTopBtn=document.getElementById("toTopBtn");
window.onscroll=function(){
    if(document.body.scrollTo>300||document.documentElement.scrollTop>300){
        toTopBtn.style.display="block";
    }else{
        toTopBtn.style.display="none";
    }
    toTopBtn.onclick=function(){
        window.scrollTo({
            top:0,behavior:"smooth"
        });
    }
};


//navbar links *************************************************************************

const sell_btn=document.getElementById("sell");
const home_btn=document.getElementById("homeA");
const new_btn=document.getElementById("new_cars")
const p_home=document.getElementById("home");
const p_sell=document.getElementById("sell-car");
const p_new=document.getElementById("new_c")
sell_btn.addEventListener("click",(event)=>{
    p_sell.classList.add("active");
    p_home.classList.remove("active");
    p_new.classList.remove("active");
    document.getElementById("sell-cars").classList.remove("active");
});
home_btn.addEventListener("click",(event)=>{
    p_sell.classList.remove("active");
    p_home.classList.add("active");
    p_new.classList.remove("active");
    document.getElementById("sell-cars").classList.remove("active");
});
new_btn.addEventListener("click",(event)=>{
    p_sell.classList.remove("active");
    p_home.classList.remove("active");
    p_new.classList.add("active");
    document.getElementById("sell-cars").classList.remove("active");
    
});
document.getElementById("Cars-for-sale").addEventListener("click",(event)=>{
    p_sell.classList.remove("active");
    p_home.classList.remove("active");
    p_new.classList.remove("active");
    document.getElementById("sell-cars").classList.add("active");
});

// sersh ************************************************************************

const ch=document.getElementById("search");
const cars=document.querySelectorAll(".car");
const hs=document.querySelectorAll(".otay");
ch.addEventListener("keyup",function() {
                let value =this.value.toLowerCase();
                cars.forEach(car =>{
                    let name=car.dataset.name.toLowerCase();
                    if(name.includes(value)||value.includes(name)){
                        car.style.display="block";
                    }else{
                        car.style.display="none";
                    }
                });
                hs.forEach(otay =>{
                    let name=otay.dataset.name.toLowerCase();
                    if(name.includes(value)||value.includes(name)){
                        otay.style.display="block";
                    }else{
                        otay.style.display="none";
                    }
                });
            });


// forech car ********************************************************************

const modal=document.getElementById("model");
            const colseBtn=document.getElementById("closeBtn");
const carName=document.getElementById("carName");
            const carYear=document.getElementById("carYear");
            const carPrice=document.getElementById("carPrice");
const model_content=document.getElementById("model_content");
cars.forEach(car=>{
                car.addEventListener("click",(event)=>{
                    const rect =car.getBoundingClientRect();
                    model_content.style.top=rect.top+"px";
                    model_content.style.left=rect.left+"px";
                    model_content.style.transform="scale(0.1)";
                    modal.style.display="flex";
                    setTimeout(()=>{
                        model_content.style.top="0%";
                        model_content.style.left="50%";
                        model_content.style.transform = "translate(-50%,50%) scale(1)";
                    },10);
                    carName.textContent=car.dataset.name +" "+ car.dataset.marck +" "+(2025-car.dataset.year);
                    carYear.textContent=", Driven "+car.dataset.km+" Km and "+car.dataset.year+" years old";
                    carPrice.textContent="Price : "+car.dataset.price +"£";
                });
            });
            colseBtn.addEventListener("click",()=>{
                modal.style.display="none";
            });


// signin*************************************************************************************

const annuler=document.getElementById("close-button");
const signin=document.getElementById("signin");
const passwo=document.getElementById("passwo");
passwo.style.display="none";
            annuler.onclick=function(){
                passwo.style.display="none";
            }
            signin.addEventListener("click",(event)=>{
                passwo.style.display="flex";
            });
            passwo.addEventListener("click",(event)=>{
                passwo.style.display="none";
            });
            document.getElementById('myElement').addEventListener('click', function(event) {
                event.stopPropagation(); 
            });


//menu*************************************************************************************************

const menu = document.querySelector('.menue');
const toggleButton = document.querySelector('#menu_btn');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('open');
});
menu.addEventListener("click",(event)=>{
    menu.classList.remove('open');
    document.querySelector('.Setting').classList.add('info-op')
    document.querySelector('.info').classList.add('info-op')
    document.querySelector('.Deals').classList.remove('open')
});
document.querySelector('.options').addEventListener('click', function(event) {
    event.stopPropagation(); 
});
document.querySelector('.Setting').addEventListener('click', function(event) {
    event.stopPropagation(); 
});
document.querySelector('.info').addEventListener('click', function(event) {
    event.stopPropagation(); 
});
document.querySelector('.Deals').addEventListener('click', function(event) {
    event.stopPropagation(); 
});


//translation with json*********************************************************************

//document.getElementById('translate-button').addEventListener('click', () => {
 //   fetch('ar.json')
 //       .then(response => response.json())
 //       .then(data => {
 //           document.getElementById('sign-text-content').textContent = "helllo";
 //       })
 //       .catch(error => console.error('Error loading the translation:', error));
//});


//info*******************************************************************************************

document.getElementById('info').addEventListener('click',()=>{
    document.querySelector('.Setting').classList.add('info-op')
    document.querySelector('.info').classList.toggle('info-op')
    document.querySelector('.Deals').classList.remove('open')
})


//Settings*******************************************************************************************

document.getElementById('Setting').addEventListener('click',()=>{
    document.querySelector('.info').classList.add('info-op')
    document.querySelector('.Deals').classList.remove('open')
    document.querySelector('.Setting').classList.toggle('info-op')
})


// archiv*****************************************************************************************

document.getElementById('Archive').addEventListener('click',()=>{
    alert('You must open an account first.');
});


// Favorites*****************************************************************************************

document.getElementById('Favorites').addEventListener('click',()=>{
    alert('You must open an account first.');
})


// Deals*****************************************************************************************

document.getElementById('Deals').addEventListener('click',()=>{
    document.querySelector('.info').classList.add('info-op')
    document.querySelector('.Setting').classList.add('info-op')
    document.querySelector('.Deals').classList.toggle('open')

})
