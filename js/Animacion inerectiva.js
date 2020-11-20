let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activador = true;

// menu de navegacion

  btnMenu.addEventListener('click', () => {
      
      document.querySelector('.btn-menu i').classList.toggle('fa-times');
    
    if(activador){
        menu.style.left = "0";
        menu.style.trasition = "0.5s";
        
        
        activador = false;
    }else{
        activador = false;
        
        menu.style.left = "-100%";
        menu.style.transition = "0.5s";
        
        activador= true;
    }
    
});
// Intercalar clase active

let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach( (element)=> {
    
    element.addEventListener('click', (Event) => {
    
        enlaces.forEach( (link) => {
            link.classList.remove('activo');
            
        });
        
        event.target.classList.add('activo');
        
    });
    
    
});

//Efectos scroll

let prevScrollPos = window.pageYOffset;

window.onscroll = () => {
    
    let currenScrollPos = window.pageYOffset;
    
    //Mostrar y ocultar menu
    
    
    if (prevScrollPos > currenScrollPos) {
        
        
        containerMenu.style.top = "0";
        containerMenu.style.transition= "0.5s";
        
    }else {
        containerMenu.style.top = "-60px";
        containerMenu.style.transition= "0.5s";  
    }
    
    prevScrollPos = currenScrollPos;
    
    //Mostrar y ocultar Scroll Estilos
    
    let arriba = window.pageXOffset;
    
    if (arriba <= 600){
        containerMenu.style.borderBottom = "5px solid #F56D08";
        
    }
}
































