

<div class="h-dvh md:flex md:justify-center md:items-center">
    <div class="w-full md:w-[500px] h-full md:h-[70dvh] md:border-2 md:border-secondary-300 md:rounded-xl md:shadow-xl px-3 pt-3 pb-[5.5rem] space-y-7 ">
        <div class="w-full h-auto flex justify-between gap-3 ">
            <input id="inputBox" class="h-auto w-[70%] py-2.5 px-3 rounded-lg focus:outline-none ring-2 ring-secondary-300 focus:ring-secondary-400 " type="text" placeholder="text" >
            <button id="btnAdd" type='button' class="btn btn--primary">Add</button>
        </div>
        <ul id='table' class="table">
            <!-- <TrashIcon id="trash" class="h-6 w-6 fill-red-500 hover:cursor-pointer"/>  -->
        </ul>
    </div>
</div>




<script>
	import { TrashIcon } from 'heroicons-svelte/24/solid';

    // const btnAdd = document.getElementById('btnAdd');
    // const input = document.getElementById('inputBox');
    // const table = document.getElementById('table');

    // btnAdd.addEventListener('click', () => {
    //     if(!input.value){
    //         alert('Нет текста в поле ввода')
    //         return;
    //     }
    //     else{
    //         let li = document.createElement('li')
    //         li.innerHTML = `
    //         <li class="msgBlock">
    //             <p class="msg">${input.value}</p>
    //             <i class="trash fa-solid fa-trash-can"> </i>                 
    //         </li>
    //         `
    //         table.append(li)  
    //     }
    //     input.value = ''
    // })



    // table.addEventListener('click', (e)=>{
    //     if(e.target.tagName === 'I'){
    //         e.target.parentElement.remove();
    //     }
        
    // })

</script>











<!-- <div class="w-full md:w-[500px] h-full md:h-[70dvh] md:border-2 md:border-secondary-300 md:rounded-xl md:shadow-xl px-3 pt-3 pb-[5.5rem] space-y-7 ">

    <div class="w-full h-auto flex justify-between gap-3 ">
        <input class="h-auto w-[70%] py-2.5 px-3 rounded-lg focus:outline-none ring-2 ring-secondary-300 focus:ring-secondary-400 " type="text" placeholder="text" >
        <button type='button' class="btn btn--primary">Add</button>
    </div>
    <ul id='table' class="w-full h-full space-y-7 overflow-auto">
        <li class="w-full h-auto py-1 px-1 flex justify-between items-center gap-3 border-b-2 border-secondary-300">
            <p class="w-full h-auto text-base font-medium break-all ">Get up</p>
                 
        </li>
    </ul>
</div> -->