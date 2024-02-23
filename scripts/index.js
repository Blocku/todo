const btnAdd = document.getElementById('btnAdd');
const input = document.getElementById('inputBox');
const table = document.getElementById('table');
const trash = document.querySelector('#trash');

btnAdd.addEventListener('click', () => {
    if(!input.value){
        alert('Нет текст в поле ввода')
        return;
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = `
        <li class="msgBlock">
            <p class="msg">${input.value}</p>
            <i class="trash fa-solid fa-trash-can text-red-400 cursor-pointer"></i>                 
        </li>
        `
        table.appendChild(li)
        
    }
    input.value = ''
})



table.addEventListener('click', (e)=>{
    if(e.target.tagName === 'I'){
        e.target.parentElement.remove();
    }
    
})