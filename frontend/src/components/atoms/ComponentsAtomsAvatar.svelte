<script lang="ts">
  import { css } from 'styled-system/css'

  export let src: string
  export let alt: string
  export let size: number = 80
  // test
</script>

<img
  {src}
  {alt}
  class={css({
    width: `${size}px`,
    height: `${size}px`
  })}
/>
