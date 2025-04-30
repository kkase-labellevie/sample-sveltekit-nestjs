<script lang="ts">
  import { css, cva } from 'styled-system/css'
  export let label: string
  export let type: 'button' | 'submit' | 'reset' = 'button'
  export let onClick: () => void = () => {}
  export let variant: 'primary' | 'attention' = 'primary'

  const buttonClass = cva({
    base: {
      px: '16px',
      py: '8px',
      color: 'white',
      borderRadius: '8px',
      fontSize: 'lg',
      fontWeight: 'bold',
      cursor: 'pointer',
      '&:hover': {
        bg: 'blue.600'
      }
    },
    variants: {
      variant: {
        primary: {
          bg: 'blue.500',
          '&:hover': { bg: 'blue.600' }
        },
        attention: {
          bg: 'red.500',
          '&:hover': { bg: 'red.600' }
        }
      }
    }
  })
  //test
</script>

<button {type} on:click={onClick} class={buttonClass({ variant })}>
  {label}
</button>
