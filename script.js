const inputBox= document.getElementById('input-box');
const listItems= document.getElementById('list-items');

function addTask(){
    if(inputBox.value === ''){
        alert('Write a task!');
    }
    else{
        let li= document.createElement("li");
        li.innerHTML= inputBox.value;
        listItems.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        
    }
    inputBox.value='';
}
listItems.addEventListener("click", function(x){
    if(x.target.tagName === "LI"){
        x.target.classList.toggle('checked')
    }
    else if(x.target.tagName==="SPAN"){
        x.target.parentElement.remove();
    }
}, false);