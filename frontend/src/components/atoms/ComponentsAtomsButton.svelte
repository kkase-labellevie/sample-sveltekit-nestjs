<script lang="ts">
  import { css } from 'styled-system/css'
  export let label: string
  export let type: 'button' | 'submit' | 'reset' = 'button'
  export let onClick: () => void = () => {}
  //test
</script>

<button
  {type}
  on:click={onClick}
  class={css({
    px: '16px',
    py: '8px',
    bg: 'blue.500',
    color: 'white',
    borderRadius: '8px',
    fontSize: 'lg',
    fontWeight: 'bold',
    '&:hover': {
      bg: 'blue.600'
    },
    cursor: 'pointer'
  })}
>
  {label}
</button>
