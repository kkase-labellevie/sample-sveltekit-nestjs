<script lang="ts">
  import { count, increment, decrement, reset } from '../../lib/store/counter'
</script>

<h1>カウント: {$count}</h1>

<button on:click={increment}>+</button>
<button on:click={decrement}>-</button>
<button on:click={reset}>リセット</button>
