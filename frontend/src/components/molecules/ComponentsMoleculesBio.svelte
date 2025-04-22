<script lang="ts">
  import { css } from 'styled-system/css'
  import Text from '../atoms/ComponentsAtomsText.svelte'
  export let bio: string
  export let size: number
</script>

<div
  class={css({
    fontSize: `${size}px`,
    border: '1px solid #ccc',
    padding: '12px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
  })}
>
  <Text content={bio} size={14} />
</div>
