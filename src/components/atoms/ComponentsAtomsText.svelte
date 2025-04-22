<script lang="ts">
  import { css } from 'styled-system/css'

  export let content: string
  export let size: number = 16
  //test
</script>

<p
  class={css({
    fontSize: `${size}px`
  })}
>
  {content}<br />
</p>
