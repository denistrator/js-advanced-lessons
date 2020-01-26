// *1*

let $buttonMessage = document.querySelector('#button-message');

$buttonMessage.addEventListener('click', buttonMessageClickHandler);

function buttonMessageClickHandler(event) {
    let buttonText = event.target.dataset.text;

    if (buttonText === undefined) return;

    alert(buttonText);
}


// *2*

$buttonMessage.addEventListener('mouseover', buttonMessageMouseOverHandler);
$buttonMessage.addEventListener('mouseout', buttonMessageMouseOutHandler);

function buttonMessageMouseOverHandler(event) {
    event.target.classList.add('hover');
}

function buttonMessageMouseOutHandler(event) {
    event.target.classList.remove('hover');
}


// *3*

let $body = document.querySelector('body'),
    $tag  = document.querySelector('#tag');

$body.addEventListener('click', bodyClickHandler);

function bodyClickHandler(event) {
    $tag.textContent = event.target.tagName;
}


// *4*

const LIST_ITEM_LABEL = 'Item ';
let $list                   = document.querySelector('#list'),
    $actionGenerateListItem = document.querySelector('#button-generate');

$actionGenerateListItem.addEventListener('click', generateNewListItem);

function generateNewListItem() {
    let $newListItem = document.createElement('li'),
        listCounter  = parseInt($list.lastElementChild.textContent.split(LIST_ITEM_LABEL).pop());

    $newListItem.textContent = LIST_ITEM_LABEL + (listCounter + 1);

    $list.appendChild($newListItem);
}
