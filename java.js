// Select elements
let theInput = document.querySelector('#the-input');
let allSpans = document.querySelectorAll('.buttons span');
let spanResults = document.querySelector('.results > span');

allSpans.forEach(span => {
    span.addEventListener('click', (e) => {

        if (e.target.classList.contains('ckeck-item')){
            ckeckItem();
            CkeckInput()
        }
        if (e.target.classList.contains('add-item')){
            addItem();
        }
        if (e.target.classList.contains('delete-item')){
            deleteItem();
        }
        if (e.target.classList.contains('show-all')){
            showItem();
        }
        if (e.target.classList.contains('clear-all')){
            clearAllItems();
        }
    })
});

function CkeckInput() {
    if (theInput.value == ''){
        alert('Input Cant Be Empty')
        // spanResults.innerHTML = 'Input Can Be Empty'
    }
}

function ckeckItem() {
    if (theInput.value !== '') {
        if (window.localStorage.getItem(theInput.value)){
            spanResults.innerHTML = `Found Local Storage Item Called <span>${theInput.value}</span>`;
        }else {
            spanResults.innerHTML = `No Local Storage Item With The Name <span>${theInput.value}</span>`;
        }
    }
}

function addItem() {
    if (theInput.value !== '') {
        if (!window.localStorage.getItem(theInput.value)){
            window.localStorage.setItem(`${theInput.value}`,'Add');
            spanResults.innerHTML = `Local Storage Item <span>${theInput.value}</span> Added`;
            theInput.value = ''
        }else{
            spanResults.innerHTML = `Local Storage Item <span>${theInput.value}</span> Already Exists`;
            theInput.value = '';
        }
    }else {
        CkeckInput();
    }
}

function deleteItem() {
    if (theInput.value !== '') {
        if (window.localStorage.getItem(theInput.value)){
            window.localStorage.removeItem(`${theInput.value}`)
            spanResults.innerHTML = `Local Storage Item <span>${theInput.value}</span> Deleted`;
            theInput.value = '';
        }else {
            spanResults.innerHTML = `No Local Storage Item With The Name <span>${theInput.value}</span>`;
        }
    }else {
        CkeckInput();
    }
}

function showItem() {
    if (localStorage.length) {
        spanResults.innerHTML = '';
        let Key = Object.keys(localStorage);
        for (let index = 0; index < Key.length; index++) {
            spanResults.innerHTML +=`<span class='keys'>${Key[index]}</span> `;
        }
        // for(let [key,value] of Object.entries(localStorage)){
        //     console.log(key)
        // }
    }else {
        spanResults.innerHTML = 'Local Storage Is Empty'
    }
}

function clearAllItems() {
    if (localStorage.length) {
        localStorage.clear();
        spanResults.innerHTML = 'Deleted All Local Storage';
    }else{
        spanResults.innerHTML = 'There Are No Items To Delete'
    }
}
