<script>
    let text = 'yes';
  </script>

<button class="btn btn--test" on:click={() => text === 'yes' ? text = 'no' : text = 'yes'}>Button</button>
<p>{text}</p>