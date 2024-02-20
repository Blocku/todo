<div class="w-full md:w-[600px] xl:w-[650px] h-full md:h-[70dvh] border-2 border-secondary-300 rounded-xl shadow-xl px-3 pt-5 pb-24 space-y-7 ">

    <div class="w-full h-auto flex justify-between gap-3 ">
        <input class="h-auto w-[70%] py-2.5 px-3 rounded-lg focus:outline-none ring-2 ring-secondary-300 focus:ring-secondary-400 " type="text" placeholder="text" >
        <button class="btn btn--primary">Add</button>
    </div>
    <ul class="w-full h-full space-y-7 overflow-auto">
        <li class="w-full h-auto py-1 px-1 flex justify-between items-center gap-3 border-b-2 border-secondary-300">
            <p class="w-full h-auto text-base font-medium break-all ">Get up</p>
            <TrashIcon class="h-6 w-6 fill-red-500 hover:cursor-pointer"/>      
        </li>

    </ul>
</div>



<script>
	import { TrashIcon } from 'heroicons-svelte/24/solid';
</script>
