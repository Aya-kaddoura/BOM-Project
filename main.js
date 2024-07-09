let myInput = document.querySelector("#input");
let btn = document.getElementById("add");
let myList = document.querySelector("ul");
let span = document.querySelector("li span");


btn.addEventListener('click',() => {
    if(myInput.value != ""){
        let li = document.createElement("li");
        let mytext = document.createTextNode(myInput.value);
        let mySpan =document.createElement("span");
        mySpan.innerHTML = "X"
        li.appendChild(mytext);
        li.appendChild(mySpan);
        myList.appendChild(li);
        myInput.value = "";
        saveData();
    }
});

myList.addEventListener("click", (e) =>{
    if(e.target.tagName = "SPAN"){
        e.target.parentElement.remove()
    }
})

function saveData(){
    localStorage.setItem("task",myList.innerHTML);
};

window.onload = () =>{
    myList.innerHTML = localStorage.getItem("task");
};


// localStorage.clear()