const $navText = document.querySelectorAll('.nav-text');
const $sections = document.querySelectorAll('section');

$navText[1].classList.add('nav-active');

let oldIndex = 1;

$navText.forEach(function(e, index){
    e.addEventListener('click', () =>{
        if(index != oldIndex){
            $navText[oldIndex].classList.remove('nav-active');;
            $navText[index].classList.add('nav-active');
    
            $sections[oldIndex].setAttribute('data-status', 'inactive');
            $sections[index].setAttribute('data-status', 'active');
    
            oldIndex = index;
        }        
    })
})

