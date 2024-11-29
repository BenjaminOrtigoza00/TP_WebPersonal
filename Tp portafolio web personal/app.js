// leer mas

let vermastext_btn = document.getElementById('vermastext_btn');

let vermastext = document.getElementById('vermastext');


vermastext_btn.addEventListener('click', toggleText);

function toggleText() {
    vermastext.classList.toggle('show');

    if(vermastext.classList.contains('show')){
        vermastext_btn.innerHTML = 'Read Lees';
    }
    else{
        vermastext_btn.innerHTML = 'Read More';  
    }
}

//modo claro oscuro

let toggle = document.getElementById('toggle');
toggle.addEventListener('change', (event) => {
    let checked = event.target.checked;

    
    document.body.classList.toggle('dark', checked);
    
    
    document.querySelector('header').classList.toggle('dark', checked);
    document.querySelector('nav').classList.toggle('dark', checked);
    document.querySelector('main').classList.toggle('dark', checked);
    document.querySelector('footer').classList.toggle('dark', checked);
    document.querySelector('div').classList.toggle('dark', checked);
    document.querySelector('section').classList.toggle('dark', checked);

    document.querySelectorAll('.dark').forEach(element => {
        element.classList.toggle('dark', checked);
    });
});



