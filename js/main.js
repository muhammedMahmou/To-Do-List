let toDo = document.getElementById("toDo")
let btn = document.getElementById("button-form")
let list = document.getElementById("list")
let alert1 = document.getElementById("alert")
function addTask(){
    if (toDo.value === '') {
        alert1.classList.remove("none")
    }
    else{ 
        let li = document.createElement("li")
        li.innerHTML=toDo.value
        list.appendChild(li)
        let i = document.createElement("i")
        i.setAttribute("class", "fa-solid fa-xmark");
        li.appendChild(i)
        toDo.value = ""
        alert1.classList.add("none")
    }
    setItem()
}
btn.addEventListener("click",addTask)
document.addEventListener("keyup",(event)=>{
    if (event.code == "Enter") {
        addTask()
    }
    else if (event.code == "NumpadEnter") {
        addTask()

    }
})
list.addEventListener("click",(event)=>{
    if (event.target.tagName === "LI") {
       event.target.classList.toggle("checked");
    }
    else if(event.target.tagName === "I"){
        event.target.parentElement.remove()
    }
    setItem()
})
function setItem(){
    localStorage.setItem("list",list.innerHTML)
}
function getItem(){
    list.innerHTML=localStorage.getItem("list")
}
getItem()