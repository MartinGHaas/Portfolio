const $navText = document.querySelectorAll('.nav-text');

$navText[1].classList.add('nav-active');

let oldIndex = 1;
$navText.forEach(function(e, index){
    e.addEventListener('click', () =>{
        $navText[oldIndex].classList.remove('nav-active');;
        $navText[index].classList.add('nav-active');
        oldIndex = index;
    })
})