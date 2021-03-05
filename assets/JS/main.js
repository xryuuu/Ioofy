const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)

    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
        toggle.addEventListener('click', () => {
            // show navbar
            nav.classList.toggle('show')
            // change icon
            toggle.classList.toggle('bx-x')
            // add padding to body
            bodypd.classList.toggle('body-pd')
            // add padding to header
            headerpd.classList.toggle('body-pd')
        })
    }
}

showNavbar('header-toggle','nav-bar','body-pd','header')

const linkColor = document.querySelectorAll('.nav_link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(l => l.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))

var typed = new Typed('.animation', {
    // Waits 1000ms after typing "First"
    strings: [
        'Kids.', 
        'Students.',
    ],
        typeSpeed: 60,
        backSpeed: 60,
        backDelay: 6000,
        loop:true,
});


var typed = new Typed('.dashtext', {

    strings: [
        '>_ Welcome Bro.',
        '>_ Have a nice day!',
    ],

        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 5000,
        showCursor: false,
        loop:true,
});