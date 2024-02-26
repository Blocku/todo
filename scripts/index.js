const btnAdd = document.getElementById('btnAdd');
const input = document.getElementById('inputBox');
const table = document.getElementById('table');

btnAdd.addEventListener('click', () => {
    if(!input.value){
        alert('Нет текста в поле ввода')
        return;
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = `
        <li class="msgBlock">
            <p class="msg">${input.value}</p>
            <i class="trash fa-solid fa-trash-can"> </i>                 
        </li>
        `
        table.append(li)  
    }
    input.value = ''
})



table.addEventListener('click', (e)=>{
    if(e.target.tagName === 'I'){
        e.target.parentElement.remove();
    }
    
})