import Axios from "axios";

let myURL = 'https://api.chucknorris.io/jokes/random';
let data = [];
let buttonAdd = document.querySelector('#add_note');
let buttonRemove = document.querySelector('#remove_notes');
let searchField = document.querySelector('.search-field');
let notesList = document.createElement('div');
notesList.classList.add('notes-list');
document.body.append(notesList);


/*-------------------------------------------------------> работал
function myFetch(url) {
    fetch(url).then(function(response) {
        if (response.ok) {
            response.json().then(function(json) {
                //data = json;
                data.push(json);
                //createNote();
                renderNotes();
            });
        } else {
            alert('Network error');  
        }
    });   
}
*/
function myAxios() {
    Axios.get(myURL).then(response => {
   data.push(response); 
   renderNotes(data);
});
}





buttonAdd.onclick = function() {
    myAxios();
   // myFetch(myURL); -- работал
    //createNote();
    //renderNotes();
   //console.log(data);
}


function createNote(i) {
    let note = document.createElement('div');
    note.classList.add('note');
    let content = document.createElement('div');
    content.classList.add('content');
    content.textContent = data[i].value;
    let overlay = document.createElement('div');
    overlay.classList.add('overlay');

    let btnEdit = document.createElement('button');
    btnEdit.classList.add('btn', 'btn-warning');
    btnEdit.innerHTML = 'edit <i class="fa fa-pencil"></i>';
    btnEdit.onclick = () => {
        let newInfNote = prompt('Введите текст заметки');
       return (newInfNote === null) ? content.textContent : content.textContent = newInfNote;
    }
    let btnDelete = document.createElement('button');
    btnDelete.classList.add('btn', 'btn-danger');
    btnDelete.innerHTML = 'delete <i class="fa fa-times"></i>';
    btnDelete.onclick = function() {
        data.splice(i, 1);
        //renderNotes();
    }


    overlay.append(btnEdit, btnDelete);
    note.append(content, overlay);
    //notesList.append(note);
    return note;

}

function renderNotes(data) {
    notesList.innerHTML = '';
    data.map((elem, index) => notesList.append(createNote(index)));
}

function removeAllNotes() {
    notesList.innerHTML = '';
    data = [];
    //console.log(data);
    
}

buttonRemove.onclick = function() {
    removeAllNotes();
}

/*
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
*/
searchField.oninput = function() {
    let value = searchField.value;
    let filterNotes = data.filter(function(data) {
        return data.value.toLowerCase().includes(value.toLowerCase());

      });  
      renderNotes(filterNotes);

}