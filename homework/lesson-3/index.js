var $body = document.querySelector('body');
var $testCrud = document.createElement('div');
$testCrud.textContent = 'Test Crud';
$body.appendChild($testCrud);


// *1*

// create
$testCrud.setAttribute('id', 'test_crud');

// read
console.log($testCrud.getAttribute('id'));

// update
$testCrud.setAttribute('id', 'test_crud2');

// delete
$testCrud.removeAttribute('id');


// *2*

var $list = document.querySelector('#list');

console.log($list.firstElementChild);
console.log($list.lastElementChild);
console.log($list.firstElementChild.parentElement);


// *3*

$testCrud.style.padding = '10px';
$testCrud.style.border = '3px solid #ccc';
$testCrud.style.display = 'inline-block';
$testCrud.style.color = '#fff';
$testCrud.style.backgroundColor = '#000';


// *4*

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', handleAnchorClick);
});

function handleAnchorClick(e) {
    e.preventDefault();

    var $anchorTarget         = document.querySelector(this.getAttribute('href')),
        anchorTargetOffsetTop = $anchorTarget.getBoundingClientRect().top;

    window.scrollTo({
        top: anchorTargetOffsetTop,
        behavior: 'smooth'
    });
}
