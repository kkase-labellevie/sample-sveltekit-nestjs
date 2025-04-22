<script lang="ts">
  import { css } from 'styled-system/css'
  import { getContext } from 'svelte'

  export let content: string
  export let size: number = 16
  //test

  interface TestDataType {
    test: string
  }

  const testData = getContext<TestDataType>('test')
</script>

<p
  class={css({
    fontSize: `${size}px`
  })}
>
  {content}<br />
</p>
