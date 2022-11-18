ScrollReveal({ reset: true });

ScrollReveal().reveal('#contatos', {
    delay:150
});

ScrollReveal().reveal('#habilidades', {
    delay:150
})

ScrollReveal().reveal('#informacoes', {
    delay:150
})

ScrollReveal().reveal('#sobre', {
    delay:150
})

ScrollReveal().reveal('#dadospessoais', {
    delay:150
});

const btn = document.getElementById("btnTop")

btn.addEventListener("click", function(){
    window.scrollTo(0,0)
})

document.addEventListener('scroll',ocultar)

function ocultar(){
    if(window.scrollY > 10){
        btn.style.display = "flex"
    } else {
        btn.style.display = "none"
    }
}

ocultar()