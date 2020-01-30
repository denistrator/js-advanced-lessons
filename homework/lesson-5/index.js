let demoList = document.querySelector('#demo_list');
let demoObject = {
    bool: true,
    string: 'test',
    number: 123
};

localStorage.setItem('demo-object', JSON.stringify(demoObject));

let demoObjectFromLocalStorage = JSON.parse(localStorage.getItem('demo-object'));

for (let key in demoObjectFromLocalStorage){
    var demoListItem = document.createElement('li');

    demoListItem.textContent = `${key}: ${demoObjectFromLocalStorage[key]}`;

    demoList.appendChild(demoListItem);
}
