<div class="w-full h-full border-2 border-zinc-300 rounded-xl shadow-xl px-3 py-5 space-y-7 ">

    <div class="w-full h-auto flex justify-between gap-3 ">
        <input class="h-auto w-[70%] py-2.5 px-3 rounded-lg focus:outline-none ring-2 ring-zinc-300 focus:ring-zinc-400 " type="text" placeholder="text" >
        <button class="btn btn--primary">Add</button>
    </div>
    <ul class="w-full max-h-[91%] space-y-7 overflow-auto ">
        <li class="w-full h-auto py-1 px-1 flex justify-between items-center gap-3 border-b-2 border-zinc-300">
            <p class="w-full h-auto text-base font-medium break-all ">Get up</p>
            <TrashIcon class="h-6 w-6 fill-red-500 "/>      
        </li>

    </ul>
</div>



<script>
	import { TrashIcon } from 'heroicons-svelte/24/solid';
</script>
