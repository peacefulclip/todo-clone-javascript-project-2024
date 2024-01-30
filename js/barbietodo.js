// delete : event.target.parentElement, .filter
// JSON.stringify, JSON.parse
// .filter: exclude the false..
// function sexyFilter(item) {
//    return item!==3
// }
// [1,2,3,4].filter(sexyFilter)
// [1, 2, 4]

const barbieToDoForm = document.querySelector("#barbieToDoForm");
const barbieToDoInput = barbieToDoForm.querySelector("input");
const barbieToDoList = document.querySelector("#barbieToDoList");

let barbieToDos = [];
const savedBarbieToDos = localStorage.getItem("barbieToDos");

if (savedBarbieToDos !==null){ // if there's saved list in LS
    const parsedBarbieToDos = JSON.parse(savedBarbieToDos);
    barbieToDos = parsedBarbieToDos;
    parsedBarbieToDos.forEach(paintBarbieToDo);
};

function submitBarbieToDo(event){ //*****/
    event.preventDefault();
    const barbieNewToDo = barbieToDoInput.value;
    barbieToDoInput.value = "";
    const barbieNewToDoObj = {
        text: barbieNewToDo,
        id: Date.now(),
    };
    barbieToDos.push(barbieNewToDoObj);
    paintBarbieToDo(barbieNewToDoObj);
    saveBarbieToDo(); //****/
};

function deleteBarbieToDo(event){
    const li = event.target.parentElement;
    li.remove();
    barbieToDos = barbieToDos.filter((barbieToDo) => barbieToDo.id !== parseInt(li.id));
    saveBarbieToDo();
};

function saveBarbieToDo(){
    localStorage.setItem("barbieToDos", JSON.stringify(barbieToDos));
};

function paintBarbieToDo(barbieNewToDo){
    const li = document.createElement("li");
    li.id = barbieNewToDo.id;
    const span = document.createElement("span");
    span.innerText = barbieNewToDo.text;
    const button = document.createElement("button");
    button.addEventListener("click", deleteBarbieToDo);
    button.innerText = "X"
    li.appendChild(span);
    li.appendChild(button);
    barbieToDoList.appendChild(li);
};

barbieToDoForm.addEventListener("submit", submitBarbieToDo);