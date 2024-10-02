const menu = document.querySelector("#menu-img");

const menuOpen = document.querySelector(".lista-colapse");

let contador = 0;

menu.addEventListener("click", function(e) {
    e.preventDefault()
    contador++;   
    if(contador % 2 == 1) {
        menuOpen.style.display = "block";
    } else {
        menuOpen.style.display = "none";
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('main-name');
    textElement.addEventListener('animationend', () => {
      textElement.classList.add('finished');
      
      if(textElement.classList.contains("finished")) {
        const type2 = document.getElementById('typing-animation2');
        type2.style.visibility = "visible";
        type2.classList.add('start');
    }
    });
    
  });

